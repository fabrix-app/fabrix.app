import { Injectable } from '@angular/core'
import { RouterEvent } from '@angular/router'
import { isEmpty, isArray } from 'lodash'

import { Store } from '@ngrx/store'
import * as app from '../../store/actions/app'

// NavItems Interface
export interface NavItems {
  [key: string]: {
    id?: number
    name?: string | null,
    group?: string | null,
    icon?: string | null,
    active?: boolean,
    open?: boolean,
    display?: boolean,
    regexp?: boolean,
    routerLink?: string | null | any[],
    classes?: string[],
    children?: NavItems | any[],
    hasChildren?: boolean
    siblings?: NavItems,
    hasSiblings?: boolean,
    selected?: any
  }
}

export interface NavBuilt {
  root?: boolean,
  id?: number,
  name?: string,
  group?: string,
  icon?: string | null,
  classes?: string[],
  routerLink?: string | null | any[],
  display?: boolean,
  open?: boolean,
  active?: boolean,
  regexp?: boolean,
  level?: number,
  children?: NavBuilt[],
  hasChildren?: boolean,
  siblings?: NavBuilt[],
  hasSiblings?: boolean,
  selected?: NavBuilt[]
}

let ids = 2
export interface SelectableGroup {
  root?: boolean
  id?: number
  name?: string | null
  group?: string | null
  icon?: string | null
  classes?: Set<string>
  // classes?: string[]
  routerLink?: string | null | any[] // | any[]
  siblings?: any
  children?: SelectableGroup[]
  display?: boolean
  regexp?: RegExp|boolean
  open?: boolean
  active?: boolean
  level?: number
  groups?: any,
  selected?: SelectableGroup[]
}

/**
 *
 */
export class SelectableGroup {
  constructor({
      root = false,
      id = 1,
      name = 'app',
      group,
      icon = null,
      classes = [],
      routerLink = null,
      display = true,
      open = false,
      active = false,
      regexp = false,
      level = 0,
      siblings = {},
      children = []
    }: {
      root?: boolean
      id?: number
      name?: string,
      group?: string,
      icon?: string|null,
      classes?: string[],
      routerLink?: string|null,
      display?: boolean,
      active?: boolean,
      open?: boolean,
      regexp?: boolean,
      level?: number,
      siblings?: NavItems | any[],
      children?: NavItems | any[]
    },
    selected?: RouterEvent,
    breadcrumbs?: SelectableGroup[],
    closeLevel?: number
  ) {
    this.root = root
    this.id = id
    this.name = name
    this.group = group || this.name
    this.icon = icon || null
    this.routerLink = routerLink || null
    this.level = level
    this.siblings = this.addSiblings(siblings)
    this.children = this.addChildren(children, selected, breadcrumbs, closeLevel)
    this.display = display
    this.regexp = regexp ? new RegExp(this.routerLink) : false
    this.open = closeLevel >= this.level || open
    this.active = active

    this.classes = this.addClasses(classes)

    if (this.root) {
      this.selected = breadcrumbs
    }
    if (this.root && selected) {
      this.changeSelection(selected, breadcrumbs, closeLevel)
    }
  }

  /**
   *
   */
  addClasses(classes) {
    classes = new Set(classes)
    classes.add(`level-${this.level}`).add(`group-${ this.group.replace(' ', '-')}`)
    if (this.open) {
      classes.add('opened')
    }
    else {
      classes.add('closed')
    }
    return classes
  }

  /**
   *
   */
  addChildren(children, selected?: RouterEvent, breadcrumbs?, closeLevel?) {
    children = children || []

    const c = isArray(children) ? children : Object.values(children)
    return c.map(child => {
      const newId = child.id || ids++
      // console.log('ID', newId)
      return new SelectableGroup({
        ...child,
        id: newId,
        siblings: c,
        group: this.name,
        level: this.level + 1
      }, selected, breadcrumbs, closeLevel)
    })
  }
  addSiblings(siblings) {
    siblings = siblings || []
    return isArray(siblings) ? siblings : Object.values(siblings)
  }

  /**
   *
   */
  findChild(child: any | SelectableGroup) {
    if (this.id === child.id) {
      return this
    }
    else {
      return this.children.find(c => {
        return c.findChild(child)
      })
    }
  }

  /**
   *
   */
  hasChild(child: SelectableGroup) {
    if (this.id === child.id) {
      return true
    }
    else {
      return this.children.find(c => {
        return c.hasChild(child)
      })
    }
  }

  /**
   *
   */
  get hasSiblings(): boolean {
    return !isEmpty(this.siblings)
  }

  /**
   *
   */
  get hasChildren(): boolean {
    return !isEmpty(this.children)
  }

  /**
   *
   */
  get isRegexp () {
    return this.regexp instanceof RegExp
  }

  /**
   *
   */
  getPathFromUrl(url) {
    return url.split(/[?#]/)[0]
  }

  /**
   *
   */
  matchActive(selected: RouterEvent): boolean {
    const url = this.getPathFromUrl(selected.url)

    if (this.regexp instanceof RegExp) {
      const exp = this.regexp
      return exp.test(url)
    }
    else {
      return url === this.routerLink
    }
  }

  /**
   *
   */
  changeSelection(selected: RouterEvent, breadcrumbs = [], closeLevel = 0): SelectableGroup {

    this.children.forEach(child => {
      breadcrumbs.concat(child.select(selected, breadcrumbs))
    })

    this.deactivate()
    this.close(closeLevel)

    breadcrumbs.forEach(crumb => {
      crumb.activate()
    })

    this.selected = breadcrumbs
    return this
  }

  /**
   *
   */
  select(selected: RouterEvent, breadcrumbs = []) {

    this.children.forEach(child => {
      child.select(selected, breadcrumbs)
      if (breadcrumbs.indexOf(child) !== -1) {
        breadcrumbs.unshift(this)
      }
    })
    if (this.matchActive(selected) && breadcrumbs.indexOf(this) === -1) {
      breadcrumbs.unshift(this)
    }
    return breadcrumbs
  }

  /**
   *
   */
  reset(): void {
    this.open = false
    this.active = false
    this.children.forEach(child => child.reset())
    return
  }

  /**
   *
   */
  opened (): void {
    this.open = true
    this.classes.add('opened').delete('closed')
  }

  /**
   *
   */
  close (level = 0): void {
    if (this.level >= level) {
      this.open = false
      this.classes.add('closed').delete('opened')
    }
    this.children.forEach(c => c.close(level))
  }

  /**
   *
   */
  activate(): void {
    this.opened()
    this.active = true
  }

  /**
   *
   */
  deactivate(): void {
    this.active = false
    this.children.forEach(c => c.deactivate())
  }

  /**
   *
   */
  toggle(): void {
    this.open = !this.open

    if (this.open) {
      this.classes.add('opened').delete('closed')
    }
    else {
      this.classes.add('closed').delete('opened')
    }
  }

  /**
   * JSON version of Selectable Group
   */
  toJSON (): NavBuilt {
    return Object.assign({}, {
      root: this.root,
      id: this.id,
      name: this.name,
      group: this.group,
      icon: this.icon,
      classes: Array.from(this.classes.values()),
      routerLink: this.routerLink,
      display: this.display,
      open: this.open,
      active: this.active,
      regexp: this.regexp instanceof RegExp,
      level: this.level,
      children: this.children.map(c => c.toJSON()),
      hasChildren: this.hasChildren,
      siblings: this.siblings,
      hasSiblings: this.hasSiblings,
      selected: this.selected ? this.selected.map(c => c.toJSON()) : []
    })
  }
}

@Injectable()
export class NavigationService {

  private navigation: SelectableGroup

  constructor(
    private _store: Store<any>
  ) { }

  public init (nav: NavItems, selected?: RouterEvent, breadcrumbs = [], level = 0) {
    this.navigation = new SelectableGroup({root: true, ...nav}, selected, breadcrumbs, level)
    this.dispatchUpdate()
  }

  public toggle(child) {
    child = this.navigation.findChild(child)
    child.toggle()
    this.dispatchUpdate()
  }

  public select (selected: RouterEvent, breadcrumbs = [], level = 0) {
    this.navigation.changeSelection(selected, breadcrumbs, level)
    this.dispatchUpdate()
  }

  private dispatchUpdate() {
    this._store.dispatch(new app.UpdateNavigationAction(this.navigation.toJSON()))
  }

}

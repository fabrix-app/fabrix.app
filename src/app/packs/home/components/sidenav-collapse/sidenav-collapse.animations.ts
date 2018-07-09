import {
  animate,
  animateChild,
  group,
  state,
  style,
  transition,
  trigger,
  query,
  AnimationTriggerMetadata,
} from '@angular/animations'

/** Time and timing curve for expansion panel animations. */
export const EXPANSION_PANEL_ANIMATION_TIMING = '225ms cubic-bezier(0.4,0.0,0.2,1)'

/** Animations used by the Material expansion panel. */
export const sidenavExpansionAnimations: {
  readonly indicatorRotate: AnimationTriggerMetadata
  readonly expansionHeaderHeight: AnimationTriggerMetadata
  readonly menuExpansion: AnimationTriggerMetadata
} = {
  /** Animation that rotates the indicator arrow. */
  indicatorRotate: trigger('indicatorRotate', [
    state('collapsed', style({transform: 'rotate(0deg)'})),
    state('expanded', style({transform: 'rotate(180deg)'})),
    transition('expanded <=> collapsed', animate(EXPANSION_PANEL_ANIMATION_TIMING)),
  ]),

  /** Animation that expands and collapses the panel header height. */
  expansionHeaderHeight: trigger('expansionHeight', [
    state('collapsed', style({
      height: '{{collapsedHeight}}',
    }), {
      params: {collapsedHeight: '48px'},
    }),
    state('expanded', style({
      height: '{{expandedHeight}}'
    }), {
      params: {expandedHeight: '64px'}
    }),
    transition('expanded <=> collapsed', group([
      query('@indicatorRotate', animateChild(), {optional: true}),
      animate(EXPANSION_PANEL_ANIMATION_TIMING),
    ])),
  ]),

  /** Animation that expands and collapses the panel content. */
  menuExpansion: trigger('menuExpansion', [
    state('closed, void', style({height: '0px', visibility: 'hidden'})),
    state('opened', style({height: '*', visibility: 'visible'})),
    transition('opened <=> closed', animate(EXPANSION_PANEL_ANIMATION_TIMING))
  ])
}

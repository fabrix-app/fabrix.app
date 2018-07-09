import { Pipe, PipeTransform } from '@angular/core'
import * as pluralize from 'pluralize'
import { User } from '../../../../core/models/User'

@Pipe({
  name: 'userName'
})
export class UserNamePipe implements PipeTransform {
  /**
   * Takes a user and returns a name string
   * @param value
   * @param args
   * @returns {any}
   */
  transform(value: User, args?: any): any {
    const plural = args && args === 'plural' ? 1 : 0
    const possessive = args && args === 'possessive' ? 1 : 0
    let str = 'Unknown User'

    if (value) {
      if (value.full_name) {
        str = value.full_name
      }
      else if (value.first_name) {
        str = value.first_name
      }
      else if (value.last_name) {
        str = value.last_name
      }
      else if (value.email) {
        str = value.email
      }
      else if (value.username) {
        str = value.username
      }
      else if (value.id) {
        str = `User-${value.id}`
      }
      else {
        str = 'Unknown User'
      }
    }

    if (plural) {
      return this.plural(str)
    }
    else if (possessive) {
      return this.possessive(str)
    }
    else {
      return str
    }
  }

  plural(noun) {
    return pluralize(noun)
  }

  possessive(properNoun) {
    if (properNoun == null) {
      return properNoun
    }
    if (properNoun.charAt(properNoun.length - 1) === 's' || properNoun.charAt(properNoun.length - 1) === 'S') {
      return `${properNoun}'`
    }
    else {
      return `${properNoun}'s`
    }
  }

}

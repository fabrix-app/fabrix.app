'use strict'

const assert = require('assert')

describe('CollectiveService', () => {
  it.skip('should exist', () => {
    assert(global.app.services.CollectiveService)
  })

  describe('#getAnnualBudget', () => {
    it.skip('should return cents in annual budget for fabrix', () => {
      return global.app.services.CollectiveService.getAnnualBudget('fabrix')
        .then(budget => {
          console.log(budget)
          assert(budget > 100000)
        })
    })
  })
})

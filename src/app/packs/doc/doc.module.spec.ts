import { DocModule } from './doc.module'

describe('DocModule', () => {
  let docModule: DocModule

  beforeEach(() => {
    docModule = new DocModule()
  })

  it('should create an instance', () => {
    expect(docModule).toBeTruthy()
  })
})

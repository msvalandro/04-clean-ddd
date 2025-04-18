import { Slug } from './slug'

describe('ValueObjects: Slug', () => {
  it('should be able to create a new slug from text', () => {
    const slug = Slug.createFromText('Example question title')

    expect(slug.value).toBe('example-question-title')
  })
})

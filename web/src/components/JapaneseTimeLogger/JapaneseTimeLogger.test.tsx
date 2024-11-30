import { render } from '@redwoodjs/testing/web'

import JapaneseTimeLogger from './JapaneseTimeLogger'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('JapaneseTimeLogger', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<JapaneseTimeLogger />)
    }).not.toThrow()
  })
})

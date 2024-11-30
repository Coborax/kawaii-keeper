import { render } from '@redwoodjs/testing/web'

import PomodoroTimer from './PomodoroTimer'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PomodoroTimer', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PomodoroTimer />)
    }).not.toThrow()
  })
})

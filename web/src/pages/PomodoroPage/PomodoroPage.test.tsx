import { render } from '@redwoodjs/testing/web'

import PomodoroPage from './PomodoroPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PomodoroPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PomodoroPage />)
    }).not.toThrow()
  })
})

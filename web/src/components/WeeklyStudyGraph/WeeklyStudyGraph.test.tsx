import { render } from '@redwoodjs/testing/web'

import WeeklyStudyGraph from './WeeklyStudyGraph'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('WeeklyStudyGraph', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WeeklyStudyGraph />)
    }).not.toThrow()
  })
})

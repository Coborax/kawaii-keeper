import { render } from '@redwoodjs/testing/web'

import AnimeBg from './AnimeBg'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AnimeBg', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AnimeBg />)
    }).not.toThrow()
  })
})

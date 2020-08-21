import React from 'react'
import UneeqAvatar from '../UneeqAvatar'
import { render } from '../../test-utils'
import { useUneeqState } from 'uneeq-react-core'
jest.mock('uneeq-react-core')

describe('UneeqAvatar', () => {
  it.skip('should return avatar', async () => {
    ;(useUneeqState as jest.Mock).mockReturnValue({
      hiddenUI: false
    })
    const result = render(<UneeqAvatar />)
    expect(result).toBeDefined()
  })
})

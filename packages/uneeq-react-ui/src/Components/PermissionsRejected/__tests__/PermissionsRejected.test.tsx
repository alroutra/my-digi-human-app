import React from 'react'
import { render } from '../../../test-utils'
import '@testing-library/jest-dom/extend-expect'
import PermissionsRejected from '../PermissionsRejected'
import { useUneeqState } from 'uneeq-react-core'
jest.mock('uneeq-react-core')
;(useUneeqState as jest.Mock).mockReturnValue({
  privacyOpen: true
})

describe('PermissionsRejected', () => {
  it('should render correctly', () => {
    const { container } = render(<PermissionsRejected restart={() => {}} />)

    expect(container).toHaveTextContent(
      "Looks like you've declined permissions"
    )
  })
})

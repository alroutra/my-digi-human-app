import React from 'react'
import { render } from '../../../test-utils'
import '@testing-library/jest-dom/extend-expect'
import PermissionsPrompt from '../PermissionsPrompt'

describe('PermissionsPrompt', () => {
  it('should render correctly', () => {
    const { container } = render(<PermissionsPrompt />)

    expect(container).toHaveTextContent('Loading')
  })
})

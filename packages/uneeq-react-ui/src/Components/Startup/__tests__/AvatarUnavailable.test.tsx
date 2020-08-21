import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import AvatarUnavailable from '../AvatarUnavailable'

describe('AvatarUnavailable', () => {
  it('should render', () => {
    const { findByLabelText } = render(<AvatarUnavailable />)

    expect(findByLabelText('Josie is busy')).toBeDefined()
  })
})

import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import AudioTest from '../AudioTest'

window.HTMLMediaElement.prototype.pause = () => {}

describe('AudioTest', () => {
  it('should render', () => {
    const { findByLabelText } = render(<AudioTest />)

    expect(findByLabelText('Playing')).toBeDefined()
  })
})

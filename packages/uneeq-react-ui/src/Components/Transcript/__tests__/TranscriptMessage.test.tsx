import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import TranscriptMessage from '../TranscriptMessage'

describe('TranscriptMessage', () => {
  it('should render', () => {
    const { findByLabelText } = render(
      <TranscriptMessage line={'This is a test message'} />
    )

    expect(findByLabelText('This is a test message')).toBeDefined()
  })
})

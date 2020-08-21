import React from 'react'
import { render } from '../../../../test-utils'
import '@testing-library/jest-dom/extend-expect'
import Feedback from '../Feedback'
import { useUneeqState } from 'uneeq-react-core'
jest.mock('uneeq-react-core')
;(useUneeqState as jest.Mock).mockReturnValue({
  feedbackOpen: true
})

describe('Feedback', () => {
  it('should render correctly', () => {
    const { container } = render(<Feedback restart={() => {}} />)

    expect(container).toHaveTextContent('How likely are you to recommend')
  })
})

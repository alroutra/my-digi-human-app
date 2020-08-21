import React from 'react'
import { render } from '../../../../test-utils'
import '@testing-library/jest-dom/extend-expect'
import EscalationForm from '../EscalationForm'
import { useUneeqState } from 'uneeq-react-core'
jest.mock('uneeq-react-core')
;(useUneeqState as jest.Mock).mockReturnValue({
  escalationFormOpen: true
})

describe('EscalationForm', () => {
  it('should render correctly', () => {
    const { container } = render(<EscalationForm restart={() => {}} />)

    expect(container).toHaveTextContent(
      'Would you like to go in the draw to win a staff prize?'
    )
  })
})

import React from 'react'
import { render } from '../../../test-utils'
import '@testing-library/jest-dom/extend-expect'
import InputProblem from '../InputProblem'

describe('InputProblem', () => {
  it('should render noInput error', () => {
    const { container } = render(<InputProblem error="noInput" />)

    expect(container).toHaveTextContent('Please check your')
  })

  it('should render spacebarTapped error', () => {
    const { container } = render(<InputProblem error="spacebarTapped" />)

    expect(container).toHaveTextContent(
      'Press & hold down the spacebar the entire time while you talk to me'
    )
  })
})

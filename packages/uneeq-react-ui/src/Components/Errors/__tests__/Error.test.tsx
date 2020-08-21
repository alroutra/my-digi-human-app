import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Error from '../Error'

describe('Error', () => {
  it('should render error', () => {
    const error = 'test error message'

    const { container } = render(<Error message={error} />)

    expect(container).toHaveTextContent(error)
  })
})

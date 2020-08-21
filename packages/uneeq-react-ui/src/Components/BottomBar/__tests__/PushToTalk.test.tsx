import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PushToTalk from '../PushToTalk'
import { useVolume } from 'uneeq-react-core'
import { useTheme } from 'emotion-theming'
import { themeMock } from '../../../test-utils'
jest.mock('uneeq-react-core')
jest.mock('emotion-theming')

describe('PushToTalk', () => {
  it('should render input', () => {
    ;(useVolume as jest.Mock).mockReturnValue({})
    ;(useTheme as jest.Mock).mockReturnValue(themeMock)
    const { container } = render(
      <PushToTalk recording={false} sending={false} />
    )

    expect(container).toHaveTextContent('Hold spacebar to talk')
  })
})

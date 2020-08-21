import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import PermissionsGateway from '../PermissionsGateway'
import { useUneeqState } from 'uneeq-react-core'
import {
  renderIgnoringUnstableFlushDiscreteUpdates,
  themeMock
} from '../../../test-utils'
import { render } from '@testing-library/react'
import { useTheme } from 'emotion-theming'
jest.mock('uneeq-react-core')
jest.mock('emotion-theming')

describe('PermissionsGateway', () => {
  it('should render PermissionsPrompt when permissions not given', () => {
    ;(useUneeqState as jest.Mock).mockReturnValue({
      ready: false,
      unavailable: false,
      permissionAllowed: null
    })
    ;(useTheme as jest.Mock).mockReturnValue(themeMock)
    const test = 'test'
    const { container } = render(
      <PermissionsGateway restart={() => {}}>{test}</PermissionsGateway>
    )

    expect(container).toHaveTextContent('Loading')
  })

  it('should render PermissionsRejected when permissions rejected', () => {
    ;(useUneeqState as jest.Mock).mockReturnValue({
      ready: false,
      unavailable: false,
      permissionAllowed: false
    })
    const test = 'test'
    const { container } = render(
      <PermissionsGateway restart={() => {}}>{test}</PermissionsGateway>
    )

    expect(container).toHaveTextContent(
      "Looks like you've declined permissions"
    )
  })

  it('should render AvatarUnavailable when avatar not available', () => {
    ;(useUneeqState as jest.Mock).mockReturnValue({
      ready: false,
      unavailable: true,
      permissionAllowed: true
    })
    const test = 'test'
    const { container } = render(
      <PermissionsGateway restart={() => {}}>{test}</PermissionsGateway>
    )

    expect(container).toHaveTextContent('Josie is busy')
  })

  it('should render children when ready', () => {
    ;(useUneeqState as jest.Mock).mockReturnValue({
      ready: true,
      unavailable: false,
      permissionAllowed: true
    })
    const test = 'test'
    const { container } = render(
      <PermissionsGateway restart={() => {}}>{test}</PermissionsGateway>
    )

    expect(container).toHaveTextContent(test)
  })

  it('should render loading', () => {
    ;(useUneeqState as jest.Mock).mockReturnValue({
      ready: false,
      unavailable: false,
      permissionAllowed: true
    })
    const test = 'test'
    const { getByTestId } = renderIgnoringUnstableFlushDiscreteUpdates(
      <PermissionsGateway restart={() => {}}>{test}</PermissionsGateway>
    )

    expect(getByTestId('videoContainer')).toBeInTheDocument()
  })
})

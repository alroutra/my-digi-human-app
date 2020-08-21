import React from 'react'
import { renderIgnoringUnstableFlushDiscreteUpdates } from '../test-utils'
import '@testing-library/jest-dom/extend-expect'
import DigitalHuman from '../DigitalHuman'

describe('DigitalHuman', () => {
  it.skip('should render correctly', () => {
    // @ts-ignore
    global.navigator.mediaDevices = { getUserMedia: () => Promise.resolve() }
    const { container } = renderIgnoringUnstableFlushDiscreteUpdates(
      <DigitalHuman
        restart={() => {}}
        config={{}}
        onTimedOut={() => {}}
        onSessionEnded={() => {}}
        postInit={() => {}}
      />
    )

    expect(container).not.toBeEmptyDOMElement()
  })
})

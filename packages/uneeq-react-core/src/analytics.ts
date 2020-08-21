import ReactGA from 'react-ga'

let eventCategory: string | undefined
export const initAnalytics = (config: Config) => {
  if (config.googleAnalyticsId) {
    ReactGA.initialize(config.googleAnalyticsId, {
      standardImplementation: false
    })
    eventCategory = config.googleAnalyticsEventCategory
  }
}

export const trackEvent = (label: string, action?: string) => {
  if (eventCategory) {
    ReactGA.event({
      category: eventCategory,
      action: action ? action : 'click',
      label
    })
  }
}

export const trackHandler = (
  handler: (event?: any) => void,
  label: string,
  action?: string
) => (event?: any) => {
  handler(event)
  trackEvent(label, action)
}

export const trackUneeqMessage = (message: AnyUneeqMessage) => {
  switch (message.uneeqMessageType) {
    case 'AvatarQuestionText':
      if (message.question) {
        trackEvent('asked-question', 'user-query')
      } else {
        trackEvent('asked-empty-question', 'user-query')
      }
      break
    case 'ServiceUnavailable':
      trackEvent('service-unavailable', 'state-change')
      break
    case 'AvatarUnavailable':
      trackEvent('avatar-unavailable', 'state-change')
      break
    case 'SessionLive':
      trackEvent('session-live', 'state-change')
      break
    default:
      break
  }
}

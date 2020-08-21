// @ts-ignore
import * as analytics from '../analytics'
import {
  initAnalytics,
  trackEvent,
  trackHandler,
  trackUneeqMessage
} from '../analytics'
import { event } from 'react-ga'
jest.mock('react-ga', () => ({
  event: jest.fn(),
  initialize: jest.fn()
}))

describe('analytics', () => {
  describe('trackEvent', () => {
    it('should create Google Analytics event', () => {
      const eventLabel = 'testEvent'
      const eventAction = 'testAction'
      initAnalytics({
        googleAnalyticsId: 'testId',
        googleAnalyticsEventCategory: 'testCategory'
      } as Config)
      trackEvent(eventLabel, eventAction)
      expect(event).toHaveBeenCalled()
    })
  })

  describe('trackHandler', () => {
    // TODO FIX
    it.skip('should call handler and trackEvent', () => {
      jest.spyOn(analytics, 'trackEvent')
      const eventLabel = 'testEvent'
      const eventAction = 'testAction'
      const handler = jest.fn()
      const returnedHandler = trackHandler(handler, eventLabel, eventAction)
      returnedHandler({})
      expect(analytics.trackEvent).toHaveBeenCalledWith(eventLabel, eventAction)
    })
  })

  describe('trackUneeqMessage', () => {
    // TODO FIX
    it.skip('should track AvatarQuestionText messages with question', () => {
      jest.spyOn(analytics, 'trackEvent')
      const message = {
        uneeqMessageType: 'AvatarQuestionText',
        question: 'test'
      }

      trackUneeqMessage(message)

      expect(analytics.trackEvent).toHaveBeenCalledWith(
        'asked-question',
        'user-query'
      )
    })
    it.skip('should track AvatarQuestionText messages without question', () => {
      jest.spyOn(analytics, 'trackEvent')
      const message = {
        uneeqMessageType: 'AvatarQuestionText'
      }

      trackUneeqMessage(message)

      expect(analytics.trackEvent).toHaveBeenCalledWith(
        'asked-empty-question',
        'user-query'
      )
    })

    it.skip('should track ServiceUnavailable messages', () => {
      jest.spyOn(analytics, 'trackEvent')
      const message = {
        uneeqMessageType: 'ServiceUnavailable'
      }

      trackUneeqMessage(message)

      expect(analytics.trackEvent).toHaveBeenCalledWith(
        'service-unavailable',
        'state-change'
      )
    })

    it.skip('should track AvatarUnavailable messages', () => {
      jest.spyOn(analytics, 'trackEvent')
      const message = {
        uneeqMessageType: 'AvatarUnavailable'
      }

      trackUneeqMessage(message)

      expect(analytics.trackEvent).toHaveBeenCalledWith(
        'avatar-unavailable',
        'state-change'
      )
    })

    it.skip('should track SessionLive messages', () => {
      jest.spyOn(analytics, 'trackEvent')
      const message = {
        uneeqMessageType: 'SessionLive'
      }

      trackUneeqMessage(message)

      expect(analytics.trackEvent).toHaveBeenCalledWith(
        'session-live',
        'state-change'
      )
    })

    it.skip('should track other messages', () => {
      jest.spyOn(analytics, 'trackEvent')
      const message = {
        uneeqMessageType: 'RandomMessage'
      }

      trackUneeqMessage(message)

      expect(analytics.trackEvent).not.toHaveBeenCalled()
    })
  })
})

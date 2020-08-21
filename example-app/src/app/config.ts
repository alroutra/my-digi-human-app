import downloadPdf from './downloadPdf'

let environment = {}
// You can override default settings for different environments
// by setting REACT_APP_CONFIG environment variable
if (process.env.REACT_APP_CONFIG === 'EXMAPLE') {
  console.info('config: example')
  environment = {
    conversationId: 'OTHER'
  }
} else {
  console.info('config: default')
}

const config = {
  debug: true,

  playWelcome: !process.env.REACT_APP_NO_WELCOME,
  url: 'https://api.us.uneeq.io',
  conversationId: '', // FIXME
  tokenUrl: '/api/token',  // FIXME

  sendLocalVideo: false,
  customData: {},

  // When holding down spacebar, durations shorter that this will trigger
  // a message like "Keep holding spacebar while you talk"
  tapThreshold: 700, // ms

  // How long can the user be inactive before timeout
  timeout: 480 * 1000, // ms
  // How close to the end of the timeout should we show the warning
  timeoutWarning: 180 * 1000, // ms
  // e.g. timeout=90sec, timeoutWarning=30sec - after 60 secs of inactivity warning will show, after 90 secs sessions ends

  avatarAspect: 16 / 9, // video aspect ratio
  avatarPosition: 0.5, // Where is the avatar in the video frame

  informationInTranscript: false,

  // show we show the contact form after Feedback?
  showEscalationForm: false,

  // How many empty transcripts before an error is shown
  emptyTranscriptThreshold: 3,
  avatarName: 'Sophie',

  // Recaptcha
  recaptchaSiteKey: '', // FIXME

  downloadPdf,

  // Google analytics
  googleAnalyticsId: '', // FIXME
  googleAnalyticsEventCategory: '', // FIXME
  ...environment
}

export default config

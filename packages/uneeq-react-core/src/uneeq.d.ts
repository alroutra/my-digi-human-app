interface AnyUneeqMessage extends UneeqMessage {
  [propName: string]: any
}

interface Config {
  debug: boolean
  url: string
  conversationId: string
  tokenUrl: string
  orchestrationToken?: string
  playWelcome: boolean
  sendLocalVideo: boolean
  customData: any
  informationInTranscript: boolean
  tapThreshold: number
  timeout: number
  timeoutWarning: number
  emptyTranscriptThreshold: number
  recaptchaSiteKey?: string
  googleAnalyticsId?: string
  googleAnalyticsEventCategory?: string
  errorLevels: {
    ignore: string | number[]
    warning: string | number[]
    error: string | number[]
    fatal: string | number[]
  }
}

// state.permissionAllowed
//   undefined -- unknown status. Maybe aproved already, declined, pending
//   null -- We know permission is neither aproved nor declined yet
//   true
//   false
type UneeqPermissionState = undefined | null | boolean

type UneeqSuggestedResponse = {
  utterance: string
  label: string
}
type UneeqSuggestedResponses = {
  id: number
  mainTitle: string
  suggestedResponses: array<UneeqSuggestedResponse>
  chosenResponse?: string
}
type UneeqInformation =
  | string
  | Array<{
      type: 'heading' | 'text' | 'html' | 'link' | 'list' | 'image' | 'markdown'
      text?: string
      html?: string
      label?: string
      markdown?: string
      href?: string
      source?: string
      width?: string
      items?: Array<{
        type: 'text' | 'link'
        text?: string
        label?: string
        href?: string
      }>
    }>

interface UneeqState {
  // transcript: TranscriptItem[]
  permissionAllowed: UneeqPermissionState

  sessionEnded: boolean
  timedOut: boolean
  ready: boolean
  menuOpen: boolean
  settingsOpen: boolean
  feedbackOpen: boolean
  escalationFormOpen: boolean
  escalationFormFromServer: boolean
  timeoutOpen: boolean
  privacyOpen: boolean
  transcriptOpen: boolean
  avatarSpeaking: boolean
  savedOpen: boolean
  emptyTranscriptCount: number
  recordStart: number
  noInput: boolean

  error: null | any
  onScreenInfo: {
    nextSuggestedResponses?: UneeqSuggestedResponses
    suggestedResponses?: UneeqSuggestedResponses
    information?: UneeqInformation
  }

  selectedDevices: {
    [property: string]: string
  }

  question: null | string
  inputMode: string
  lastActivity: number
  timeLeft: number
  transcript: any[]
  transcriptHasOpened: boolean
  feedbackGiven: boolean
  contactDetailsGiven: boolean
  savedItems: any[]
  loadingPercentage: number

  // expandedInfo: {
  //   type: 'information' | 'savedItem'
  //   index?: number
  // } | null

  expandedInfo: any
  [property: string]: any
}

// type UneeqContext = {
//   state: UneeqState
//   dispatch: Dispatch<any>
//   setAvatarVideo: any
//   setLocalVideo: any
//   localVideo: any
//   speakTranscript: () => void
//   sendText: () => void
//   sendData: () => void
//   setDevice: () => void
//   endSession: () => void
//   resetTimeout: () => void
//   volume: { watch: (watcher: Dispatch<SetStateAction<number>>) => void; set: () => void }
//   startRecording: () => void
//   stopRecording: () => void
//   config: UneeqConfig
//   allDialogsClosed: boolean
//   hideModal: () => void
//   testMessage: (message: any) => void
// }

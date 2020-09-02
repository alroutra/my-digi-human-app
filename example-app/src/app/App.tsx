import ReactGA from 'react-ga'
import { DigitalHuman } from 'uneeq-react-ui'
import React, { useState, useEffect, useRef } from 'react'
import { Box, Button } from 'rebass'

import { ThemeProvider } from 'emotion-theming'

import theme from '../theme'
import config from '../config'
import Home from './Home'
import assets from './assets'

import { testState } from 'uneeq-react-core'
import SessionTimedOut from './SessionTimedOut'

const backgroundStyle = {
  label: 'wrapper',
  width: '100%',
  minHeight: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'right bottom',
  backgroundColor: '#000000',
  backgroundImage: [
    'none',
    'none',
    'none',
    'none',
    `url('https://d1qt3q0di8y5ko.cloudfront.net/squiggle_lr.jpg')`,
    `url('https://d1qt3q0di8y5ko.cloudfront.net/squiggle_lr.jpg')`
  ],
  overflow: 'hidden',
  position: 'absolute'
}

const loadingTips = [
  {
    title: 'Loading Tip 1',
    // videoWebm: clickableQuestions,
    // videoMP4: clickableQuestionsMP4,
    // img: clickableQuestionsImg,
    showOnDesktop: true,
    showOnMobile: true
  },
  {
    title: 'Loading Tip 2',
    // videoWebm: holdSpacebar,
    // videoMP4: holdSpacebarMP4,
    // img: holdSpacebarImg,
    showOnDesktop: true,
    showOnMobile: true
  },
  {
    title: 'Loading Tip 3',
    // videoWebm: holdSpacebar,
    // videoMP4: holdSpacebarMP4,
    // img: holdSpacebarImg,
    showOnDesktop: true,
    showOnMobile: true
  }
]

// example CustomFeedback component that can be passed to DigitalHuman
// to customise the look and feel of this screen
const CustomFeedback = ({ restart, close }: any) => {
  return (
    <Box
      sx={{
        background: 'white',
        width: '50vh',
        height: '50vh',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 20
      }}
    >
      CustomFeedback
      <Button onClick={close}>Close</Button>
      <Button onClick={restart}>Restart</Button>
    </Box>
  )
}

const App = () => {
  // For faster testing, skip straight to digitalHuman
  const [step, goTo] = useState(testState ? 'digitalHuman' : 'welcome')
  const [surveyData, setSurveyData] = useState({
    spokenBefore: false,
    techSavvy: false,
    thoughtsOnAI: ''
  })

  const postInit = (uneeq: any) => {
    uneeq.sendTranscript(JSON.stringify(surveyData))
  }

  const tokenRef = useRef<string>()

  const start = (token: string) => {
    tokenRef.current = token
    goTo('digitalHuman')
  }

  const restart = () => goTo('welcome')
  useEffect(() => ReactGA.pageview(step), [step])

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          ...backgroundStyle,
          overflow: step === 'welcome' ? 'visible' : 'hidden'
        }}
      >
        {step === 'digitalHuman' ? (
          <DigitalHuman
            assets={assets}
            config={config}
            token={tokenRef.current}
            loadingTips={loadingTips}
            onTimedOut={() => goTo('timed-out')}
            postInit={postInit}
            restart={restart}
            // CustomFeedback={CustomFeedback} // uncomment to enable custom Feedback screen
            onSessionEnded={() => goTo('restart')}
          />
        ) : step === 'timed-out' ? (
          <SessionTimedOut restart={restart} />
        ) : (
          <Home
            startSession={() => goTo('digitalHuman')}
            saveFormData={setSurveyData}
          />
        )}
      </Box>
    </ThemeProvider>
  )
}

export default App

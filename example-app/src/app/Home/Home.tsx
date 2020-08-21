import { useWindowWidth } from '@react-hook/window-size'
import React, { useState } from 'react'
import { Box, Button, Flex, Text } from 'rebass'
import { trackHandler, useSupportedBrowser } from 'uneeq-react-core'
import { PasscodeOverlay, UnsupportedBrowser } from 'uneeq-react-ui'
import landingPageVideoFrame from '../assets/img/landingPageVideo.jpg'
import landingPageVideoPortraitFrame from '../assets/img/landingPageVideoPortrait.jpg'
import introVideoMP4 from '../assets/video/intro.mp4'
import landingPageVideoMP4 from '../assets/video/LandingPageVideo.mp4'
import landingPageVideo from '../assets/video/LandingPageVideo.webm'
import landingPageVideoPortraitMP4 from '../assets/video/LandingPageVideoPortrait.mp4'
import landingPageVideoPortrait from '../assets/video/LandingPageVideoPortrait.webm'
import config from '../config'
import styles from './styles'

const Paragraphs = () => (
  <>
    <Text as="p">
      We take your privacy seriously, we only use audio data so that a digital
      human can understand what you are saying to it. We then share audio data
      with third party service partners who helps us with transcription. Neither
      they or we store any audio data once we have completed the transcription.
      For more information read our{' '}
      <Text
        as="a"
        href="/privacy_policy.html"
        target="_blank"
        rel="noreferrer noopener"
        sx={styles.privacyPolicyLink}
      >
        privacy policy
      </Text>
      .
    </Text>
  </>
)

const SophieVideo = () => {
  const width = useWindowWidth()
  const smallScreen = width < 1024

  return (
    <video
      playsInline
      autoPlay
      muted
      loop
      poster={
        smallScreen ? landingPageVideoPortraitFrame : landingPageVideoFrame
      }
    >
      <source
        src={smallScreen ? landingPageVideoPortrait : landingPageVideo}
        type="video/webm"
      />
      <source
        src={smallScreen ? landingPageVideoPortraitMP4 : landingPageVideoMP4}
        type="video/mp4"
      />
    </video>
  )
}

interface HomeProps {
  startSession: (token: string) => void
  saveFormData: (surveyData: any) => void
}

const Home: React.FC<HomeProps> = ({ startSession }) => {
  const { isBrowserSupported } = useSupportedBrowser()
  const [showPasscode, setShowPasscode] = useState(false)

  const startSessionAndSaveData = (token: string) => {
    console.log(token)
    startSession(token)
  }

  if (showPasscode && !isBrowserSupported) {
    return <UnsupportedBrowser close={() => setShowPasscode(false)} />
  }

  const StartButton = ({ sx }: any) => (
    <Button
      variant="outline"
      onClick={() => {
        trackHandler(setShowPasscode, 'lets-chat-btn')(true)
      }}
      sx={{ ...styles.letsChatButton, ...sx }}
    >
      {`Let's chat`}
    </Button>
  )

  return (
    <Flex sx={styles.mainContainer}>
      <Text sx={styles.mobileImSophie}>
        Meet {config?.avatarName}, our new digital assistant
      </Text>
      <SophieVideo />

      <Box sx={styles.textContainer}>
        <Box sx={styles.titleContainer}>
          <Text sx={styles.imSophieText}>Meet {config?.avatarName}</Text>
        </Box>
        <Box sx={styles.videoContainer}>
          <video
            autoPlay={false}
            loop={true}
            playsInline={true}
            controls={true}
            style={{ width: '335px', objectFit: 'cover' }}
          >
            <source src={introVideoMP4} type="video/mp4" />
            Loading...
          </video>
        </Box>
        <Text sx={styles.subtitle}>
          I’m a digital assistant that can help you understand the capabilities
          of 5G.
        </Text>
        <StartButton sx={styles.startButton} />

        <Flex
          sx={{
            ...styles.paragraphContainer
          }}
        >
          <Paragraphs />
        </Flex>

        {showPasscode && (
          <PasscodeOverlay
            start={trackHandler(startSessionAndSaveData, 'lets-chat-btn')}
            close={() => setShowPasscode(!showPasscode)}
            config={config}
          />
        )}
        <StartButton
          sx={{ display: ['none', 'none', 'none', 'none', 'block', 'block'] }}
        />
      </Box>
    </Flex>
  )
}

export default Home

import React from 'react'
import styles from './styles'
import { Text, Button } from 'rebass'
import { ReactComponent as MicIcon } from '../../assets/img/mic-icon.svg'
import { useVolume } from 'uneeq-react-core'

import { keyframes } from '@emotion/core'
import { useIsSmallScreen } from 'uneeq-react-core'
import { useTranslation } from 'react-i18next'

const fourTwo = (a: any, b: any) => [a, a, a, a, b, b]
const pulseElipsisColour = 'rgba(252, 189, 28, 0.2)'

const bganimationOneSide = keyframes`
    0% {
        background-size: 300% 100%;
    }
    100% {
        background-size: 30% 100%;
    }
`
const pulse = keyframes`
  0% {
    box-shadow: 0px 0px 0px 1px  ${pulseElipsisColour};
  }
  25% {
    box-shadow: 0px 0px 0px 6px  ${pulseElipsisColour};
  }
  50% {
    box-shadow: 0px 0px 0px 11px  ${pulseElipsisColour};
  }
  75% {
    box-shadow: 0px 0px 0px 6px  ${pulseElipsisColour};
  }  
  100% {
    box-shadow: 0px 0px 0px 1px ${pulseElipsisColour};
  }
`

export interface SendingRecording {
  sending: boolean
  recording: boolean
}
const PushToTalk: React.FC<SendingRecording> = ({ recording, sending }) => {
  const isSmallScreen = useIsSmallScreen()
  const { t } = useTranslation()

  const volume = useVolume(recording)
  const backgroundSize = recording ? `${volume * 2}% 100%` : undefined
  const largeScreenBgCol = recording
    ? 'white'
    : sending
    ? 'rgba(252,189,28,1)'
    : 'primaryLight'
  const largeScreenBgImg = recording
    ? 'radial-gradient(circle, rgba(252, 189, 28, 1) 0%, white 100%)'
    : sending
    ? 'radial-gradient(circle, white 0%,rgba(252,189,28,1) 100%)'
    : 'primary'
  return (
    <Button
      variant="primary"
      sx={{
        ...styles.pushToTalkButton,
        backgroundColor: fourTwo('primary', largeScreenBgCol),
        '&:hover': {
          backgroundColor: fourTwo('primaryLight', largeScreenBgCol)
        },
        backgroundImage: fourTwo('initial', largeScreenBgImg),
        backgroundRepeat: 'no-repeat',
        backgroundPosition: sending ? '150% 100%' : '50% 100%',
        backgroundSize: fourTwo('initial', backgroundSize),
        animation: recording
          ? fourTwo(`${pulse} 1.2s infinite`, `none`)
          : sending
          ? `${bganimationOneSide} 2s ease-in-out forwards infinite`
          : 'none',
        transition: recording ? '0.2s' : 'all 1s',
        boxShadow: recording
          ? fourTwo(`0px 0px 0px 11px ${pulseElipsisColour}`, 'none')
          : 'none',
        '&:focus': {
          boxShadow: recording
            ? fourTwo(`0px 0px 0px 11px ${pulseElipsisColour}`, 'none')
            : 'none'
        },
        width: [47, 47, 70, 70, 310, 310],
        height: [47, 47, 70, 70, 'auto', 'auto']
      }}
    >
      {sending && isSmallScreen ? (
        <svg
          width="25"
          height="25"
          viewBox="0 0 125 125"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="62.5"
            cy="62.5"
            fill="none"
            r="57.5"
            id="sending_circle"
            stroke="#000000"
          />
        </svg>
      ) : (
        <MicIcon />
      )}

      <Text sx={styles.pushToTalkText} as="span">
        {sending ? (
          <span>{t('BottomBar.PushToTalk.sending')}</span>
        ) : recording ? (
          <span>{t('BottomBar.PushToTalk.recording')}</span>
        ) : (
          <span>{t('BottomBar.PushToTalk.waiting')}</span>
        )}
      </Text>
    </Button>
  )
}

export default PushToTalk

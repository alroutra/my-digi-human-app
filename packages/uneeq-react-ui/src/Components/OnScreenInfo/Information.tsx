import React, { useContext, useEffect, useState } from 'react'
import { UneeqContext } from 'uneeq-react-core'
import { Box, Button, Flex, Image, Text } from 'rebass'
import InformationContent from './InformationContent'
import { ReactComponent as ExpandIcon } from '../../assets/img/expand.svg'
import { ReactComponent as HeartIcon } from '../../assets/img/heart.svg'
import { ReactComponent as HeartFullIcon } from '../../assets/img/heart-full.svg'
import { styles as s } from './styles'
import { ReactComponent as CloseIcon } from '../../assets/img/close.svg'
import { useTranslation } from 'react-i18next'

const styles = s.information

export interface HeadingInformation {
  type: 'heading'
  text: string
}
interface TextInformation {
  type: 'text'
  text: string
}
interface HTMLInformation {
  type: 'html'
  html: string
}
interface MarkdownInformation {
  type: 'markdown'
  markdown: string
}
interface ImageInformation {
  type: 'image'
  source: string
  label: string
  width: string
}
export interface LinkInformation {
  type: 'link'
  href: string
  label: string
}

export type InformationItemWithoutList =
  | HeadingInformation
  | TextInformation
  | HTMLInformation
  | ImageInformation
  | LinkInformation
  | MarkdownInformation

interface ListInformation {
  type: 'list'
  items: InformationItemWithoutList[]
}

export type InformationItem =
  | ListInformation
  | HeadingInformation
  | TextInformation
  | HTMLInformation
  | ImageInformation
  | LinkInformation
  | MarkdownInformation

interface InformationProps {
  information: InformationItem[]
}

const Information: React.FC<InformationProps> = ({ information }) => {
  const { dispatch } = useContext(UneeqContext)
  const expand = () => dispatch({ type: 'expandInformation' })
  const { t } = useTranslation()

  const [saved, setSaved] = useState(false)

  const save = () => {
    dispatch({
      type: 'saveInformation'
    })
    setSaved(true)
  }

  const hide = () => {
    dispatch({ type: 'openMobileInformation', payload: false })
  }

  useEffect(() => {
    setSaved(false)
  }, [information])

  return (
    <>
      <Flex sx={styles.closeButtonContainer}>
        <Button sx={styles.closeButton} variant="unstyled" onClick={hide}>
          <Image as={CloseIcon} alt="" />
        </Button>
      </Flex>
      <Flex sx={styles.topFade} />
      <Box sx={styles.content}>
        <InformationContent information={information} />
      </Box>
      <Flex sx={styles.bottomFade} />
      <Flex sx={styles.buttonsContainer}>
        <Button sx={styles.expandButton} variant="unstyled" onClick={expand}>
          <ExpandIcon />
          <Text sx={styles.buttonText}>
            {t('OnScreenInfo.Information.expand')}
          </Text>
        </Button>
        {saved ? (
          <Button sx={styles.saveButton} variant="unstyled" onClick={() => {}}>
            <HeartFullIcon />
            <Text sx={styles.buttonText}>
              {t('OnScreenInfo.Information.saved')}
            </Text>
          </Button>
        ) : (
          <Button sx={styles.saveButton} variant="unstyled" onClick={save}>
            <HeartIcon />
            <Text sx={styles.buttonText}>
              {t('OnScreenInfo.Information.save')}
            </Text>
          </Button>
        )}
      </Flex>
    </>
  )
}

export default Information

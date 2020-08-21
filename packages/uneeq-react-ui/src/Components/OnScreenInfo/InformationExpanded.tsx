import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Card, Box, Button, Flex, Image, Text } from 'rebass'
import { styles as s } from './styles'
import { ReactComponent as MinimizeIcon } from '../../assets/img/minimize.svg'
import { ReactComponent as CloseIcon } from '../../assets/img/close.svg'
import { UneeqContext, useUneeqState } from 'uneeq-react-core'
import InformationContent from './InformationContent'
import { ReactComponent as TrashIcon } from '../../assets/img/trash.svg'
import { ReactComponent as DownloadIcon } from '../../assets/img/download.svg'
import { ReactComponent as ChevronLeft } from '../../assets/img/chev-left.svg'
import { ReactComponent as ChevronRight } from '../../assets/img/chev-right.svg'
import { ReactComponent as HeartFullIcon } from '../../assets/img/heart-full.svg'
import { ReactComponent as HeartIcon } from '../../assets/img/heart.svg'
import { useTranslation } from 'react-i18next'
const styles = s.informationExpanded

const InformationExpanded = () => {
  const {
    onScreenInfo,
    expandedInfo,
    selectedSavedItem,
    savedItems
  } = useUneeqState()
  const { t } = useTranslation()

  const { dispatch, config } = useContext(UneeqContext)
  const { downloadPdf } = config

  const setSavedItem = useCallback(
    (index: number) => dispatch({ type: 'showSavedItem', payload: index }),
    [dispatch]
  )
  const remove = () =>
    dispatch({ type: 'removeSavedItem', payload: selectedSavedItem })
  const previous = () =>
    selectedSavedItem > 0 && setSavedItem(selectedSavedItem - 1)
  const next = () =>
    selectedSavedItem < savedItems.length - 1 &&
    setSavedItem(selectedSavedItem + 1)
  const expandedInformation = expandedInfo?.type === 'information'
  const expandedSavedItem = expandedInfo?.type === 'savedItem'
  const information: any = expandedInformation
    ? onScreenInfo?.information
    : expandedSavedItem
    ? savedItems[selectedSavedItem]
    : null
  const hide = useCallback(() => dispatch({ type: 'collapseExpandedInfo' }), [
    dispatch
  ])

  useEffect(() => {
    if (!savedItems.length) {
      hide()
    } else if (selectedSavedItem > savedItems.length - 1) {
      setSavedItem(selectedSavedItem - 1)
    }
  }, [setSavedItem, selectedSavedItem, dispatch, savedItems.length, hide])

  const [saved, setSaved] = useState(false)

  const save = () => {
    dispatch({
      type: 'saveInformation'
    })
    setSaved(true)
  }

  if (expandedInfo === null) return null

  return (
    <Flex sx={styles.container}>
      <Card sx={styles.contentAndButton}>
        <Flex sx={styles.closeButtonContainer}>
          <Button sx={styles.closeButton} variant="unstyled" onClick={hide}>
            <Image as={CloseIcon} alt="" />
          </Button>
        </Flex>
        <Box sx={styles.scrollContainer}>
          <InformationContent information={information} />
        </Box>
        <Flex sx={styles.buttonsContainer}>
          {expandedSavedItem && (
            <Button sx={styles.trashButton} variant="unstyled" onClick={remove}>
              <TrashIcon />
              {t('OnScreenInfo.InformationExpanded.remove')}
            </Button>
          )}
          {expandedSavedItem && (
            <Button
              variant="unstyled"
              sx={styles.downloadButton}
              onClick={() => downloadPdf('savedItems', savedItems)}
            >
              <DownloadIcon />
              {t('OnScreenInfo.InformationExpanded.downloadAll')}
            </Button>
          )}
          {expandedInformation && (
            <Button
              sx={styles.minimizeButton}
              variant="unstyled"
              onClick={hide}
            >
              <MinimizeIcon />
              {t('OnScreenInfo.InformationExpanded.minimise')}
            </Button>
          )}
          {!expandedSavedItem &&
            (saved ? (
              <Button
                sx={styles.saveButton}
                variant="unstyled"
                onClick={() => {}}
              >
                {/*// TODO onClick*/}
                <HeartFullIcon />
                {t('OnScreenInfo.InformationExpanded.saved')}
              </Button>
            ) : (
              <Button sx={styles.saveButton} variant="unstyled" onClick={save}>
                <HeartIcon />
                {t('OnScreenInfo.InformationExpanded.save')}
              </Button>
            ))}
        </Flex>
        {expandedSavedItem && savedItems.length > 1 && (
          <Flex sx={styles.paginationContainer}>
            <Button
              variant="unstyled"
              onClick={previous}
              disabled={selectedSavedItem === 0}
            >
              <Image as={ChevronLeft} alt="Previous" />
            </Button>
            <Text>{`${selectedSavedItem + 1} of ${savedItems.length}`}</Text>
            <Button
              variant="unstyled"
              onClick={next}
              disabled={selectedSavedItem === savedItems.length - 1}
            >
              <Image as={ChevronRight} alt="Next" />
            </Button>
          </Flex>
        )}
      </Card>
    </Flex>
  )
}

export default InformationExpanded

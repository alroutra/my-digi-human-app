import React, { useEffect } from 'react'
import { useSupportedBrowser } from '../hooks'

/**
 * Try to get users approval for video/audio early. Doing
 * this ourselves means we know when it happens and we
 * can accurately show the "You need to allow..." message
 */
const usePreApprove = (dispatch: React.Dispatch<any>) => {
  const { isGteIOS13, isMobileSafari, isSafari } = useSupportedBrowser()
  const videoEnabled = isMobileSafari && isGteIOS13
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({
        audio: true,
        video: videoEnabled
      })
      .then(() => dispatch({ type: 'approved' }))
      .catch(() => dispatch({ type: 'declined' }))

    // After calling getUserMedia to request permission we wait a while
    // to see if we get a 'quick' response (already allowed of denied)
    // then we can dispatch the 'approving' action.
    setTimeout(() => dispatch({ type: 'approving' }), 1200)
  }, [dispatch, isGteIOS13, isMobileSafari, isSafari, videoEnabled])
}

export default usePreApprove

import logo1 from './assets/img/logo.png'
import uneeqLogo from './assets/img/UneeQ-logo.png'

const logos = {
  logo1: logo1,
  logo2: uneeqLogo
}

export const downloadPdf = async (
  type: 'transcript' | 'savedItems',
  items: any
) => {
  import('uneeq-download-pdf').then(
    ({ downloadSavedItemsPdf, downloadTranscriptPdf }) => {
      if (type === 'transcript') {
        downloadTranscriptPdf({
          filename: 'josie-transcript',
          content: items,
          ...logos
        })
      } else {
        downloadSavedItemsPdf({
          filename: 'josie-information',
          content: items,
          ...logos
        })
      }
    }
  )
}

export default downloadPdf

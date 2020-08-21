import LandingImage from '../assets/img/LandingPage.png'

export const styles = {
  mainContainer: {
    label: 'homeMainContainer',
    minWidth: '100%',
    height: '100%',
    position: 'absolute',
    alignItems: 'center',
    flexDirection: ['column', 'column', 'column', 'column', 'row', 'row'],
    justifyContent: [
      'flex-start',
      'flex-start',
      'flex-start',
      'flex-start',
      'normal',
      'normal'
    ],
    width: '100%',
    '& > video': {
      objectFit: 'cover',
      width: '100vw',
      height: '100%',
      maxHeight: ['70vh', '70vh', '100vh', '100vh', '100vh'],
      position: [
        'absolute',
        'absolute',
        'absolute',
        'absolute',
        'fixed',
        'fixed'
      ],
      mt: [14, 14, 14, 14, 0, 0],
      top: 0,
      left: 0,
      zIndex: 4
    }
  },
  videoContainer: {
    my: 2,
    width: '28%',
    display: ['none', 'none', 'none', 'none', 'block', 'block']
  },
  textContainer: {
    label: 'text-container',
    ml: ['auto', 'auto', 'auto', 'auto', '15%', '15%'],
    mr: 'auto',
    mb: [4, 0],
    px: [10, 10, 10, 10, 0, 0],
    mt: ['70vh', '70vh', '84vh', '84vh', 0, 0],
    maxWidth: ['100%', '100%', '100%', '100%', 352, 352],
    // minHeight: '100vh',
    color: 'textAlternate',
    textAlign: 'left',
    zIndex: 4,
    width: '100%'
  },
  mobileImSophie: {
    display: ['flex', 'flex', 'flex', 'flex', 'none', 'none'],
    fontSize: [2, 2, 6, 6, 78, 78],
    lineHeight: '50px',
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  imSophieText: {
    display: ['none', 'none', 'none', 'none', 'flex', 'flex'],
    fontSize: 38,
    fontWeight: 'bold'
  },
  subtitle: {
    fontWeight: '300',
    fontSize: 4,
    mt: 2,
    mb: [3, 4],
    lineHeight: '30px',
    display: ['none', 'none', 'none', 'none', 'block', 'block']
  },
  sophieBGImage: {
    label: 'sophieBGImage',
    position: 'fixed',
    backgroundImage: `url('${LandingImage}')`,
    backgroundSize: ['100%', '100%', '70%'],
    backgroundRepeat: 'no-repeat',
    backgroundPosition: ['top', 'top', '100% bottom'],
    top: ['3em', '3em', 'unset'],
    right: ['3em', '3em', 'unset'], // this is bc the empty space the img has, we should ask them for a better png
    height: '100%',
    width: '100%',
    zIndex: 1
  },
  letsChatButton: {
    lineHeight: '24px',
    fontWeight: '600',
    minWidth: '10rem',
    py: [3, 2],
    px: [6, 5],
    mt: 3
  },
  privacyTextToggle: {
    fontWeight: '300',
    cursor: 'pointer',
    fontSize: 0,
    lineHeight: '22px',
    textDecoration: 'none'
  },
  disclaimer: {
    mt: 9,
    mb: 14,
    fontWeight: '300',
    fontSize: 0,
    lineHeight: '22px',
    '& a, & a:active': {
      color: 'primary',
      textDecoration: 'none'
    },
    '& a:hover': {
      textDecoration: 'underline'
    }
  },
  startButton: {
    display: ['block', 'block', 'block', 'block', 'none', 'none'],
    mt: [-50, -50, -70, -70, 1, 1],
    mb: [50, 50, 50, 50, 1, 1],
    mx: ['auto', 'auto', 'auto', 'auto', 0, 0]
  },
  surveyToggle: {
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: 2,
    lineHeight: '24px',
    textDecoration: 'none',
    mb: 2,
    mt: [10, 10, 10, 10, 0, 0],
    pt: [10, 10, 10, 10, 0, 0]
  },
  togglePrivacyIcon: {
    display: 'inline-block',
    color: 'primary'
  },
  surveyContainer: {
    transition: 'max-height .5s linear',
    '& label': {
      fontWeight: '300',
      fontSize: 2,
      alignItems: 'flex-start',
      lineHeight: '24px'
    },
    '& textarea': {
      borderRadius: 'button',
      borderColor: 'border',
      backgroundColor: 'white'
    }
  },
  checkbox: {
    width: '20px',
    height: '20px',
    borderRadius: 'button',
    'input:checked ~ &': {
      color: 'text',
      backgroundColor: 'white'
    }
  },
  textarea: {
    color: 'text',
    fontFamily: 'sans-serif',
    fontSize: 1
  },
  paragraphContainer: {
    transition: 'max-height .5s linear',
    overflow: 'hidden',
    fontSize: '12px',
    lineHeight: '18px',
    flexDirection: 'column',
    fontWeight: '300',
    px: 0,
    mt: 2,
    '& p': {
      mb: 3
    }
  },
  mobileParagraphsContainer: {
    zIndex: 9,
    color: 'white',
    textAlign: 'center',
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    backgroundColor: 'rgba(0,0,0,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '300',
    fontSize: 4,
    px: 7,
    my: 2,
    '& p': {
      my: 3
    }
  },
  privacyPolicyLink: {
    textDecoration: 'underline',
    color: 'currentColor'
  },
  titleContainer: {
    display: 'flex',
    width: '100%'
  }
}
export default styles

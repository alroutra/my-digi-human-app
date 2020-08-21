import React from 'react'
import { render } from '../../../test-utils'
import '@testing-library/jest-dom/extend-expect'
import InformationContent from '../InformationContent'
import { useUneeqState } from 'uneeq-react-core'
import { HeadingInformation, InformationItem } from '../Information'
jest.mock('uneeq-react-core')
const information = [
  {
    type: 'heading',
    text: 'Contact Details'
  },
  {
    type: 'text',
    text: 'For further information call'
  },
  {
    type: 'link',
    label: 'Link',
    href: 'https://example.com'
  },
  {
    type: 'list',
    items: [
      {
        type: 'link',
        label: 'Link',
        href: 'https://example.com'
      },
      {
        type: 'text',
        text: 'Children for further information call'
      }
    ]
  },
  {
    type: 'image',
    source: 'https://picsum.photos/100',
    label: 'Yep, its an image',
    width: '100%'
  }
] as InformationItem[]
;(useUneeqState as jest.Mock).mockReturnValue({
  savedItems: [],
  onScreenInfo: {
    suggestedResponses: {}
  }
})

describe('InformationContent', () => {
  it('should render correctly', () => {
    const { container } = render(
      <InformationContent information={information} />
    )

    expect(container).toHaveTextContent(
      (information[0] as HeadingInformation).text
    )
  })
})

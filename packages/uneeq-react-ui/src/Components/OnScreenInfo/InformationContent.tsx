import React, { createElement } from 'react'
// import ReactHtmlParser from 'react-html-parser'
import { Image, Link, Text, Heading } from 'rebass'
// @ts-ignore
import marksy from 'marksy'

const headingStyles = {
  fontSize: 2,
  fontWeight: 'bold',
  m: 0,
  p: 0
}

const compile = marksy({
  elements: {
    a: (props: any) => (
      <a {...props} target="_blank" rel="noopener noreferrer" />
    ),
    h1: ({ children }: any) => <Heading sx={headingStyles}>{children}</Heading>,
    h2: ({ children }: any) => <Heading sx={headingStyles}>{children}</Heading>,
    h3: ({ children }: any) => <Heading sx={headingStyles}>{children}</Heading>,
    h4: ({ children }: any) => <Heading sx={headingStyles}>{children}</Heading>
  },
  createElement
})

interface HeadingInformation {
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

type InformationItem =
  | ListInformation
  | HeadingInformation
  | TextInformation
  | HTMLInformation
  | ImageInformation
  | LinkInformation
  | MarkdownInformation

const renderInformationItem = (item: InformationItem, index: number): any => {
  switch (item.type) {
    case 'html':
      console.warn('HTML type used')
      return null//ReactHtmlParser(item.html)
    case 'text':
      return <Text key={index}>{item.text}</Text>
    case 'heading':
      return (
        <Text fontSize={3} key={index}>
          {item.text}
        </Text>
      )
    case 'markdown':
      const compiled = compile(item.markdown, {})
      return compiled.tree
    case 'list':
      return (
        <ul key={index}>
          {item.items.map((child, index) =>
            renderInformationItem(child, index)
          )}
        </ul>
      )
    case 'link':
      return (
        <Link href={item.href} rel="external" target="_blank" key={index}>
          <Text>{item.label}</Text>
        </Link>
      )
    case 'image':
      return <Image src={item.source} alt={item.label} key={index} />
  }
}

interface InformationProps {
  information: InformationItem[]
}

const InformationContent: React.FC<InformationProps> = ({ information }) => {
  if (!information?.length) return null

  return (
    <>
      {information.map((item: InformationItem, index: number) => {
        return renderInformationItem(item, index)
      })}
    </>
  )
}

export default InformationContent

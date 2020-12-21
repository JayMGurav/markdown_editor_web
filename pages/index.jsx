/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui'
import { useState } from 'react'
import TextArea from '../src/components/TextArea'
import DisplaySection from '../src/components/DisplaySection'

const Index = () => {
  const [markdownText, setMarkdownText] = useState('');
  return (
    <>
      <h1 sx={{
        textAlign: 'left',
        background: '#fff',
        display: 'inline-block',
        margin: '0.25em 0.5em',
        padding: '0.25em',
        borderRadius: '6px',
        lineHeight: '1.5ch',
        cursor: 'pointer',
        boxShadow: '0 4px 10px rgba(0,0,220,0.2)'
      }}>
        🖊A
      </h1>
      <div sx={{
        margin: '1em',
        height: '80vh',
        display: 'flex',
        flexWrap: 'wrap',
        borderRadius: '8px',
      }}>
        <TextArea
          name="markdownText"
          value={markdownText}
          onChange={(e) => setMarkdownText(e.target.value)}
          onBlur={(e) => setMarkdownText(e.target.value)}
        />
        <DisplaySection markdownText={markdownText} />
      </div>
    </>
  )
}

export default Index;
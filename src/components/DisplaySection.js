/** @jsx jsx */
import { jsx } from 'theme-ui'
import marked from 'marked'
import DOMPurify from 'dompurify';

const DisplaySection = ({ markdownText }) => {

  const changeToHTML = () => {
    if (markdownText) {
      const dirtyHTML = marked(markdownText);
      const cleanHTML = DOMPurify.sanitize(dirtyHTML);
      return cleanHTML;
    }
  }
  return (
    <div sx={{
      flex: '1',
      background: 'rgb(245, 245, 215)',
      borderRadius: '0 8px 8px 0',
      height: '80vh',
      overflowY: 'auto',
      fontSize: '20px',
      padding: '1em',
      minWidth: '400px',
    }}
      dangerouslySetInnerHTML={{ __html: changeToHTML() }}
    >
    </div>
  )
}

export default DisplaySection;
/** @jsx jsx */
import { jsx } from 'theme-ui'


const testArea = (props) => (
  <textarea sx={{
    flex: '1',
    resize: 'none',
    padding: '1em',
    outline: 'none',
    boxShadow: 'none',
    border: 'none',
    borderRadius: '8px 0 0 8px',
    overflowY: 'auto',
    minWidth: '400px',
    fontSize: '20px',
    ':focus': {
      border: 'none',
      boxShadow: 'none',
    }
  }} {...props} placeholder="Start typing using Markdown here..." />
)

export default testArea;
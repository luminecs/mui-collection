import { useEffect } from 'react'
import Prism from 'prismjs'
import { Paper } from '@mui/material'

const JSCode = `const App = props => {
  return (
    <div>
      <h1> Prism JS </h1>
      <div>Awesome Syntax Highlighter</div>
    </div>
  );
};
`;
// <CodeBlock code={JSCode} language="javascript" />
export default function CodeBlock ({ code, language }) {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <Paper variant="outlined" sx={{ width: '90%', m: 2, px: 2 }}>
      <h5> 代码块 {language}</h5>
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </Paper>
  )
}

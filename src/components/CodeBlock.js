import { useEffect } from 'react'
import Prism from 'prismjs'
import { Paper } from '@mui/material'

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
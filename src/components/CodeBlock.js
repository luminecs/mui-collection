import { useEffect, useState } from 'react'
import "highlight.js/styles/hybrid.css"
import hljs from 'highlight.js'
import { Paper } from '@mui/material'

// <CodeBlock code={JSCode} language="javascript" />
export default function CodeBlock ({ code, language, url }) {
  const [text, setText] = useState('')
  const [open, setOpen] = useState(false)

  async function fetchText (url) {
    const response = await fetch(url)
    return await response.text()
  }

  useEffect(() => {
    fetchText(url).then(t => {
      setText(t)
    }).then(() => hljs.highlightAll())
  }, [url])

  if (!text) return ''

  return (
    <>
      <Paper variant="outlined" sx={{ my: 2, px: 2 }}>
        <h4 style={{ textDecoration: 'underline', cursor: 'pointer' }}
            onClick={() => setOpen(!open)}>
          {open ? '隐藏' : '显示'}代码示例
        </h4>
        <pre style={{ display: open ? 'block' : 'none' }}>
          <code className={`language-${language}`}>{text}</code>
        </pre>
      </Paper>
    </>
  )
}

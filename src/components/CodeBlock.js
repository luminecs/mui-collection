import { useEffect, useState } from 'react'
import Prism from 'prismjs'
import { Paper } from '@mui/material'
import 'prismjs/themes/prism-tomorrow.min.css'

// <CodeBlock code={JSCode} language="javascript" />
export default function CodeBlock ({ code, language, url }) {
  const [text, setText] = useState('')
  const [open, setOpen] = useState(false)

  async function fetchText (url) {
    const response = await fetch(url)
    return await response.text()
  }

  useEffect(() => {
    Prism.highlightAll()
    fetchText(url).then(t => {
      console.info(new Date())
      setText(t)
    })
  }, [url, text])

  if (!text) return ''

  return (
    <>
      <Paper variant="outlined" sx={{ my: 2, px: 2 }}>
        <h4 style={{ textDecoration: 'underline', cursor: 'pointer' }}
            onClick={() => setOpen(!open)}>
          {open ? '隐藏' : '显示'}代码示例
        </h4>
        <pre style={{ display: open ? 'block' : 'none' }}>
          <code className={`language-javascript`}>{text}</code>
        </pre>
      </Paper>
    </>
  )
}

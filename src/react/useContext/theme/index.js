import { createContext, useContext } from 'react'
import './style.css'

const ThemeContext = createContext(null)

function Button ({ children }) {
  const theme = useContext(ThemeContext)
  const className = 'button-' + theme
  return (
    <button className={className}>
      {children}
    </button>
  )
}

function Panel ({ title, children }) {
  const theme = useContext(ThemeContext)
  const className = 'panel-' + theme
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

function Form () {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  )
}

export default function UseContextTheme () {
  return (
    <ThemeContext.Provider value="dark">
      <Form/>
    </ThemeContext.Provider>
  )
}

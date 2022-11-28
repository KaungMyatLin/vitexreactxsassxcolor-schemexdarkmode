import './styles/_main.scss'
import './styles/base/reset.scss'
import { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'
import Navbar from './components'

function App() {
  const { theme, togThemeHdl} = useContext(ThemeContext)
  console.log("App.tsx theme is: _" + theme)
  return (
    <div className={theme}>
      <Navbar />
      <div className='background flex'>
        <h1 className='text'>hello</h1>
        <button onClick={togThemeHdl}>
          toggle
        </button>
      </div>
    </div>
  )
}

export default App

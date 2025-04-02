import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageCV from './pages/CVPage/PageCV'
import HomePage from './pages/HomePage/HomePage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage /> } />
        <Route path='/CreateCV' element={<PageCV /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App

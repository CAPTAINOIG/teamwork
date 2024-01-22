import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './component/Dashboard'


function App() {

  return (
    <>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </>
  )
}

export default App

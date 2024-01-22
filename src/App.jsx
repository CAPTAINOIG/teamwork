import { Route, Routes } from "react-router-dom"
import Signin from "./components/Signin"


function App() {

  return (
    <>
      <div>
        <Routes>
        <Route path="/signin" element={<Signin/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App

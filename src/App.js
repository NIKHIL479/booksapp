import React from 'react'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import Componenta from './componenta'
import Element from './element'
export const App = () => {
  var l=[{name:"java",pages:100},{name:"java",pages:100}]
  return (
    <BrowserRouter>
    <h1>welcome</h1>
    <Link to="/book">Books </Link>
    <Routes>
      <Route path="/book" element={<Componenta/>} />
      <Route path="/book/:id" element={<Element/>} />
    </Routes>
    
    
    </BrowserRouter>

  )
}
export default App
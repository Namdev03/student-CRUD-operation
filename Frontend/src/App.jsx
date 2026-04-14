import { Route, Router, Routes } from 'react-router'
import Home from './component/Home'
import Register from './component/Register'
import Login from './component/Login'
import StudentFormTile from './component/Updatefiled'

function App() {


    return (
      
 <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/update" element={<StudentFormTile />} />

    </Routes>
    )
}

export default App
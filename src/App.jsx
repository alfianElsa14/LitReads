import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import FavoritePage from './pages/FavoritePage'
import Navigation from './components/Navigation'
import Detail from './pages/Detail'
import Edit from './pages/Edit'

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/detail/:id' element={<Detail />} />
        <Route path="/favorites" element={<FavoritePage />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </>
  )
}

export default App

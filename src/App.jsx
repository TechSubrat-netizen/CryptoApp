import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import Coins from './Components/Coins'
import Exchange from './Components/Exchange'

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route  path='/' element={<Home/>} />
      <Route  path='/coins' element={<Coins/>} />
      <Route path='/coinExange' element={<Exchange/>}/>

    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App

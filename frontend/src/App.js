import  { useEffect, useState } from 'react';
import { Routes, Route,  } from 'react-router';



//! Routes
import StorePage from './Routes/store'
import SocialPage from './Routes/social'
import HomePage from './Routes/home'
// Components
import HeaderNav from './components/headerNav/HeaderNav.js'
import SideNav from './components/sideNav/sideNav.js';
import GameLibrary from './components/gameLibrary/GameLibrary';



import './App.css';


function App() {
  const [gameDetail,setGameDetail] = useState(undefined)
  
  // Fetch List of All Games w Details
  useEffect(()=>{
    // Fetch  All Xbox Games
    fetch('/api/xbox/all').then((response)=>{
      // Return Response 
      return response.json()
    }).then(data => {
      // Convert Data into array of IDs
      let arr = data.filter(item=>{return typeof(item.id) === 'string'}).map(item=>{ return item.id})
      let id = arr.toString()

      // Fetch New API with all Games 
      fetch(`/api/xbox/info/${id}`).then(response=>{
        return response.json()
      }).then(data=>{
        // Set GameDetails to new IDs
        console.log('Data Initialized ... ', data)
        setGameDetail(data.Products)
      })
    })


  },[])




  return (
    <div className="App">
      <HeaderNav/>
        <SideNav/>
        <div id='main'>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path='/store' element={<StorePage/>}/>
          <Route path='/social' element={<SocialPage/>}/>
          <Route path="/all" element={<GameLibrary title={'All Games'} gameDetail={gameDetail}/>} />
        </Routes>
          {/* <FontAwesomeIcon className='pulse xbox-logo' icon={faXbox}/> */}
        </div>
    </div>

  );

  
}



export default App;

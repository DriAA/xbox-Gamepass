import  { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXbox } from '@fortawesome/free-brands-svg-icons';

// Components
import SideNav from './components/sideNav/sideNav.js';
import GameLibrary from './components/gameLibrary/GameLibrary';
import './App.css';


function App() {
  const [gameDetail,setGameDetail] = useState(undefined)
  const [isloading,setIsLoading] = useState(true)
  
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
        setIsLoading(false)
      })
    })


  },[])




  return (
    <div className="App">
      <SideNav/>

      <div id='main'>
        {/* <FontAwesomeIcon className='pulse xbox-logo' icon={faXbox}/> */}
        <GameLibrary title={'All Games'} gameDetail={gameDetail}/>
      </div>


    </div>

  );



}



export default App;

import  { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/UI/card/card';

function App() {
  const [gameDetail,setGameDetail]= useState(null)
  async function fetchHttp(url){
    const result = await fetch(url)  
    const data = await result.json()
    return data
  }

  useEffect(()=>{

  
    fetchHttp('/api/xbox/all').then((response)=>{
      return response
    }).then((response)=>{
      fetchHttp(`/api/xbox/info/${response[10].id}`).then((info)=>{
        setGameDetail(info)

      })
    })

  },[])





  return (
    <div className="App">
      <header className="App-header">
        <Card>Game Detail</Card>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

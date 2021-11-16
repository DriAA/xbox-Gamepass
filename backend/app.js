const express = require('express');
const app = express();
const port = process.env.port || 5000
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// Routes
app.get('/',(req, res) =>{
    return res.json ('Success')
})

app.get('/api/xbox/info/:id',async (req, res) =>{
    console.log("ID:", req.params.id)

    let ids = req.params.id
    let response = await fetch(`https://displaycatalog.mp.microsoft.com/v7.0/products?bigIds=${ids}&market=US&languages=en-us&MS-CV=DGU1mcuYo0WMMp+F.1`)
    let data = await response.json()
    console.log("Data:", data)
    return res.json(data)
})

app.get('/api/xbox/all',async (req,res)=>{
    let response = await fetch('https://catalog.gamepass.com/sigls/v2?id=f6f1f99f-9b49-4ccd-b3bf-4d9767a77f5e&language=en-us&market=US')
    let data = await response.json()
    return res.json(data)
});

app.get('/api/xbox/gamepass',async (req,res)=>{
    let response = await fetch('https://catalog.gamepass.com/sigls/v2?id=f6f1f99f-9b49-4ccd-b3bf-4d9767a77f5e&language=en-us&market=US')
    let data = await response.json()
    return res.json(data)
});

app.get('/api/xbox/pc',async (req,res)=>{
    let response = await fetch('https://catalog.gamepass.com/sigls/v2?id=fdd9e2a7-0fee-49f6-ad69-4354098401ff&language=en-us&market=US')
    let data = await response.json()
    return res.json(data)
});

app.get('/api/xbox/ea',async (req,res)=>{
    let response = await fetch('https://catalog.gamepass.com/sigls/v2?id=fdd9e2a7-0fee-49f6-ad69-4354098401ff&language=en-us&market=US')
    let data = await response.json()
    return res.json(data)
});

app.get('/api/xbox/noController',async (req,res)=>{
    let response = await fetch('https://catalog.gamepass.com/sigls/v2?id=7d8e8d56-c02f-4711-afec-73a80d8e9261&language=en-us&market=US')
    let data = await response.json()
    return res.json(data)
});

// Server
app.listen(port,()=>{
    console.log(`Server Initialized on port: ${port}`)
})


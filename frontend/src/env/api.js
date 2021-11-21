const httpCall = {

    // Fetch List of All Games w Details
    get:(url,SetData) =>{
        // Fetch  All Xbox Games
        fetch(url).then((response)=>{
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
            SetData(data)
            console.log("Success:",data)
          })
        })
    }
}

export default httpCall
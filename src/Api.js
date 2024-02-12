let apiKey = "DArNM2cKqQNTmtIOTIYa7hGP8q5hgTteZTW24cTr"

let myObj = {
    fetchApi :async function(count){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
        let data = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`, requestOptions)
            .then(response => response.text())
        let resultData = JSON.parse(data)
        return resultData
        
    }
}

export default myObj
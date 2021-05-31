const pagesURL = `http://localhost:5002/select/activities`;
const requestOptions ={
    'content-type': 'application/json',
    method: 'GET',
    redirect: 'follow'
};

fetch(pagesURL,requestOptions)
    .then(response = function (response){
        return response.json;
    })
    .then(data =>{
        data.forEach()
    }).catch(error = function (error){
        console.log(error)
})
thePath = window.location.pathname;
const urlId = thePath.substring(thePath.lastIndexOf('/')+1)
const thisForm = document.getElementById('thisForm');
const author = document.getElementById('author');
const dateTime = document.getElementById('dateTime');
const description = document.getElementById('description');
const image = document.getElementById('image');
const title = document.getElementById('title');
const GetReviewUrl  = 'http://localhost:5002/select/blog/'+ urlId;

thePath = window.location.pathname;
const urlTitle = thePath.substring(thePath.lastIndexOf('/')+1)

// ============== GET BLOG ==============

const mail = "kim@i-tritraening.dk";
const myUrl = `http://localhost:5002/select/blog/${urlTitle}`;


const requestOptions = {
    'content-type': 'application/json',
    method: 'GET',
    redirect: 'follow'
    };

        fetch(myUrl, requestOptions)
            .then(response => response.json)
            .then(data =>{
                console.log(data)

            })






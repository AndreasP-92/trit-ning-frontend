const thisform = document.getElementById('');
const author = document.getElementById('author');
const dateTime = document.getElementById('dateTime');
const description = document.getElementById('description');
const image = document.getElementById('image');
const title = document.getElementById('title');



// ============== GET BLOG ==============

const mail = "kim@i-tritraening.dk";
const myUrl = `http://localhost:5002/select/blogs`;

const requestOptions = {
    'content-type': 'application/json',
    method: 'GET',
    redirect: 'follow'
};

fetch(myUrl, requestOptions)
    .then(response => response.json())
    .then(data => {
        gotBlogData(data)
    })

function gotBlogData(data){
    data.forEach(fillTbody)
}

// ============== INSERT BLOG ==============

async function insertBlog(optionValues){
    const filename = img.files[0].name;



    fetch('http://localhost:5002/insert/blog', {
        method: 'POST',
        body: JSON.stringify({
            'author'          : author.value,
            'dateTime'        : dateTime.value,
            'description'     : description.value,
            'image'           : '/images/events/'+filename,
            'title'           : title.value,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }).then(function (response) {
        if (response.ok) {
            return response.json();
            console.log(response)
        }
        return Promise.reject(response);
    }).then(function (data) {
        console.log("AFTER INSERT=========",data.name)
        console.log(data)
        for(let i = 0; optionValues.length > i; i++){
            console.log("OPTIONS====",optionValues[i])
            insertDuration(optionValues[i], data.name)
        }
        thisForm.submit();
    }).catch(function (error) {
        console.warn('Something went wrong.', error);
    });
}
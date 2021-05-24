thePath = window.location.pathname;
const urlId = thePath.substring(thePath.lastIndexOf('/')+1)
const thisForm = document.getElementById('thisForm');
const author = document.getElementById('author');
const dateTime = document.getElementById('dateTime');
const description = document.getElementById('description');
const image = document.getElementById('image');
const title = document.getElementById('title');
const GetReviewUrl  = 'http://localhost:5002/select/blog/'+ urlId;


const requestOptions = {
    'content-type': 'application/json',
    method: 'GET',
    redirect: 'follow'
}

fetch(GetReviewUrl ,requestOptions)
    .then(response = function (response){
        return response.json()
    }).then(data => {
    console.log(data.author)
    author.value = data.author
}).catch(function (error){
    console.log(error)
})

thisForm.addEventListener('submit',async function (e){
    e.preventDefault();

    updateBlog();

    async function updateBlog(){
        fetch('http://localhost:5002/edit/blog/'+ urlId, {
            method: 'PUT',
            body: JSON.stringify({

                'author': author.value,
                'description': description.value,
                // 'reviewImage': reviewImage.files[0].name,
            }),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(function (response) {
            if (response.ok) {
                return response.json();
                console.log(response)
            }
            return Promise.reject(response);
        }).then(function (data) {
            console.log("AFTER INSERT=========", data.title)
            console.log(data)

            window.location.href = "/admin/index"
        }).catch(function (error) {
            console.warn('Something went wrong.', error);
        });
    }
})
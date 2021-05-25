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
                insertBlogData();
                console.log(data)

            })

        function insertBlogData(){

        }

thisForm.addEventListener('submit',async function (e) {
    e.preventDefault();

    await insertBlog();


    async function insertBlog() {
        fetch('http://localhost:5002/edit/blog', {
            method: 'PUT',
            body: JSON.stringify({

                'title': title.value,
                'description': editorCopy.value,
                'img': img.value,
                'datetime': date,
                'author': author.value,

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

            window.location.href = "/adminindex"
        }).catch(function (error) {
            console.warn('Something went wrong.', error);
        });
    }


})













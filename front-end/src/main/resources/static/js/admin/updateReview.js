const reviewImage   = document.getElementById("reviewImage");
const author        = document.getElementById("author");
const editorCopy    = document.getElementById("editorCopy");
const thisForm      = document.getElementById("thisForm");
const editor = document.getElementById('editor');

thePath = window.location.pathname;
const urlId = thePath.substring(thePath.lastIndexOf('/')+1)

const GetReviewUrl  = `http://localhost:5002/select/review/${urlId}`;

const requestOptions = {
    'content-type': 'application/json',
    method: 'GET',
    redirect: 'follow'
}

fetch(GetReviewUrl ,requestOptions)
    .then(response => response.json())
    .then(data => {
        insertReviewData(data)
        console.log(data.author)
        console.log(data)
    }).catch(function (error){
        console.log(error)
})

function insertReviewData(data){
    author.value = data.author
    editor.innerHTML = data.description
    console.log(data.description)
}

//==============================================FORM EVENT LISTENER=====================================================
thisForm.addEventListener('submit',async function (e){
    e.preventDefault();

    await updateReview();

})

async function updateReview(){

    console.log(editorCopy.value)

    let init;

    if (editorCopy.value == ""){

        init = {
            method: 'PUT',
            body: JSON.stringify({

                'id'         : urlId,
                'author'     : author.value,
                'reviewImage': reviewImage.files[0].name

            }),
            headers: {
                'Content-type': 'application/json'
            }
        }


    }else if (editorCopy.value != ""){
        init = {
            method: 'PUT',
            body: JSON.stringify({

                'id'         : urlId,
                'author'     : author.value,
                'description': editorCopy.value,
                'reviewImage': reviewImage.files[0].name,

            }),
            headers: {
                'Content-type': 'application/json'
            }
        }
    }

    console.log(init)

    fetch(`http://localhost:5002/edit/review`,init)
    .then(function (response) {
        if (response.ok) {
            return response.json();
            console.log(response)
        }
        return Promise.reject(response);
    }).then(function (data) {
        console.log("AFTER INSERT=========", data.author)
        console.log(data)

        window.location.href = "/admin/index"
    }).catch(function (error) {
        console.warn('Something went wrong.', error);
    });
}
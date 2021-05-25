thePath = window.location.pathname;
const urlId = thePath.substring(thePath.lastIndexOf('/')+1)
const reviewImage   = document.getElementById("reviewImage");
const author        = document.getElementById("author");
const editorCopy   = document.getElementById("editorCopy");
const thisForm      = document.getElementById("thisForm");
const GetReviewUrl  = 'http://localhost:5002/select/review/'+ urlId;
const editor = document.getElementById('editor');

const requestOptions = {
    'content-type': 'application/json',
    method: 'POST',
    redirect: 'follow'
}

fetch(GetReviewUrl, requestOptions)
    .then(response = function (response){
        return response.json()
    }).then(data => {
        author.value = data.author
    editor.innerHTML = data.description
}).catch(function (error){
    console.log(error)
})

thisForm.addEventListener('submit',function(e){
    e.preventDefault();

    deleteReview();

    async function deleteReview(){
        fetch(`http://localhost:5002/delete/review/${urlId}`,{
            method: 'POST',
            body: JSON.stringify({
                'id': urlId,
                'author': author.value,
                'description': editorCopy.value,
                'reviewImage' : reviewImage.files[0].name
            }),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(function(response){
            if (response.ok){
                return response.json()
                console.log(response)
            }
            return Promise.reject(response);
        }).then(function (data){
            console.log("AFTER INSERT=========", data.author)
            console.log(data)

            window.location.href = "/admin/index"
        }).catch(function (error){
            console.warn('Something went wrong.', error)
        });
    }
}
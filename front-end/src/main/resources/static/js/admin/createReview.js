const reviewImage   = document.getElementById("reviewImage");
const reviewName    = document.getElementById("reviewName");
const editorCopy    = document.getElementById("editorCopy");
const thisForm      = document.getElementById("thisForm");
const GetReviewUrl = 'http://localhost:5002/select/activities';


const requestOptions2 = {
    'content-type': 'application/json',
    method: 'GET',
    redirect: 'follow'
}

fetch(Get)

thisForm.addEventListener('submit',function (e)) {
    e.preventDefault();
}
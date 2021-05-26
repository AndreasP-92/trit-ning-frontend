jQuery(document).ready(function($) {
    /** ******************************
     * Simple WYSIWYG
     ****************************** **/
    $('#editControls a').click(function(e) {
        e.preventDefault();
        switch($(this).data('role')) {
            case 'h1':
            case 'h2':
            case 'h3':
            case 'p':
                document.execCommand('formatBlock', false, $(this).data('role'));
                break;
            default:
                document.execCommand($(this).data('role'), false, null);
                break;
        }

        var textval = $("#editor").html();
        $("#editorCopy").val(textval);
    });

    $("#editor").keyup(function() {
        var value = $(this).html();
        $("#editorCopy").val(value);
    }).keyup();

    $('#checkIt').click(function(e) {
        e.preventDefault();
        alert($("#editorCopy").val());
    });
});

thePath = window.location.pathname;
const urlId = thePath.substring(thePath.lastIndexOf('/')+1)
const reviewImage   = document.getElementById("reviewImage");
const author        = document.getElementById("author");
const editorCopy    = document.getElementById("editorCopy");
const thisForm      = document.getElementById("thisForm");
const GetReviewUrl  = 'http://localhost:5002/select/review/'+ urlId;
const editor = document.getElementById('editor');


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
    editor.innerHTML = data.description
    }).catch(function (error){
        console.log(error)
})

thisForm.addEventListener('submit',async function (e){
    e.preventDefault();

updateReview();

    async function updateReview(){
        fetch(`http://localhost:5002/edit/review/${urlId}`, {
            method: 'POST',
            body: JSON.stringify({
                'id'         : urlId,
                'author'     : author.value,
                'description': editorCopy.value,
                'reviewImage': reviewImage.files[0].name,
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
            console.log("AFTER INSERT=========", data.author)
            console.log(data)

            window.location.href = "/admin/index"
        }).catch(function (error) {
            console.warn('Something went wrong.', error);
        });
    }
})
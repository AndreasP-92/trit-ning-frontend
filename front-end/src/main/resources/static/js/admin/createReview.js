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
        $("#description").val(textval);
    });

    $("#editor").keyup(function() {
        var value = $(this).html();
        $("#description").val(value);
    }).keyup();

    $('#checkIt').click(function(e) {
        e.preventDefault();
        alert($("#description").val());
    });
});


const reviewImage   = document.getElementById("reviewImage");
const author        = document.getElementById("author");
const description   = document.getElementById("description");
const thisForm      = document.getElementById("thisForm");
const GetReviewUrl  = 'http://localhost:5002/select/all/reviews';


const requestOptions1 = {
    'content-type': 'application/json',
    method: 'GET',
    redirect: 'follow'
}

fetch(GetReviewUrl, requestOptions1)
    .then(response = function (response){
        return response.json()
    }).then(data=> {
    console.log(data.author)
}).catch(function (error){
    console.log(error)
})


thisForm.addEventListener('submit',async function (e){
    e.preventDefault();

insertReview();
console.log(description.value)

    async function insertReview(){
        fetch('http://localhost:5002/insert/review', {
            method: 'POST',
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
            console.log("AFTER INSERT=========", data.author)
            console.log(data)

            // window.location.href = "/admin/index"
        }).catch(function (error) {
            console.warn('Something went wrong.', error);
        });
    }
})
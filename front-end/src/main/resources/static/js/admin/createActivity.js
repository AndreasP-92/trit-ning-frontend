const thisForm      = document.getElementById('thisForm');
const title         = document.getElementById('title');
const bannerImg     = document.getElementById('bannerImg');
const img           = document.getElementById('img');
const editorCopy    = document.getElementById('editorCopy');

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

// alert("test")

const image         = document.getElementById("image");
const getImage      = document.getElementById("getImage");
const insertImage   = document.getElementById("insertImage");
const desc          = document.getElementById("desc");
const formData      = new FormData();
//
// thisForm.addEventListener("submit", function(e){
//     e.preventDefault();
//
//     formData.append("imageFile", image.files[0]);
//
//     console.log(formData.get("imageFile"))
//     console.log(image.files[0]);
//
//     const URL1 = "http://localhost:5002/image/upload"
//
//     const requestOptions = {
//         'content-type': 'multipart/form-data',
//         method: 'POST',
//         redirect: 'follow',
//         body: formData
//
//     };
//
//     fetch(URL1, requestOptions)
//         .then(function (response) {
//             console.log(response);
//         })
//         .catch(function (response) {
//             console.log(response);
//         });
// })

//
// getImage.addEventListener("click", function(e){
//     // alert("test")
//
//     const URL2 = "http://localhost:5002/image/get/02052021.jpg"
//
//     const requestOptions = {
//         method: 'GET',
//         redirect: 'follow'
//     };
//
//     fetch(URL2, requestOptions)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.blob();
//         })
//         .then(data => {
//             console.log(data)
//             insertImage.src = URL.createObjectURL(data);
//         })
//         .catch(error => {
//             console.error('There has been a problem with your fetch operation:', error);
//         });
//
// })


thisForm.addEventListener('submit',function (e) {
    e.preventDefault();

    async function insertActivity(){
        fetch('http://localhost:5002/insert/activity', {
            method: 'POST',
            body: JSON.stringify({

                'title'         : title.value,
                'description'   : editorCopy.value,
                'banner'        : bannerImg.files[0].name,
                'img'           : img.files[0].name,

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
            console.log("AFTER INSERT=========",data.title)
            console.log(data)

            // window.location.href = "/admin/index"
        }).catch(function (error) {
            console.warn('Something went wrong.', error);
        });
    }

    const myurl2 = `http://localhost:5002/select/activity/${title.value}`
    const requestOptions2 = {
        'content-type': 'application/json',
        method: 'GET',
        redirect: 'follow'
    };

    fetch(myurl2,requestOptions2)
        .then(response => response.json())
        .then(data => {
            console.log(data)

            console.log("Findes allerede")
            document.getElementById('alreadyExists').innerHTML = "Aktivitet Eksistere allerede";
        }).catch(async function(e){
            console.log(e)
        await insertActivity();
    })
})
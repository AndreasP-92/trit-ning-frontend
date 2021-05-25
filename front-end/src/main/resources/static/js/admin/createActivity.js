const thisForm      = document.getElementById('thisForm');
const title         = document.getElementById('title');
const bannerImg     = document.getElementById('bannerImg');
const img           = document.getElementById('img');
const editorCopy    = document.getElementById('editorCopy');
const getImage      = document.getElementById('getImage')
const displayImage  = document.getElementById('displayImage')
const formData      = new FormData();
const formData2     = new FormData
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


// ============ GET IMAGE EVENT LISTENER ==========

getImage.addEventListener("click", function(e){

    const URL2 = "http://localhost:5002/image/get/02052021.jpg"

    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(URL2, requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.blob();
        })
        .then(data => {
            console.log(data)
            displayImage.src = URL.createObjectURL(data);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });

})

// ============ FORM EVENT LISTENER ==========

thisForm.addEventListener('submit',async function (e) {
    e.preventDefault();

    await getPages();
    await insertBannerImage(bannerImg)
    await insertImage(img)
})

// ============ INSERT IMAGE FUNC
async function insertImage (data){
    formData.append("imageFile", data.files[0]);

    // console.log(formData.get("imageFile"))
    console.log(data.files[0]);

    const URL1 = "http://localhost:5002/image/upload"

    const requestOptions = {
        'content-type': 'multipart/form-data',
        method: 'POST',
        redirect: 'follow',
        body: formData

    };

    fetch(URL1, requestOptions)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (response) {
            console.log(response);
        });
}

// ============ INSERT BANNER IMG FUNC
async function insertBannerImage(data){
    formData2.append("imageFile", data.files[0]);

    // console.log(formData.get("imageFile"))
    console.log(data.files[0]);

    const URL1 = "http://localhost:5002/image/upload"

    const requestOptions = {
        'content-type': 'multipart/form-data',
        method: 'POST',
        redirect: 'follow',
        body: formData2

    };

    fetch(URL1, requestOptions)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (response) {
            console.log(response);
        });
}

// ============ INSERT PAGE FUNC
async function insertPage(){

    let url = 'http://localhost:5002/insert/activity'
    let requestOptions = {
        method: 'POST',
        redirect: 'follow',
        body: JSON.stringify({

            'title'         : title.value,
            'description'   : editorCopy.value,
            'banner'        : bannerImg.files[0].name,
            'img'           : img.files[0].name,

        }),
        headers: {
            'Content-type': 'application/json'
        }

    }

    fetch(url, requestOptions)
        .then(function (response) {
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

// ============ GET PAGES FUNC
async function getPages (){
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
        await insertPage();
    })
}
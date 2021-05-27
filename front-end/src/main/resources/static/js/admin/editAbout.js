const img           = document.getElementById("aboutImg");
const editorCopy    = document.getElementById("editorCopy");
const title         = document.getElementById("title");
const thisForm      = document.getElementById("thisForm");
const editor        = document.getElementById('editor');

thePath = window.location.pathname;
const urlId = thePath.substring(thePath.lastIndexOf('/')+1)

const GetAboutUrl  = `http://localhost:5002/select/about/${urlId}`;

const requestOptions = {
    'content-type': 'application/json',
    method: 'GET',
    redirect: 'follow'
}

fetch(GetAboutUrl ,requestOptions)
    .then(response => response.json())
    .then(data => {
        insertAboutData(data)
        console.log(data.title)
        console.log(data)
    }).catch(function (error){
    console.log(error)
})

function insertAboutData(data){
    title.value = data.title
    editor.innerHTML = data.description
    console.log(data.description)
}

//==============================================FORM EVENT LISTENER=====================================================
thisForm.addEventListener('submit',async function (e){
    e.preventDefault();

    await updateAbout();

})

async function updateAbout(){

    console.log(editorCopy.value)

    let init;

    if (editorCopy.value == ""){

        init = {
            method: 'POST',
            body: JSON.stringify({

                'id'        : urlId,
                'title'     : title.value,
                // 'aboutImg'  : img.files[0].name

            }),
            headers: {
                'Content-type': 'application/json'
            }
        }


    }else if (editorCopy.value != ""){
        init = {
            method: 'POST',
            body: JSON.stringify({

                'id'         : urlId,
                'title'      : title.value,
                'description': editorCopy.value,
                // 'aboutImg'   : img.files[0].name,

            }),
            headers: {
                'Content-type': 'application/json'
            }
        }
    }

    console.log(init)

    fetch(`http://localhost:5002/edit/about/`,init)
        .then(function (response) {
            if (response.ok) {
                return response.json();
                console.log(response)
            }
            return Promise.reject(response);
        }).then(function (data) {
        console.log("AFTER INSERT=========", data.title)
        console.log(data)

        // window.location.href = "/admin/index"
    }).catch(function (error) {
        console.warn('Something went wrong.', error);
    });
}
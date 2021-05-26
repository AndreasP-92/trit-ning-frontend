const thisForm = document.getElementById('thisForm');
const title = document.getElementById('title');
const banner = document.getElementById('banner');
const img = document.getElementById('img');
const editor = document.getElementById('editor');
const editorCopy = document.getElementById('editorCopy');


thePath = window.location.pathname;
const urlTitle = thePath.substring(thePath.lastIndexOf('/')+1)

const GetPageUrl = `http://localhost:5002/select/activity/${urlTitle}`;

console.log(urlTitle)

const requestOptions2 = {
    'content-type': 'application/json',
    method: 'GET',
    redirect: 'follow'
}

fetch(GetPageUrl, requestOptions2)
    .then(response => response.json())
    .then(data => {
        insertPageData(data);
        console.log(data);
    }).catch(function (e){
        console.log(e);
})

function insertPageData(data){
    title.value = data.title;
    editor.innerHTML = data.description;
    console.log(data.description)
}

//==============================================FORM EVENT LISTENER=====================================================
thisForm.addEventListener('submit',async function (e) {
    e.preventDefault();

    await updateActivity();



})

async function updateActivity() {

    console.log(editorCopy.value)
    const urlUpdatePage = `http://localhost:5002/edit/activity/${urlTitle}`;

    let init;

    if (editorCopy.value == ""){

         init = {
            method: 'PUT',
            body: JSON.stringify({

                'title': title.value,
                'banner': banner.files[0].name,
                'img': img.files[0].name,

            }),
            headers: {
                'Content-type': 'application/json'
            }
        }


    }else if (editorCopy.value != ""){
         init = {
            method: 'PUT',
            body: JSON.stringify({

                'title': title.value,
                'description': editorCopy.value,
                'banner': banner.files[0].name,
                'img': img.files[0].name,

            }),
            headers: {
                'Content-type': 'application/json'
            }
        }
    }

    console.log(init)



    fetch(`http://localhost:5002/edit/activity`,init)
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
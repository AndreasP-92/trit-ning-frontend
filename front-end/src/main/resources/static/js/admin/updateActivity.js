const thisForm = document.getElementById('thisForm');
const title = document.getElementById('title');
const banner = document.getElementById('banner');
const img = document.getElementById('img');
const description = document.getElementById('description');
const GetPageUrl = 'http://localhost:5002/select/activities';

const requestOptions2 = {
    'content-type': 'application/json',
    method: 'GET',
    redirect: 'follow'
}

fetch(GetPageUrl, requestOptions2)
    .then(response => response.json())
    .then(data => {
        insertPageData();
        console.log(data);
    }).catch(function (e){
        console.log(e);
})

function insertPageData(){

}

thisForm.addEventListener('submit',async function (e) {
    e.preventDefault();

    await insertActivity();


    async function insertActivity() {
        fetch('http://localhost:5002/edit/activity', {
            method: 'PUT',
            body: JSON.stringify({

                'title': title.value,
                'description': description.value,
                'banner': banner.files[0].name,
                'img': img.files[0].name,

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

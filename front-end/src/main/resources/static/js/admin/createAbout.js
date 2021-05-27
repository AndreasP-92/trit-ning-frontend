const img           = document.getElementById("aboutImg");
const description   = document.getElementById("editorCopy");
const title         = document.getElementById("title");
const thisForm      = document.getElementById("thisForm");


thisForm.addEventListener('submit',async function (e){
    e.preventDefault();

    insertAbout();
    console.log(description.value)

    async function insertAbout(){
        fetch('http://localhost:5002/insert/about', {
            method: 'POST',
            body: JSON.stringify({

                'title'     : title.value,
                'description': description.value,
                'aboutImg'  : img.files[0].name,
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

            // window.location.href = "/admin/index"
        }).catch(function (error) {
            console.warn('Something went wrong.', error);
        });
    }
})


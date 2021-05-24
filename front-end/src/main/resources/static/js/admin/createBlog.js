// ============== INSERT BLOG ==============

async function insertBlog(optionValues){
    // const filename = img.files[0].name;



    fetch('http://localhost:5002/insert/blog', {
        method: 'POST',
        body: JSON.stringify({
            'author'          : author.value,
            'dateTime'        : dateTime.value,
            'description'     : description.value,
            'image'           : image.value,
            'title'           : title.value,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
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

        thisForm.submit();
    }).catch(function (error) {
        console.warn('Something went wrong.', error);
    });
}

const myurl2 = `http://localhost:5002/select/blog/${title.value}`

const requestOptions2 = {
    'content-type': 'application/json',
    method: 'GET',
    redirect: 'follow'
};

fetch(myurl2,requestOptions2)
    .then(response => response.json())
    .then(data => {
        console.log(data)

        // console.log("Findes allerede")
        // document.getElementById('alreadyExists').innerHTML = "Aktivitet Eksistere allerede";
    }).catch(async function(e){
    console.log(e)
    await insertBlog();
})



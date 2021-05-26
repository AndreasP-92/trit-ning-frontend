const thisForm = document.getElementById('thisForm');
const author = document.getElementById('author');
const image = document.getElementById('image');
const title = document.getElementById('title');
const editor = document.getElementById('editor');
const editorCopy = document.getElementById('editorCopy');
const id = document.getElementById('id');

thePath = window.location.pathname;
const urlTitle = thePath.substring(thePath.lastIndexOf('/')+1)
const GetBlogUrl = `http://localhost:5002/select/blog/${urlTitle}`;
const mail = "kim@i-tritraening.dk";

// ============== GET BLOG ==============

thisForm.addEventListener('submit',async function (e) {
    e.preventDefault();

    await updateBlog();

})

const requestOptions = {
    'content-type': 'application/json',
    method: 'GET',
    redirect: 'follow'
    };

        fetch(GetBlogUrl, requestOptions)
            .then(response => response.json())
            .then(data =>{
                insertBlogData(data);
                console.log(data)
            }).catch(function (error){
            console.log(error)

            })

        function insertBlogData(data){

            editor.innerHTML = data.description;
            author.value = data.author;
            title.value = data.title;
            id.value = data.id;
        }

async function updateBlog() {

    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    console.log(editorCopy.value)
    const urlUpdateBlog = `http://localhost:5002/edit/blog/${urlTitle}`;

    const requestOptions4 = {

    }

    console.log(requestOptions4)

    fetch(`http://localhost:5002/edit/blog`,{

        method: 'PUT',
        body: JSON.stringify({
            'id'   : id.value,
            'title': title.value,
            'description': editorCopy.value,
            'img': img.value,
            'datetime': date,
            'author': author.value,

    }),
        headers: {
        'Content-type': 'application/json'
    }
})
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


// async function insertBlog() {
//     fetch('http://localhost:5002/edit/blog', {
//         method: 'PUT',
//         body: JSON.stringify({
//             'id':   urlId,
//             'title': title.value,
//             'description': editorCopy.value,
//             'img': img.value,
//             'datetime': date,
//             'author': author.value,
//
//         }),
//         headers: {
//             'Content-type': 'application/json'
//         }
//     }).then(function (response) {
//         if (response.ok) {
//             return response.json();
//             console.log(response)
//         }
//         return Promise.reject(response);
//     }).then(function (data) {
//         console.log("AFTER INSERT=========", data.title)
//         console.log(data)
//
//         window.location.href = "/adminindex"
//     }).catch(function (error) {
//         console.warn('Something went wrong.', error);
//     });
// }
//








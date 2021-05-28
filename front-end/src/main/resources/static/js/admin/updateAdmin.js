const thisForm  = document.getElementById('registerForm');
const mail      = document.getElementById('email');
const password  = document.getElementById('password')
const password2  = document.getElementById('confirm_password');
const userrole  = document.getElementById('role');
const id = document.getElementById('id');

thePath = window.location.pathname;
const urlTitle = thePath.substring(thePath.lastIndexOf('/')+1)
const GetUserUrl = `http://localhost:5002/select/user/${urlTitle}`;
const mail = "kim@i-tritraening.dk";

// ============== GET BLOG ==============

thisForm.addEventListener('submit',async function (e) {
    e.preventDefault();

    await updateUser();

})

const requestOptions = {
    'content-type': 'application/json',
    method: 'GET',
    redirect: 'follow'
};

fetch(GetUserUrl, requestOptions)
    .then(response => response.json())
    .then(data =>{
        insertUserData(data);
        console.log(data)
    }).catch(function (error){
    console.log(error)

})

function insertUserData(data){
    mail.value = data.mail;
    role.value = data.role;
    id.value = data.id;
}

async function updateUser() {

    let today = new Date();
    let date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();

    console.log(editorCopy.value)
    const urlUpdateBlog = `http://localhost:5002/edit/blog/${urlTitle}`;

    let init;

    if (editorCopy.value == ""){

        init = {
            method: 'PUT',
            body: JSON.stringify({
                'id': id.value,
                'title': title.value,
                // 'description': editorCopy.value,
                'img': img.value,
                'datetime': date,
                'author': author.value,

            }),
            headers: {
                'Content-type': 'application/json'
            }
        }
    }else if (editorCopy.value!=""){
        init = {
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

        }

    }

    console.log(init)

    fetch(`http://localhost:5002/edit/blog`,init)

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










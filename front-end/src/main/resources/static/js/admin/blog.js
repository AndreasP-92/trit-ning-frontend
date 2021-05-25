const thisForm = document.getElementById('thisForm');
const author = document.getElementById('author');
const dateTime = document.getElementById('dateTime');
const description = document.getElementById('description');
const image = document.getElementById('image');
const title = document.getElementById('title');



// ============== GET BLOG ==============

const mail = "kim@tritraening.dk";
const myUrl = `http://localhost:5002/select/blogs`;

const requestOptions = {
    'content-type': 'application/json',
    method: 'GET',
    redirect: 'follow'
};

fetch(myUrl, requestOptions)
    .then(response => response.json())
    .then(data => {
        gotBlog(data)
    })

function gotBlog(data){
    title.value = data.title;
    author.value = data.author;
    description.value = data.description;
}
//    ==================================================== FILL ACTIVITY TBODY =========================================
function fillFormBody(item, index) {
    const formBody = document.querySelector('.formBody')

    // === CREATE TR ===
    let div = document.createElement('div');
    div.setAttribute('class', 'form-group');
    formBody.appendChild(div);

    // === CREATE TH ===
    let th = document.createElement('th');
    th.textContent = item.id;
    tr.appendChild(th);

    // === CREATE TH ===
    let th1 = document.createElement('th');
    th1.textContent = item.title;

    tr.appendChild(th1);

    // === CREATE TD ===
    let td = document.createElement('td');
    td.setAttribute('align', 'center');
    tr.appendChild(td);

    // === CREATE a ===
    let a = document.createElement('a');
    a.setAttribute('class', 'mt-3 w-10 btn btn-info');
    a.textContent = "Rediger";
    td.appendChild(a);

    // === CREATE a1 ===
    let a1 = document.createElement('a');
    a1.setAttribute('class', 'mt-3 w-10 btn btn-danger');
    a1.textContent = "slet";
    td.appendChild(a1);
}



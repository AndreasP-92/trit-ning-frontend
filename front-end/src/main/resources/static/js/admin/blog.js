const thisForm = document.getElementById('thisForm');
const author = document.getElementById('author');
const dateTime = document.getElementById('dateTime');
const description = document.getElementById('description');
const image = document.getElementById('image');
const title = document.getElementById('title');



// ============== GET BLOG ==============

const mail = "kim@i-tritraening.dk";
const myUrl = `http://localhost:5002/select/blogs`;

const requestOptions = {
    'content-type': 'application/json',
    method: 'GET',
    redirect: 'follow'
};

fetch(myUrl, requestOptions)
    .then(response => response.json())
    .then(data => {
        gotBlogData(data)
    })

function gotBlogData(data){
    data.forEach(fillTbody)
}

//    ==================================================== FILL ACTIVITY TBODY =========================================
function fillTbody(item, index) {
    const tbody = document.querySelector('.tbody')

    // === CREATE TR ===
    let div = document.createElement('div');
    div.setAttribute('class', 'form-group');
    tbody.appendChild(div);

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



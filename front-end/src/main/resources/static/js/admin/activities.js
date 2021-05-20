// ============== GET ACTIVITY ==============

const mail = "kim@i-tritraening.dk";
const myUrl = `http://localhost:5002/select/activities`;

const requestOptions = {
    'content-type': 'application/json',
    method: 'GET',
    redirect: 'follow'
};

fetch(myUrl, requestOptions)
    .then(response => response.json())
    .then(data => {
        gotActivityData(data)
    })

function gotActivityData(data){
    data.forEach(fillTbody)
}

// === FILL Activity TBODY ===
function fillTbody(item, index) {
        const tbody = document.querySelector('.tbody')
        console.log(item.activity);

        // === CREATE TR ===
        let tr = document.createElement('tr');
        tr.setAttribute('align', 'center');
        tbody.appendChild(tr);

        // === CREATE TH ===
    let th = document.createElement('th');
    th.textContent = item.id;
    tr.appendChild(th);

    // === CREATE TH ===
    let th1 = document.createElement('th');
    th1.textContent = item.title;

    tr.appendChild(th1);

    // === CREATE TR ===
    let td = document.createElement('td');
    td.setAttribute('align', 'center');
    tr.appendChild(td);

    // === CREATE a ===
    let a = document.createElement('a');
    a.setAttribute('class', 'mt-3 w-10 btn btn-info');
    tr.appendChild(a);

    // === CREATE a1 ===
    let a1 = document.createElement('a');
    a1.setAttribute('class', 'mt-3 w-10 btn btn-danger');
    tr.appendChild(a1);
}






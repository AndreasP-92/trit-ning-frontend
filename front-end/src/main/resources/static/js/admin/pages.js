

//    ==================================================== GET ACTIVITY ================================================
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

    }).catch(async function(e){
        console.log(e);
    })

function gotActivityData(data){
    data.forEach(fillTbody)
}



//    ==================================================== FILL ACTIVITY TBODY =========================================
function fillTbody(item, index) {
    const tbody = document.querySelector('.tbody')
    console.log(item.id)
    console.log(index)

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
    a1.setAttribute("onclick", `deletePage(${item.id})`);
    a1.textContent = "slet";
    td.appendChild(a1);
}


function deletePage(id) {
    if (confirm("Vil du slette siden ?")) {
        // alert("test")
        const requestOptions = {
            'content-type': 'application/json',
            method: 'DELETE',
            redirect: 'follow'
        };
        const url = `http://localhost:5002/delete/activity/${id}`
        console.log(id)
        fetch(url,requestOptions)
            .then(res => res.json())
            .then(data => {
            })
            .catch(err => {
                window.location.href = "/admin/view/pages"

            });
    } else {
    }

}







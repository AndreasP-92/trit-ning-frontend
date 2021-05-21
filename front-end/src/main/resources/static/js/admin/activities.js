const thisForm = document.getElementById('formbody');
const topic = document.getElementById('topic');
const banner = document.getElementById('bannerImage');
const image = document.getElementById('image');
const editorCopy = document.getElementById('editorCopy');

//    ==================================================== GET ACTIVITY ================================================

thisForm.addEventListener('submit',function (e) {
    e.preventDefault();

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

        //Ved ikke om dette er nødvendigt -Daniel

        console.log("findes allerede")
        document.getElementById('alreadyExists').innerHTML = "Aktivitet Eksistere allerede";
    }).catch(async function(){
    console.log("Findes allerede")
    document.getElementById('alreadyExists').innerHTML = "Aktivitet eksiterer allerede";
    await insertActivity();
    })
    //Ved ikke om dette er nødvendigt -Daniel

function gotActivityData(data){
    data.forEach(fillTbody)
}
//    ==================================================== INSERT ACTIVITY =============================================

async function insertActivity(optionValues){
    // const filename = activity_pic.files[0].name;

    fetch('http://localhost:5002/insert/activity', {
        method: 'POST',
        body: JSON.stringify({

            'title'         : topic.value,
            'description'   : editorCopy.value,
            'banner'   : '/images/'+filename,
            'image'         : '/images/'+filename,

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
        console.log("AFTER INSERT=========",data.name)
        console.log(data)
        for(let i = 0; optionValues.length > i; i++){
            console.log("OPTIONS====",optionValues[i])
            insertDuration(optionValues[i], data.name)
        }
        thisForm.submit();
    }).catch(function (error) {
        console.warn('Something went wrong.', error);
    });
}


//    ==================================================== FILL ACTIVITY TBODY =========================================
function fillTbody(item, index) {
    const tbody = document.querySelector('.tbody')


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
    a1.textContent = "slet";
    td.appendChild(a1);
}})






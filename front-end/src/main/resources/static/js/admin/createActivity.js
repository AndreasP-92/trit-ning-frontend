const thisForm = document.getElementById('thisForm');
const topic = document.getElementById('topic');
const banner = document.getElementById('banner');
const img = document.getElementById('img');
const editorCopy = document.getElementById('editorCopy');
const myUrl = `http://localhost:5002/insert/activity`;

jQuery(document).ready(function($) {
    /** ******************************
     * Simple WYSIWYG
     ****************************** **/
    $('#editControls a').click(function(e) {
        e.preventDefault();
        switch($(this).data('role')) {
            case 'h1':
            case 'h2':
            case 'h3':
            case 'p':
                document.execCommand('formatBlock', false, $(this).data('role'));
                break;
            default:
                document.execCommand($(this).data('role'), false, null);
                break;
        }

        var textval = $("#editor").html();
        $("#editorCopy").val(textval);
    });

    $("#editor").keyup(function() {
        var value = $(this).html();
        $("#editorCopy").val(value);
    }).keyup();

    $('#checkIt').click(function(e) {
        e.preventDefault();
        alert($("#editorCopy").val());
    });
});


thisForm.addEventListener('submit',function (e) {
    e.preventDefault();

    async function insertActivity(){
        fetch('http://localhost:5002/insert/activity', {
            method: 'POST',
            body: JSON.stringify({

                'title'         : topic.value,
                'description'   : editorCopy.value,
                'banner'        : banner.files[0].name,
                'img'           : img.files[0].name,

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

    fetch(myUrl, requestOptions)
        .then(response => response.json())
        .then(data => {
            gotActivityData(data)
            console.log(data)

            console.log("findes allerede")
            document.getElementById('alreadyExists').innerHTML = "Aktivitet Eksistere allerede";
        }).catch(async function(){
        console.log("Findes allerede")
        document.getElementById('alreadyExists').innerHTML = "Aktivitet eksiterer allerede";
        await insertActivity();
    })
})
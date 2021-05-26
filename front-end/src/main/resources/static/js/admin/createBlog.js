const thisForm = document.getElementById('thisForm');
const author = document.getElementById('author');
const dateTime = document.getElementById('dateTime');
const image = document.getElementById('image');
const title = document.getElementById('title');;
const editor = document.getElementById('editor');

// ============== INSERT BLOG ==============

thisForm.addEventListener('submit',function (e) {
    e.preventDefault();

        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

        console.log(date)

        fetch('http://localhost:5002/insert/blog', {
            method: 'POST',
            body: JSON.stringify({
                'title': title.value,
                'description': editorCopy.value,
                'img': img.value,
                'datetime': date,
                'author': author.value,
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
            console.log("AFTER INSERT=========", data.title)
            console.log(data)

            thisForm.submit();
        }).catch(function (error) {
            console.warn('Something went wrong.', error);
        });


})

    const myUrl = 'http://localhost:5002/select/blogs'
    const requestOptions = {
        'Content-type': 'application/json;',
        method: 'GET',
        redirect: 'follow'
    };

    fetch(myUrl, requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data)

        })





jQuery(document).ready(function($) {
    /** ****************************
     * Simple WYSIWYG
     **************************** **/
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

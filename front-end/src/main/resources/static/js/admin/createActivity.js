const thisForm = document.getElementById('thisForm');
const title = document.getElementById('title');
const banner = document.getElementById('banner');
const img = document.getElementById('img');
const editorCopy = document.getElementById('editorCopy');

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

// alert("test")

const image         = document.getElementById("image");
const getImage      = document.getElementById("getImage");
const insertImage   = document.getElementById("insertImage");
const desc          = document.getElementById("desc");
const formData      = new FormData();

thisForm.addEventListener("submit", function(e){
    e.preventDefault();

    formData.append("imageFile", image.files[0]);

    console.log(formData.get("imageFile"))
    console.log(image.files[0]);

    const URL1 = "http://localhost:5002/image/upload"

    const requestOptions = {
        'content-type': 'multipart/form-data',
        method: 'POST',
        redirect: 'follow',
        body: formData

    };

    fetch(URL1, requestOptions)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (response) {
            console.log(response);
        });
})


getImage.addEventListener("click", function(e){
    // alert("test")

    const URL2 = "http://localhost:5002/image/get/02052021.jpg"

    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(URL2, requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.blob();
        })
        .then(data => {
            console.log(data)
            insertImage.src = URL.createObjectURL(data);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });

})






















//
// // This function accepts three arguments, the URL of the image to be
// // converted, the mime type of the Base64 image to be output, and a
// // callback function that will be called with the data URL as its argument
// // once processing is complete
//
// var convertToBase64 = function(url, imagetype, callback){
//
//     var img = document.createElement('IMG'),
//         canvas = document.createElement('CANVAS'),
//         ctx = canvas.getContext('2d'),
//         data = '';
//
//     // Set the crossOrigin property of the image element to 'Anonymous',
//     // allowing us to load images from other domains so long as that domain
//     // has cross-origin headers properly set
//
//     img.crossOrigin = 'Anonymous'
//
//     // Because image loading is asynchronous, we define an event listening function that will be called when the image has been loaded
//     img.onLoad = function(){
//         // When the image is loaded, this function is called with the image object as its context or 'this' value
//         canvas.height = this.height;
//         canvas.width = this.width;
//         ctx.drawImage(this, 0, 0);
//         data = canvas.toDataURL(imagetype);
//         callback(data);
//     };
//
//     // We set the source of the image tag to start loading its data. We define
//     // the event listener first, so that if the image has already been loaded
//     // on the page or is cached the event listener will still fire
//
//     img.src = url;
// };
//
// // Here we define the function that will send the request to the server.
// // It will accept the image name, and the base64 data as arguments
//
// var sendBase64ToServer = function(name, base64){
//     var httpPost = new XMLHttpRequest(),
//         path = "http://127.0.0.1:8000/uploadImage/" + name,
//         data = JSON.stringify({image: base64});
//     httpPost.onreadystatechange = function(err) {
//         if (httpPost.readyState == 4 && httpPost.status == 200){
//             console.log(httpPost.responseText);
//         } else {
//             console.log(err);
//         }
//     };
//     // Set the content type of the request to json since that's what's being sent
//     httpPost.setHeader('Content-Type', 'application/json');
//     httpPost.open("POST", path, true);
//     httpPost.send(data);
// };
//
// // This wrapper function will accept the name of the image, the url, and the
// // image type and perform the request
//
// var uploadImage = function(src, name, type){
//     convertToBase64(src, type, function(data){
//         sendBase64ToServer(name, data);
//     });
// };
//
// // Call the function with the provided values. The mime type could also be png
// // or webp
//
// uploadImage(imgsrc, name, 'image/jpeg')
//
// function postNewImageType(req, res, next){
//     var json = JSON.parse(req.body),
//         newImageTypeData = {
//             name: json.name,
//             image: "placeholder.png"
//         },
//         imageBuffer = decodeBase64Image(data),
//         newImageType = new ImageType(newImageTypeData);
//
//     //First we save the image to Mongo to get an id
//
//     newImageType.save(function(err){
//         if(err) return next(new restify.InvalidArgumentError(JSON.stringify(err.errors)));
//         var fileName = cfg.imageFolder + newImageType._id + '.jpeg';
//
//         fs.writeFile(fileName, imageBuffer.data, function(err){
//             //Handle error in next middleware function somehow
//             if (err) return next(err);
//             newImageType.set({image: 'filename.png'});
//             newImageType.save(function(err){
//                 if (err) return next(new restify.InvalidArgumentError(JSON.stringify(err.errors)));
//                 res.send(201, imagetype);
//             });
//         })
//     });
// }

//
// thisForm.addEventListener('submit',function (e) {
//     e.preventDefault();
//
//     async function insertActivity(){
//         fetch('http://localhost:5002/insert/activity', {
//             method: 'POST',
//             body: JSON.stringify({
//
//                 'title'         : title.value,
//                 'description'   : editorCopy.value,
//                 'banner'        : banner.files[0].name,
//                 'img'           : img.files[0].name,
//
//             }),
//             headers: {
//                 'Content-type': 'application/json'
//             }
//         }).then(function (response) {
//             if (response.ok) {
//                 return response.json();
//                 console.log(response)
//             }
//             return Promise.reject(response);
//         }).then(function (data) {
//             console.log("AFTER INSERT=========",data.title)
//             console.log(data)
//
//             window.location.href = "/adminindex"
//         }).catch(function (error) {
//             console.warn('Something went wrong.', error);
//         });
//     }
//
//     const myurl2 = `http://localhost:5002/select/activity/${title.value}`
//     const requestOptions2 = {
//         'content-type': 'application/json',
//         method: 'GET',
//         redirect: 'follow'
//     };
//
//     fetch(myurl2,requestOptions2)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data)
//
//             console.log("Findes allerede")
//             document.getElementById('alreadyExists').innerHTML = "Aktivitet Eksistere allerede";
//         }).catch(async function(e){
//             console.log(e)
//         await insertActivity();
//     })
// })
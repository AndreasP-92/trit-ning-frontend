// var feed = new Instafeed({
//     get: 'user',
//     userId: [user_id],
//     accessToken: '[IGQVJVVTVXeUc3OElSelUzOFFFMExubm1OSFBtd1Rra0dTeE5LRTg3Q21DTkZAidjc2SU9WNU1TTHFtS0NKelFzcFZAHZAkxTckp5ckxnbExnUWFKUlRKeksyd0tfWVZAmSE1VTzh2amxxRHpUcnVuMnZAwWAZDZD]',
//     resolution: 'low_resolution',
//     filter: function(image) {
//         return image.tags.indexOf('somehashtag') >= 0;
//     }
// });
// feed.run();
//
// let token = '19016646806f5a0e2c83af6ff3f21f8c', // learn how to obtain it below
//     userid = 1683199518554704, // User ID - get it in source HTML of your Instagram profile or look at the next example :)
//     num_photos = 4; // how much photos do you want to get
//
// $.ajax({
//     url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent', // or /users/self/media/recent for Sandbox
//     dataType: 'jsonp',
//     type: 'GET',
//     data: {access_token: token, count: num_photos},
//     success: function(data){
//         console.log(data);
//         for( x in data.data ){
//             $('ul').append('<li><img src="'+data.data[x].images.low_resolution.url+'"></li>'); // data.data[x].images.low_resolution.url - URL of image, 306х306
//             // data.data[x].images.thumbnail.url - URL of image 150х150
//             // data.data[x].images.standard_resolution.url - URL of image 612х612
//             // data.data[x].link - Instagram post URL
//         }
//     },
//     error: function(data){
//         console.log(data); // send the error notifications to console
//     }
// });


let token = '19016646806f5a0e2c83af6ff3f21f8c',
    username = 'tritraeningdk', // rudrastyh - my username :)
    num_photos = 4;

$.ajax({ // the first ajax request returns the ID of user rudrastyh
    url: 'https://api.instagram.com/v1/users/search',
    dataType: 'jsonp',
    type: 'GET',
    data: {access_token: token, q: username}, // actually it is just the search by username
    success: function(data){
        console.log(data);
        $.ajax({
            url: 'https://api.instagram.com/v1/users/' + data.data[0].id + '/media/recent', // specify the ID of the first found user
            dataType: 'jsonp',
            type: 'GET',
            data: {access_token: token, count: num_photos},
            success: function(data2){
                console.log(data2);
                for(x in data2.data){
                    $('ul').append('<li><img src="'+data2.data[x].images.thumbnail.url+'"></li>');
                }
            },
            error: function(data2){
                console.log(data2);
            }
        });
    },
    error: function(data){
        console.log(data);
    }
});
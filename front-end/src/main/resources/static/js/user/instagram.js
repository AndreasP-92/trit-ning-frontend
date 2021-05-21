var feed = new Instafeed({
    get: 'user',
    userId: [user_id],
    accessToken: '[IGQVJVVTVXeUc3OElSelUzOFFFMExubm1OSFBtd1Rra0dTeE5LRTg3Q21DTkZAidjc2SU9WNU1TTHFtS0NKelFzcFZAHZAkxTckp5ckxnbExnUWFKUlRKeksyd0tfWVZAmSE1VTzh2amxxRHpUcnVuMnZAwWAZDZD]',
    resolution: 'low_resolution',
    filter: function(image) {
        return image.tags.indexOf('somehashtag') >= 0;
    }
});
feed.run();
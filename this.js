// //method -> obj
// //function -> global (window, global)

// const video = {
//     title: 'a',
//     play() {
//         console.log(this);
//     }
// };

// // video.stop = function() {
// //     console.log(this);
// // };

// function playVideo() {
//     console.log(this);
// };

// function Video(title) {
//     this.title = title;
//     console.log(this);
// }


// //video.stop();
// //playVideo();

// const v = new Video('abc');


const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }, this);
    }
};

video.showTags();
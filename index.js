/*
Returns an array with all the posts data.
    Array at [0] is the Footer data
    Array at [1] is the Our Partners data
    Array at [2] is the Contact us data
    Array at [3] is the Head data
    Array at [4] is the Video data
    Array at [5] is the Why Capy data
    Array at [6] is the Become a mentor data
    Array at [7] is the Quiz data
*/

const url = 'https://capibility.com/headless/wp-json/wp/v2/posts';

fetch(url)
.then(res => res.json())
.then(json => {
    console.log(json)
    createLandingPage(json[3]);
})

function createLandingPage(data) {
    console.log(data.content.rendered);
}
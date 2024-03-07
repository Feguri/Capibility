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

async function fetchFavourites(url){
    const repsonse = await fetch(url);
    const data = await repsonse.json();
    displayData(data);
  }

  //call function to fetch data
  fetchFavourites(url);

function displayData(data){
  // const links = data[]
  const title = data[0].title.rendered;
  document.getElementById('title').innerHTML = title;
  console.log(title);
}
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

function separateHTMLElements(htmlString) {
  const doc = new DOMParser().parseFromString(htmlString, 'text/html');
  const elements = Array.from(doc.body.childNodes)
      .map(node => node.outerHTML)
      .filter(html => html !== undefined);
  return elements;
}

const title = document.getElementById('title');
const intro = document.getElementById('intro');
function displayData(data){
  // const links = data[]
  const contentElements = data[0].content.rendered;
  const contentElementsArray = separateHTMLElements(contentElements);

  const introSentence = contentElementsArray[1];
  const titleSentence = data[0].title.rendered;
  title.innerHTML = titleSentence;
  intro.innerHTML = introSentence;
  console.log(title, contentElementsArray, contentElements);
}
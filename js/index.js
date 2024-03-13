/*
Returns an array with all the posts data.
    Array at [0] is the landing page
*/

const url = 'https://capibility.com/headless/wp-json/wp/v2/posts';

async function fetchFavourites(url){
    const repsonse = await fetch(url);
    const data = await repsonse.json();
    displayData(data);
}
 
//call function to fetch data
fetchFavourites(url);

// a function that separates stringified HTML elements into an array.
function separateHTMLElements(htmlString) {
  const doc = new DOMParser().parseFromString(htmlString, 'text/html');
  const elements = Array.from(doc.body.childNodes)
      .map(node => node.outerHTML)
      .filter(html => html !== undefined);
  return elements;
}

// function to add a class or id or any attribute to a stringified HTML element using regex.
function addAttribute(attributeType, attributeValue, htmlElement) {
  const regex = /<(\w+)([^>]*)>/;
  const match = htmlElement.match(regex);

  if (match) {
      const tagName = match[1];
      const attributes = match[2];

      const updatedElement = `<${tagName} ${attributes.trim()} ${attributeType}="${attributeValue}">`;
      return htmlElement.replace(regex, updatedElement);
  }

  return htmlElement;
}

const title = document.getElementById('title');
const intro = document.getElementById('intro');
const signUp = document.getElementById('sign-up')
function displayData(data){
  // const links = data[]
  const contentElements = data[0].content.rendered;
  const contentElementsArray = separateHTMLElements(contentElements);

  const introSentence = contentElementsArray[1];
  const signUpSentence = addAttribute('class', 'sign-up', contentElementsArray[2]) ;
  const titleSentence = data[0].title.rendered;
  title.innerHTML = titleSentence;
  intro.innerHTML = introSentence;
  signUp.innerHTML = signUpSentence;
  console.log(title, contentElementsArray, contentElements);
}
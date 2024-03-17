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

function extractText(htmlString) {
  const tempElement = document.createElement('div');
  tempElement.innerHTML = htmlString.trim();
  return tempElement.textContent || tempElement.innerText || '';
}

const title = document.getElementById('title');
const intro = document.getElementById('intro');
const signUp = document.getElementById('sign-up');
const linksDesktop = document.getElementById('links-desktop');
const linksMobile = document.getElementById('links-mobile');
const section2Title = document.getElementById('section-2-title');
const section2Text = document.getElementById('section-2-text')
function displayData(data){
  
  // const links = data[]
  const contentElements = data[1].content.rendered;
  const contentElementsArray = separateHTMLElements(contentElements);
  console.log(data[1].title);
  const linksDesktopSentence = addAttribute('class', 'desktop-ul', contentElementsArray[0]);
  const linksMobileSentence = addAttribute('id', 'mobile-nav', contentElementsArray[0]);
  console.log(linksDesktopSentence);
  const introSentence = contentElementsArray[1];
  const signUpSentence = addAttribute('class', 'sign-up', contentElementsArray[2]);
  const titleSentence = data[1].title.rendered;

  const section2TitleSentence = extractText(contentElementsArray[3]);
  const section2TextSentence = extractText(contentElementsArray[4]);
  title.innerHTML = titleSentence;
  intro.innerHTML = introSentence;
  signUp.innerHTML = signUpSentence;
  linksDesktop.innerHTML = linksDesktopSentence;
  linksMobile.innerHTML = linksMobileSentence;
  section2Title.innerHTML = section2TitleSentence;
  section2Text.innerHTML = section2TextSentence;
}
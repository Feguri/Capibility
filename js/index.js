/* pseudo code
 - fetch the JSON 'posts/' from Wordpress
 
 - querySelectorAll('section') to get id's
  - loop through the sections inserting the post content based section id and post slug
*/

const postsEndpoint = 'https://capibility.com/headless/wp-json/wp/v2/posts?per_page=100';

// fetch the JSON from Wordpress
async function fetchPosts(url){
  const repsonse = await fetch(url);
  const data = await repsonse.json();
  displayContent(data);
}

// call the fetchPosts function
fetchPosts(postsEndpoint);

let sections = document.querySelectorAll('section');

function displayContent(data){
  console.log(data);
  sections.forEach((section,index) => {
    console.log(data[index].slug);

    let postContent = data.filter(post => post.slug == section.id);
    //console.log(content);
      let h2 = document.createElement('h2');
      h2.innerHTML = postContent[0].title.rendered;

      let article = document.createElement('article');
      article.innerHTML = postContent[0].content.rendered;
      section.appendChild(h2);
      section.appendChild(article);
  });
}

function toggleMenu() {
    var nav = document.getElementById("nav-links");
    if (nav.style.display === "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
}


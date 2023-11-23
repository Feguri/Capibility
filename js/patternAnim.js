// an animation that makes the background pattern go up on scroll down and down on scroll up!

const pattern1 = document.getElementById('pattern');
const pattern2 = document.getElementById('pattern2');
let scrollProgress = 0;
let previousScrollY = window.scrollY;
let isScrolling;
let seed = 300;
// change 'progressSpeed' for a faster or slower animation of the background patterns
const progresSpeed = 3;

// makes the animation not so fast
function debounce(callback, delay) {
    clearTimeout(isScrolling);
    isScrolling = setTimeout(function () {
        callback();
    }, delay);
}

window.addEventListener('scroll', function () {
    
    debounce(function () {
        // Check the scroll direction
        const currentScrollY = window.scrollY;
        if (currentScrollY > previousScrollY) {
            // Scrolling down
            scrollProgress += progresSpeed;
        } else if (currentScrollY < previousScrollY) {
            // Scrolling up
            scrollProgress -= progresSpeed;
        }

        // Update the previous scroll position
        previousScrollY = currentScrollY;

        // Calculate the background position based on scroll progress
        let product = -seed - scrollProgress;
        pattern1.style.backgroundPositionY = `${product}px`;
        pattern2.style.backgroundPositionY = `${product}px`;
    }, 5); // Adjust the delay (in milliseconds) to control the rate of updates
});

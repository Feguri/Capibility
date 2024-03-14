const header = document.getElementById('mobile-header');
const hamburguer = document.getElementById('ham');

const introText = document.getElementById('intro');
const signUpText = document.getElementById('sign-up');

let rolledDown = false;

hamburguer.addEventListener('click', changeState);
function changeState() {
    if (rolledDown){
        hamburguer.src = 'img/hambaggar.png';
        try {
            header.classList.remove('roll-down');
        } catch(err) {

        }
        header.classList.add('roll-up');

        introText.style.display = 'block';
        signUpText.style.display = 'block';
        rolledDown = false;
    } else {
        hamburguer.src = 'img/x.png';
        rolledDown = true;
        try {
            header.classList.remove('roll-up');
        } catch(err) {
            
        }
        header.classList.add('roll-down');
        introText.style.display = 'none';
        signUpText.style.display = 'none';
    }
}

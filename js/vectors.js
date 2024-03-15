const vectorBtns = document.getElementsByClassName('vector-btn');
for (let vectorBtn of vectorBtns){
    vectorBtn.addEventListener('click', function() {
        console.log('vecor!');
    })
}
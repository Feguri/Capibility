const vectorBtns = document.getElementsByClassName('vector-btn');
for (let vectorBtn of vectorBtns){
    vectorBtn.style.transform = 'rotate(180deg)';
    let text = document.getElementById(`p${vectorBtn.id}`)
    text.style.display ='none';

    vectorBtn.addEventListener('click', function() {

        if(vectorBtn.style.transform === 'rotate(0deg)'){
            vectorBtn.style.transform = 'rotate(180deg)';
            text.style.display ='none';
        } else {
            vectorBtn.style.transform = 'rotate(0deg)';
            text.style.display ='block';
        }

    })
}
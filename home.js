// On peut ajouter un petit hover ou shake si le bouton est touché
const btn = document.querySelector('.btn');
btn.addEventListener('mouseover', ()=>{
    btn.style.transform = 'scale(1.05)';
});
btn.addEventListener('mouseout', ()=>{
    btn.style.transform = 'scale(1)';
});

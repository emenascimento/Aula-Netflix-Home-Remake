const dropdownBtn = document.querySelector('.dp-button');
const dropdownItens = document.querySelector(".dp-itens");

dropdownBtn.addEventListener('click', () =>{
    dropdownItens.classList.toggle('hide');
})

window.addEventListener('click', (e) =>  {
    if (e.target !== dropdownBtn){
        dropdownItens.classList.add('hide');
    }

})
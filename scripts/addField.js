// Procurar o botao
document.querySelector("#add-time")
// Quando clicar no botao
    .addEventListener('click', cloneField);

// Executar uma acao
function cloneField() {
    // Duplicar os campos. Que campos?
    const newFieldConstainer = document.querySelector('.schedule-item').cloneNode(true);

    // pegar os campos: quais campos?
    const fields = newFieldConstainer.querySelectorAll('input');
    
    // para cada campo, limpar
    fields.forEach(function(field) {
        // pegar o field do momento
        field.value= ""
    })


    // Colocar na pagina: onde?
    document.querySelector('#schedule-items').appendChild(newFieldConstainer);

}
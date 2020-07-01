
function populateUFs()
{
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/distritos")
    .then( res => res.json() )
    .then( states => {
        for( const state of states )
        {
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    })

}

populateUFs()


document.querySelector("select[name=uf]")
document.addEventListener("change", () => {
    console.log("mudei")
})
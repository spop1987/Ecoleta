
function populateUFs()
{
    const ufSelect = document.querySelector("select[name=uf]")
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/distritos").then(
        (res) => { return res.json() }
    ).then( states => {
        
    })

}




document.querySelector("select[name=uf]")
document.addEventListener("change", () => {
    
})
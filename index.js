// ativação do botão
document.querySelector(".botao").addEventListener('click', ()=>{
    gerandoConselho();
})

//Função de Verificação de ID do consenho
async function verificacaoDoId() {
    const url = "https://api.adviceslip.com/advice"
    const resposta = await fetch(url)
    const json = await resposta.json()
    let id = await (json.slip.id)
    return await id
}
verificacaoDoId();

// Função de verificação de texto para o conselho
async function textoDoConselho() {
    const url = "https://api.adviceslip.com/advice"
    const resposta = await fetch(url)
    const json = await resposta.json()
    let texto = await (json.slip.advice)
    return await texto
    console.log(texto)
}textoDoConselho()


// Extração das informações do conselhos
async function gerandoConselho(){
   const idConselho = await verificacaoDoId();
   const textoConselho = await textoDoConselho()
   console.log(idConselho)
   console.log(textoConselho)

   //encaminhaminhamento das informações da API para o HTML
   document.querySelector(".titulo").innerHTML = "CONSELHO #" +idConselho
   document.querySelector(".texto").innerHTML = textoConselho;
   
}gerandoConselho()

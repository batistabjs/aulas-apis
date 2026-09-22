let cepDaVez = null
 
await fetch("https://viacep.com.br/ws/89201000/json/")
  .then((resposta) => resposta.json())
  .then((dados) => {
    cepDaVez = dados
  })
  .catch((erro) => console.error("Erro na requisição:", erro));

console.log(cepDaVez); 
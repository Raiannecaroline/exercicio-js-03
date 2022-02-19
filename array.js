let quantidadeUsuarios = parseInt(prompt('Quantos usuários deseja cadastrar?'))
// console.log(`${usuarios} usuários cadastrados!`)

let yUsuarios = []

for (y = 1; y <= quantidadeUsuarios; y++) {
  let usuarios = {
    nome: '',
    cidade: '',
    idade: 0,
    hobbie: 0
  }

  usuarios.nome = prompt(`Digite o seu nome: ${y}`)
  usuarios.cidade = prompt(`Digite a sua cidade: ${y}`)
  usuarios.idade = prompt(`Digite a sua idade: ${y}`)
  usuarios.hobbie = prompt(`Digite um hobbie seu: ${y}`)

  yUsuarios.push(usuarios)
}

console.log(yUsuarios)

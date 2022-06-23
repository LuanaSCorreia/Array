let mensagem = ["hmmmm olha a comidinha veg"]
alert(mensagem)

let comida = ['Tofu', 'Strogonoff', 'Falafel', 'Lasanha', 'Hambúrguer'  ]
console.log(comida)

comida.unshift('Batata frita')
console.log(comida)

comida.pop()
console.log(comida)

comida.splice(5,0, 'Pizza', 'Tabule')
console.log(comida)

comida.splice(0, 1)
console.log(comida)

let numbers = [7,5,6,3,8,9,2,1,4]
numbers.sort(function(a,b){
  return a-b
})
console.log(numbers)

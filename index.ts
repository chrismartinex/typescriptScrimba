//assign type to variables in Ts
// you declare the variable and then colon and do number, string, boolean etc

// let age: number = 100
// let firstName: string = 'Angela'
// let busy: boolean = true

const button = document.querySelector('.button')
const firstInput = document.querySelector('#first-input') as HTMLInputElement
const secondInput = document.querySelector('#second-input') as HTMLInputElement
export const screen = document.querySelector('.screen')
 
function addNumbers(a: number, b: number) {
     screen.innerHTML = (a + b).toString()     
}
 
button.addEventListener('click', () => 
addNumbers(parseInt(firstInput.value), parseInt(secondInput.value)))

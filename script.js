class Calculator {
    constructor(number){
        this.Calcul = number;
        this.num1 = `num1-${this.Calcul}`;
        this.num2 = `num2-${this.Calcul}`;
        this.operator = `operator-${this.Calcul}`;
        this.resolve = `resolve-${this.Calcul}`;
    }
    
    createElement = () => {
        let div = document.createElement('div')
        div.classList.add('container')
        document.body.prepend(div)

        let inp = document.createElement('input')
        inp.setAttribute('type', 'text')
        inp.id = this.num1
        inp.value = '0'
        inp.style.color = 'white'
        inp.style.backgroundColor = 'orange'
        inp.style.backgroundColor = 'orange'
        inp.style.borderRadius = '10px'
        inp.style.border = 'none'
        inp.style.padding = '10px'
        div.append(inp)

        let inp2 = document.createElement('input')
        inp2.setAttribute('type', 'text')
        inp2.id = this.operator
        inp2.value = '+'
        inp2.style.backgroundColor = 'white'
        inp2.style.borderRadius = '10px'
        inp2.style.border = 'none'
        inp2.style.padding = '10px'
        div.append(inp2)

        let inp3 = document.createElement('input')
        inp3.setAttribute('type', 'text')
        inp3.id = this.num2
        inp3.value = '0'
        inp3.style.color = 'white'
        inp3.style.backgroundColor = 'orange'
        inp3.style.borderRadius = '10px'
        inp3.style.border = 'none'
        inp3.style.padding = '10px'
        div.append(inp3)

        let btn = document.createElement('button')
        btn.innerHTML = 'result'
        btn.addEventListener('click', this.result)
        btn.style.color = 'black'
        btn.style.border = 'none'
        btn.style.borderRadius = '10px'
        btn.style.padding = '10px'
        btn.style.backgroundColor = 'white'
        div.append(btn)

        let resolve = document.createElement('span')
        resolve.id = this.resolve
        resolve.style.color = 'white'
        resolve.style.fontWeight = 'bold'
        div.append(resolve) 
    }

    result = () => {
        let number1 = document.getElementById(this.num1)
        let operator = document.getElementById(this.operator)
        let number2 = document.getElementById(this.num2)
        let resolve = document.getElementById(this.resolve)

        if(operator.value === '+') {
          resolve.innerHTML = parseInt(number1.value) + parseInt(number2.value);
        } else if(operator.value === '-') {
          resolve.innerHTML = parseInt(number1.value) - parseInt(number2.value);
        } else if (operator.value === '*') {
          resolve.innerHTML = parseInt(number1.value) * parseInt(number2.value);
        } else if (operator.value === '/') {
          resolve.innerHTML = parseInt(number1.value) / parseInt(number2.value);
        } else {
          return;
        }
}
}

const calc = new Calculator(1)
calc.createElement()

function appendToDisplay(value) {  
    document.getElementById('display').value += value;  
}  

function clearDisplay() {  
    document.getElementById('display').value = '';  
}  

function calculateResult() {  
    let expression = document.getElementById('display').value;  
    try {  
        // Substituir 'mod' por '%' para usar na avaliação  
        expression = expression.replace(/mod/g, '%');  
        // Avaliar a expressão  
        const result = eval(expression);  
        document.getElementById('display').value = result;  
    } catch (error) {  
        document.getElementById('display').value = 'Erro';  
    }  
}
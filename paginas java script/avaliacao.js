<script>  
function calcular() {  
    const num1 = parseFloat(document.getElementById("num1").value);  
    const num2 = parseFloat(document.getElementById("num2").value);  
    const tbody = document.getElementById("tabelaResultados").getElementsByTagName('tbody')[0];  
    tbody.innerHTML = "";   

    
    let tr = tbody.insertRow();  
    tr.insertCell().textContent = `${num1} + ${num2}`;  
    tr.insertCell().textContent = num1 + num2;  

      
    tr = tbody.insertRow();  
    tr.insertCell().textContent = `${num1} - ${num2}`;  
    tr.insertCell().textContent = num1 - num2;  

  
    tr = tbody.insertRow();  
    tr.insertCell().textContent = `${num1} * ${num2}`;  
    tr.insertCell().textContent = num1 * num2;  

    tr = tbody.insertRow();  
    tr.insertCell().textContent = `${num1} / ${num2}`;  
    tr.insertCell().textContent = num2 !== 0 ? (num1 / num2) : "Erro: Divisão por zero";  
} 

</script>  


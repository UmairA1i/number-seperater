function separateNumbers() {
    let input = document.getElementById("numbers").value;
    let numbers = input.split(",");
    
    let evenNumbers = [];
    let oddNumbers = [];
    
    for(let i = 0; i < numbers.length; i++) {
        let num = Number(numbers[i]);
        if(num % 2 === 0) {
            evenNumbers.push(num);
        } else {
            oddNumbers.push(num);
        }
    }
    
    document.getElementById("even").innerHTML = evenNumbers.join(", ");
    document.getElementById("odd").innerHTML = oddNumbers.join(", ");
}
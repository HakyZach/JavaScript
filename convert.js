const E = document.querySelector("#E");
const G = document.querySelector("#G");
const J = document.querySelector("#J");
const output = document.querySelector("#output");

//function for euros
E.onclick = () => {
    
    //prompt user for amount
    let value = prompt("Please enter a dollar value in USD. (don't include the $)");

    //convert dollars to Euros
    let result = Number(value) * 0.92415;
    result = result.toFixed(2);

    //display the result
    output.textContent = `${value} USD is equal to ${result} EUR`

}

//function for pounds
G.onclick = () => {
    
    //prompt user for amount
    let value = prompt("Please enter a dollar value in USD. (don't include the $)");

    //convert dollars to Pounds
    let result = Number(value) * 0.78917;
    result = result.toFixed(2);

    //display the result
    output.textContent = `${value} USD is equal to ${result} GBP`

}

//function for yen
J.onclick = () => {
    
    //prompt user for amount
    let value = prompt("Please enter a dollar value in USD. (don't include the $)");

    //convert dollars to Yen
    let result = Number(value) * 150.52;
    result = Math.round(result);

    //display the result
    output.textContent = `${value} USD is equal to ${result} JPY`

}
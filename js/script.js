
const firstName = prompt("nome");
const lastName = prompt("cognome");
const color = prompt("colore preferito")

console.log(firstName);
console.log(lastName);
console.log(color);

const output =
`
    <ul>
    <li>Nome:<strong> ${firstName}</strong></li>
    <li>Cognome:<strong> ${lastName}</strong></li>
    <li>Colore preferito:<strong>${color}</strong></li>
    </ul>

`;
console.log(output);

document.getElementById("list").innerHTML = output;
document.getElementById("nome-completo").innerHTML = firstName  +"  "+ lastName +"  "+ color+"22";
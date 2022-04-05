
const firstName = prompt("nome");
const lastName = prompt("cognome");
const color = prompt("colore preferito")

console.log(firstName);
console.log(lastName);
console.log(color);

const output =
`
    <ul>
    <li>Nome: ${firstName}</li>
    <li>Cognome: ${lastName}</li>
    <li>Colore preferito: ${color}</li>
    </ul>

`;
console.log(output);

document.getElementById("list").innerHTML = output;
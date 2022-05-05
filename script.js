// ciclo for per stampare numeri da 1 a 100, sostituendo fizz, buzz e fizzbuzz
const container = document.querySelector("main.main");

for (let i = 1; i <= 100; i++) {
    if ((i%3===0) && (i%5===0)) {
        const element = `<div class="boh">FizzBuzz</div>`;
        container.innerHTML += element;
    } else if (i%3===0) {
        const element = `<div class="boh">Fizz</div>`;
        container.innerHTML += element;
    } else if (i%5===0) {
        const element = `<div class="boh">Buzz</div>`;
        container.innerHTML += element;
    } else {
        const element = `<div class="boh">${i}</div>`;
        container.innerHTML += element;
    }
}
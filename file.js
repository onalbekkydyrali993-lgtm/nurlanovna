// 1. Қосу функциясы
function add(a, b) {
    return a + b;
}

// 2. Азайту функциясы
function subtract(a, b) {
    return a - b;
}

// 3. Көбейту функциясы
function multiply(a, b) {
    return a * b;
}

// 4. Бөлу функциясы (нөлге бөлуді тексерумен)
function divide(a, b) {
    if (b === 0) {
        throw new Error("Қате: Нөлге бөлуге болмайды!");
    }
    return a / b;
}

// --- Нәтижені тексеру мысалы ---
const x = 25;
const y = 18;

console.log("Қосу:", add(x, y));           // 16
console.log("Азайту:", subtract(x, y));     // 8
console.log("Көбейту:", multiply(x, y));   // 48
console.log("Бөлу:", divide(x, y));         // 3

// Нөлге бөлуді қауіпсіз тексеру
try {
    console.log("Бөлу (нөлге):", divide(x, 0));
} catch (error) {
    console.error(error.message); // Қате: Нөлге бөлуге болмайды!
}
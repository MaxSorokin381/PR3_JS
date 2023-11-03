const firstRow = "мама мыла раму";
const secondRow = "собака друг человека";

// Функція для підрахунку кількості букв "а" у стрічці
function countLetterA(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === 'а') {
            count++;
        }
    }
    return count;
}

// Функція порівняння та повернення рядка з більшою кількістю букв "а"
function getRow(firstRow, secondRow) {
    const countAInFirst = countLetterA(firstRow);
    const countAInSecond = countLetterA(secondRow);

    if (countAInFirst > countAInSecond) {
        return firstRow;
    } else if (countAInSecond > countAInFirst) {
        return secondRow;
    } else {
        return "Кількість букв 'а' в обох рядках однакова.";
    }
}

// Функція для форматування номера телефону
function formattedPhone(phone) {
    if (phone && phone.length === 12) {
        const countryCode = "+7";
        const regionCode = phone.substring(2, 5);
        const firstPart = phone.substring(5, 8);
        const secondPart = phone.substring(8, 10);
        const thirdPart = phone.substring(10, 12);

        const formatted = `${countryCode} (${regionCode}) ${firstPart}-${secondPart}-${thirdPart}`;
        return formatted;
    } else {
        return "Неправильний формат номеру телефону";
    }
}

console.log(getRow(firstRow, secondRow));
console.log(formattedPhone("+71234567890")); // +7 (123) 456-78-90
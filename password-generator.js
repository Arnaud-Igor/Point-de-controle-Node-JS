const generator = require("generate-password");

const password = generator.generateMultiple(10,{
    length: 20,
    numbers: true,
    uppercase: false,
});

function randomPassword(passwordTable) {
    for (let i = 0; i < passwordTable.length; i++) {
        const pw = passwordTable[i];
        console.log(pw);
    }
}

randomPassword(password)

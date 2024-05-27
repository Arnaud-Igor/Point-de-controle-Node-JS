const fs = require("node:fs");

fs.writeFile("welcome.txt", "Hello node", "utf-8", (err) => {
    if (err) throw err;

    console.log("Le fichier a bien été créé");
});

fs.readFile("welcome.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
});

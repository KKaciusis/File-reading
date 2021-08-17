const fs = require("fs/promises");

async function main() {
    let files = ["a.txt", "b.txt", "c.txt"];

    let allData = "";
    for (const file of files) {
        try{
        allData += await fs.readFile(file);
        } catch (ERROR){
            allData += `\n[${file} unread file]\n`;
        }
    }
    console.log(allData);
}
main();
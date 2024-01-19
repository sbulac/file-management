require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});
console.log(process.env.NODE_ENV);

const fs = require("fs/promises");

// const file = fs.readFileSync("./hola.txt", { encoding: "utf8", flag: "r" });

// let newData = file.split(" ").join().split("\n").join();
// fs.writeFileSync("./hola.txt", newData);

async function readFileAsync(path) {
  try {
    const file = await fs.readFile(path, { encoding: "utf-8", flag: "r" });
    console.log(file);
  } catch (error) {
    console.error(error);
  }
}

readFileAsync("./hola.txt")
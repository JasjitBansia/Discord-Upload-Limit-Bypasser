const { Catbox } = require("catbox.moe");
const inquirer = require("inquirer");
let catbox = new Catbox();
let prompt = inquirer.createPromptModule();
let uploaded = false;

setInterval(() => {}, 1000);
async function acceptPath() {
  let path = await prompt({
    name: "path",
    type: "input",
    message: "Enter file path: ",
  });
  path.path = path.path.trim();
  if (path.path.startsWith(`"`) && path.path.endsWith(`"`)) {
    path.path = path.path.substring(1, path.path.length - 1);
  }
  if (path.path.includes(" ")) {
    console.log("Path cannot contain spaces");
    acceptPath();
  } else {
    main(path.path);
  }
}
async function main(path) {
  console.log("Uploading...");
  setTimeout(() => {
    if (uploaded === false) {
      console.log(
        "Either your internet is slow or an error occured (upload limit is under 200 mb)"
      );
    }
  }, 120000);
  const response = await catbox.upload(path);
  uploaded = true;
  if (response.startsWith("https://files.catbox.moe")) {
    console.log(`Here's your url https://embeds.video/${response}`);
  } else {
    console.log(response);
    acceptPath();
  }
}
acceptPath();

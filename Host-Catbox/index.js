const { validatePath } = require("../Functions/pathValidation.js");
const { Catbox } = require("catbox.moe");
let catbox = new Catbox();
setInterval(() => {}, 1000);
async function main() {
  let validatedPath = await validatePath();
  console.log("Uploading...");
  const response = await catbox.upload(validatedPath);
  if (response.startsWith("https://files.catbox.moe")) {
    console.log(`Here's your url: [video](https://embeds.video/${response})`);
  } else {
    console.log(response);
    main();
  }
}
main();

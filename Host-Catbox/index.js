const { copyURL } = require("../Functions/copyURL.js");
const { validatePath } = require("../Functions/pathValidation.js");
const { Catbox } = require("catbox.moe");
let catbox = new Catbox();
setInterval(() => {}, 1000);
async function main() {
  let validatedPath = await validatePath();
  console.log("Uploading...");
  const response = await catbox.upload(validatedPath);
  if (response.startsWith("https://files.catbox.moe")) {
    let text = `[video](https://embeds.video/${response})`;
    copyURL(text);
    console.log(`Here's your url (copied): ${text}`);
  } else {
    console.log(response);
    main();
  }
}
main();

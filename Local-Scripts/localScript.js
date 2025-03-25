const { validatePath } = require("../Functions/pathValidation.js");
const { exec } = require("child_process");
const { copyURL } = require("../Functions/copyURL.js");
const { unlink } = require("fs/promises");
setInterval(() => {}, 1000);
async function main() {
  let validatedPath = await validatePath();
  console.log("Uploading...");
  exec(`curl -F file=@${validatedPath} https://0x0.st`, (err, res) => {
    if (err) {
      console.log(err);
    }
    if (res.startsWith("https://0x0.st/")) {
      let text = `[video](https://embeds.video/${res.trim()})`;
      copyURL(text);
      console.log(`Here's your url (copied): ${text}`);
      if (!validatedPath.includes("KEEP")) {
        unlink(validatedPath);
        console.log("File deleted");
      }
    } else {
      main();
    }
  });
}
main();

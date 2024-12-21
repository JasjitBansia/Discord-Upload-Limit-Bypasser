const { validatePath } = require("../Functions/pathValidation.js");
const { exec } = require("child_process");
const { copyURL } = require("../Functions/copyURL.js");
setInterval(() => {}, 1000);
async function main() {
  let validatedPath = await validatePath();
  console.log("Uploading...");
  exec(
    `curl.exe -i -F files[]=@${validatedPath} https://up1.fileditch.com/upload.php`,
    (err, res) => {
      if (res) {
        let json = JSON.parse(res.substring(res.indexOf("{")));
        if (json.success === true) {
          let text = `[video](https://embeds.video/${json.files[0].url})`;
          copyURL(text);
          console.log(`Here's your url (copied): ${text}`);
        }
      } else {
        main();
      }
    }
  );
}
main();

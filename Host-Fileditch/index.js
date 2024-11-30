const { validatePath } = require("../Functions/pathValidation.js");
const { exec } = require("child_process");
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
          console.log(
            `Here's your url: [video](https://embeds.video/${json.files[0].url})`
          );
        }
      } else {
        main();
      }
    }
  );
}
main();

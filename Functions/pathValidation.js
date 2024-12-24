const inquirer = require("inquirer");
let prompt = inquirer.createPromptModule();

module.exports = {
  async validatePath() {
    while (true) {
      let inquirer = await prompt({
        name: "path",
        type: "input",
        message: "Enter file path: ",
      });
      let path = inquirer.path.trim();
      if (path.startsWith(`"`) && path.endsWith(`"`)) {
        path = path.substring(1, path.length - 1);
      }
      if (path.includes(" ")) {
        console.log("Path cannot contain spaces");
      } else {
        return path;
      }
    }
  },
};

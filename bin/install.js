#!/usr/bin/env node

const chalk = require("chalk");
const findWorkspaceRoot = require("find-yarn-workspace-root");
const fs = require("fs");
const path = require("path");
const prettier = require("prettier");

const main = async () => {
  // Read main package.json
  const workspaceRoot = findWorkspaceRoot(__dirname) || process.cwd() || "";
  const packageJsonPath = path.join(workspaceRoot, "package.json");
  const file = fs.readFileSync(packageJsonPath, "utf8");
  const packageJson = JSON.parse(file);

  // Create babel.config.js if none exists.
  try {
    fs.writeFileSync(
      path.join(workspaceRoot, "babel.config.js"),
      prettier.format(
        `
        // FILE AUTOGENERATED BY @zoopoetics/myna
        // This is for the benefit of Jest. Individual packages should
        // each have their own babel.config.js, and not inherit from this.
        module.exports = require("@zoopoetics/myna/config/jest/babel.config.js");
        `,
        {
          parser: "babel"
        }
      ),
      {
        // https://nodejs.org/api/fs.html#fs_file_system_flags
        // "wx" means write, but fail if the file already exists
        flag: "wx"
      }
    );
  } catch (error) {
    // File already exists, do nothing
  }

  // Create Typescript config if none exists
  try {
    fs.writeFileSync(
      path.join(workspaceRoot, "tsconfig.json"),
      prettier.format(
        `
          {
            "extends": "@zoopoetics/myna/config/tsconfig",
            "compilerOptions": {
              "strict": false
            },
            "include": ["**/*"],
          }
        `,
        {
          parser: "json-stringify"
        }
      ),
      {
        // https://nodejs.org/api/fs.html#fs_file_system_flags
        // "wx" means write, but fail if the file already exists
        flag: "wx"
      }
    );
  } catch (error) {
    // File already exists, do nothing
  }

  // Add scripts
  const output = { ...packageJson };
  const { scripts = {} } = output;
  const { ci, lint, prettify, test, typecheck } = scripts;
  if (!ci) {
    output.scripts["ci"] = "myna ci";
  }
  if (!lint) {
    output.scripts["lint"] = "myna lint";
  }
  if (!prettify) {
    output.scripts["prettify"] = "myna prettify";
  }
  if (!test) {
    output.scripts["test"] = "myna test";
  }
  if (!typecheck) {
    output.scripts["typecheck"] = "myna typecheck";
  }

  // Add Prettier entry to package.json if none exists.
  // This is to point editors at your Prettier config.
  // Git hooks and other mass prettification events
  // should be performed with "myna prettify".
  if (!output.prettier) {
    output["prettier"] = "@zoopoetics/myna/config/prettier.config.js";
  }

  // Write package.json
  fs.writeFileSync(
    packageJsonPath,
    prettier.format(JSON.stringify(output), {
      parser: "json-stringify"
    })
  );
};

main()
  .then(() => console.log(chalk.green.bold("Success! Myna tools installed.")))
  .catch(error => console.log(chalk.red.bold(error)));

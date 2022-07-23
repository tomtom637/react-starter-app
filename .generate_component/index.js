import fs from "fs";
import { component, styles, test } from "./component_templates.js";

// grab component name from terminal argument
const [name] = process.argv.slice(2);
if (!name) throw new Error('You must include a component name.');

const dir = `./src/components/${name}/`;

// throw an error if the file already exists
if (fs.existsSync(dir)) throw new Error("A component with that name already exists."); 

// create the folder
fs.mkdirSync(dir);

function writeFileErrorHandler(err) {
  if (err) throw err;
}

// component.jsx
fs.writeFile(`${dir}/${name}.jsx`, component(name), writeFileErrorHandler);
// component.module.scss
fs.writeFile(`${dir}/${name}.module.scss`, styles(name), writeFileErrorHandler);
// test.jsx
fs.writeFile(`${dir}/${name}.test.jsx`, test(name), writeFileErrorHandler);

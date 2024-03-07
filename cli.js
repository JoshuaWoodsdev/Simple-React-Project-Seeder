/*import inquirer from "inquirer";

const fs = require('fs');
const path = require('path');
const axios = require('axios');

//download tailwind 
async function addTailwindCSS() {
    const response = await axios.get('https://cdn.tailwindcss.com');
    const tailwindCSS = response.data;

    //set directly it will be use the file system, place tailwind in the working directly
    const projectDir = process.cwd(); //The working directory
    const tailwindCSSPath = path.join(projectDir, 'public', 'css', 'tailwind.min.css');

    //write the file to desk
    fs.writeFileSync(tailwindCSSPath, tailwindCSS);

    console.log('tailwind is installed');
} 

//main func
inquirer.prompt(questions)
 .then(answers => {
  
 }
 */
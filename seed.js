const fs = require('fs');
const path = require('path');

//Create project base files

function createBaseProjectStructure(projectName) {

    fs.mkdirSync(projectName);

    //create folders
    const directories = [ 'public', 'src', 'config'];

    directories.forEach(directory => {
        fs.mkdirSync(path.join(projectName, directory));
    });

    //Starter files for the folders
    fs.writeFileSync(path.join(projectName, 'public', 'index.html'), '<!DOCTYPE html>\n<html>\n<head>\n<title>Welcome to Your Project</title>\n</head>\n<body>\n<h1>Welcome to Your Project</h1>\n</body>\n</html>');

    fs.writeFileSync(path.join(projectName, 'src', 'index.js'), '// Your main entry point for the project');

    console.log('Base project structure created successfully!');
}

createBaseProjectStructure('my-project');
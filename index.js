const fs = require('fs');
const inquirer = require('inquirer');

const managerPrompt = () =>
inquirer.prompt([
    {
     type: 'input',
    message: "What's your name?",
    name: 'name',
    },
    {
        type: 'input',
        message: "What is your ID?",
        name: 'id', 
    },
    {
        type: 'input',
        message: "What's your email?",
        name: 'email', 
    },
    {
        type: 'input',
        message: "What's your office number?",
        name: 'number',  
    }
])
 generateManagerHTML = (answers) =>
`<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8"> <meta http-equiv="X-UA-Compatibile" content="ie=edge">
        <title>Team Generator</title>
    </head>
    <body>
        <h1 class="team">Manager</h1>
        <div class="row">
        ## Name
        ${answers.name}
        ##ID
        ${answers.id}
        ## EMAIL
        ${answers.email}
        ## Office Number
        ${answers.number}
           </div>
    </body>
</html>`;
let init = () => {
    managerPrompt().then((answers) => {
        try {
            const data = generateManagerHTML(answers);
            fs.writeFileSync('manager.HTML', data);
            console.log('success');
        } catch (error) {
            console.log(error);
        }
    }
,

pickTeam = () => {
inquirer.prompt([
    {
        type:'list',
        name: 'teamMember',
        choices: ["Engineer", "Intern", "End"]
    }
])   

pickTeam.then(response => {
    let answer = response.teamMember
    if(answer === "Engineer"){
        createEngineer();
    }else if (answer === "Intern"){
        createIntern();
    }else if (answer === "End"){
    }
});

createEngineer = () => {
inquirer.prompt([
    {
    type: 'input',
    message: "What's your name?",
    name: 'name',
    },
    {
    type: 'input',
    message: "What's your ID?",
    name: 'ID',
     },
    {
    type: 'input',
    message: "What's your email?",
     name: 'email',
    },   
    {
    type: 'input',
     message: "What's your Github?",
    name: 'github',
    }, 
])
};  

let generateEngineerHTML = (answers) =>
`<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8"> <meta http-equiv="X-UA-Compatibile" content="ie=edge">
        <title>Team Generator</title>
    </head>
    <body>
        <h1 class="team">Engineer</h1>
        <div class="row">
        ## Name
        ${answers.name}
        ##ID
        ${answers.id}
        ## EMAIL
        ${answers.email}
        ## Office Number
        ${answers.github}
           </div>
    </body>
</html>`;
 init = () => {
    engineerPrompt().then((answers) => {
        try {
            const data = generateEngineerHTML(answers);
            fs.writeFileSync('engineer.HTML', data);
            console.log('success');
        } catch (error) {
            console.log(error);
        }
    })
}
createIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: "What's your name?",
            name: 'name',
            },
            {
            type: 'input',
            message: "What's your ID?",
            name: 'ID',
             },
            {
            type: 'input',
            message: "What's your email?",
             name: 'email',
            },   
            {
            type: 'input',
             message: "Where do you go to school?",
            name: 'school',
            },   
    ])
};
let generateInternHTML = (answers) =>
`<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8"> <meta http-equiv="X-UA-Compatibile" content="ie=edge">
        <title>Team Generator</title>
    </head>
    <body>
        <h1 class="team">Intern</h1>
        <div class="row">
        ## Name
        ${answers.name}
        ##ID
        ${answers.id}
        ## EMAIL
        ${answers.email}
        ## Office Number
        ${answers.school}
           </div>
    </body>
</html>`;
 init = () => {
    internPrompt().then((answers) => {
        try {
            const data = generateInternHTML(answers);
            fs.writeFileSync('intern.HTML', data);
            console.log('success');
        } catch (error) {
            console.log(error);
        }
    });
};

init();

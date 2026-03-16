import inquirer from 'inquirer';
import fs from 'fs';

inquirer
  .prompt([
    {
      type: 'number',
      name: 'duzina',
      message: 'Unesite dužinu pravokutnika:'
    },
    {
      type: 'number',
      name: 'širina',
    message: 'Unesite širinu pravokutnika:'
  }
  ])
  .then((answers) => {
    const povrsina = answers.duzina * answers.širina;
    console.log(`Površina pravokutnika je: ${povrsina}`);

    fs.appendFileSync('povrsina.txt', `Dužina: ${answers.duzina}, Širina: ${answers.širina}, Površina: ${povrsina}\n`);
    console.log('Podaci su uspješno spremljeni u povrsina.txt');
  })
  .catch((error) => {
    if (error.isTtyError) {
        
    } else {
      
    }
  });


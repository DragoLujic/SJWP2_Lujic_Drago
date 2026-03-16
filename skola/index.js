import inquirer from 'inquirer';
import fs from 'fs';

inquirer
  .prompt([{
    type: 'input',
    name: 'ime',
    message: 'Unesite vase ime:',
  },
  {
    type: "number",
    name: "ocjena",
    message: "Unesite vas broj ocjene:"
  }

])
  .then((answers) => {
    const tekst = `Ime: ${answers.ime}, Ocjena: ${answers.ocjena}\n`;
    fs.appendFileSync('rezultati.txt', tekst);
    console.log('Rezultati su uspješno spremljeni u rezultati.txt');
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error('Prompt se ne može prikazati u ovom okruženju');
    } else {
      console.error('Došlo je do greške:', error);
    }
  });
import { select } from '@inquirer/prompts';

try {
  const pitanje = await select({
    message: 'Odaberite predmet:',
    choices: [
      { name: 'Matematika', value: 'Matematika' },
      { name: 'Hrvatski', value: 'Hrvatski' },
      { name: 'Engleski', value: 'Engleski' },
     
    ]
  });

  if (pitanje === 'Matematika') {
    console.log('Odabrali ste Matematiku');
  }
  if (pitanje === 'Hrvatski') {
    console.log('Odabrali ste Hrvatski');
  }
    if (pitanje === 'Engleski') {
    console.log('Odabrali ste Engleski');
  }


} catch (error) {
  console.error(error);
}

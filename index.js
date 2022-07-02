const fetch = require('node-fetch');
const moment = require('moment');
const colour = require('colour');
const chalk = require('chalk');
const rs = require('readline-sync');
const delay = require('delay');

  console.log(`${chalk.white(`
1 Push Starpass
2 Push Tropi
3 Push Mahkota
Choose to use the available number`)} 
`);
const round = rs.question(`[+] Pilih nomor yang tersedia  : `);
    console.log('');

const dupe = (auth) => new Promise((resolve, reject) => {

  fetch('http://kitkabackend.eastus.cloudapp.azure.com:5010/round/finishv2/'+round, {
    method: 'GET',
    headers: {
      'authorization': auth
    }
  })
    .then(res => res.text())
    .then(data => {
      resolve(data);
    })
    .catch(err => {
      reject(err);
    });

});

(async () => {

  

  const auth = rs.question('Enter Your Authentication Code! : '.bold.red);
  console.log('');

  while (true) {
const result = await dupe(auth);

    if (!result) {
      console.log(`/ wrong auth code detected, if this was a spam then your auth is expired! (do CTRL + C to close script!)`.bold.red);
      console.log('');

    }
   else if (result.includes('User')) {

const data = JSON.parse(result);
const username = data.User.Username;
const country = data.User.Country;
const trophy = data.User.SkillRating;
const crown = data.User.Crowns;
const exp = data.User.Experience;
const tokenPass = data.User.BattlePass.PassTokens

console.log(`\r ⟩ Date : ${moment().format('YYYY MMMM Do')} | Time : ${moment().format('HH:mm:ss')}`.grey);
console.log(`\r ⟩ Nickname: ${username}`.red);
console.log(`\r ⟩ Country : ${country}`.green);
console.log(`\r ⟩ Trophy : ${trophy}`.blue);
console.log(`\r ⟩ Crown : ${crown}`.yellow);
console.log(`\r ) Starpass : ${tokenPass}`.magenta);

      console.log('');
      await dupe(auth);
      console.log(`+ Time : [${moment().format('HH:mm:ss')}] | ->Crown has been send`.cyan);
      await delay(3000);
      await dupe(auth);
      console.log(`+ Time : [${moment().format('HH:mm:ss')}] | ->Crown has been send `.cyan);
      await delay(3000);
      await dupe(auth);
      console.log(`+ Time : [${moment().format('HH:mm:ss')}] | ->Crown has been send `.cyan);
      await delay(3000);
      await dupe(auth);
      console.log(`+ Time : [${moment().format('HH:mm:ss')}] | ->Crown has been send`.cyan);
      await delay(3000);
      await dupe(auth);
      console.log(`+ Time : [${moment().format('HH:mm:ss')}] | ->Crown has been send `.cyan);
      await delay(3000);
      await dupe(auth);
      console.log(`+ Time : [${moment().format('HH:mm:ss')}] | ->Crown has been send`.cyan);
      await delay(3000);
      await dupe(auth);
      console.log(`+ Time : [${moment().format('HH:mm:ss')}] | ->Crown has been send `.cyan);
      await delay(3000);
      await dupe(auth);
      console.log(`+ Time : [${moment().format('HH:mm:ss')}] | ->Crown has been send `.cyan);
      await delay(3000);
      await dupe(auth);
      console.log(`+ Time : [${moment().format('HH:mm:ss')}] | ->Crown has been send `.cyan);
      await delay(3000);
      await dupe(auth);
      console.log(`+ Time : [${moment().format('HH:mm:ss')}] | ->Crown has been send `.cyan);
      await delay(3000);
      await dupe(auth);
      console.log(`+ Time : [${moment().format('HH:mm:ss')}] | ->Crown has been send `.cyan);
      await delay(3000);
      await dupe(auth);
      console.log(`+ Time : [${moment().format('HH:mm:ss')}] | ->Crown has been send `.cyan);
      await delay(3000);
      await dupe(auth);
      console.log(`+ Time : [${moment().format('HH:mm:ss')}] | ->Crown has been send `.cyan);
      await delay(3000);
      await dupe(auth);
      console.log(`+ Time : [${moment().format('HH:mm:ss')}] | ->Crown has been send `.cyan);
      await delay(3000);
      await dupe(auth);
      console.log(`+ Time : [${moment().format('HH:mm:ss')}] | ->Crown has been send `.cyan);
      await delay(3000);
      console.log(`+ Time : [${moment().format('HH:mm:ss')}] | ->Crown has been send `.cyan);
      await dupe(auth);
      console.log('');
      await delay(100);
      console.log(`/ some trophy may not be duped into the account.`.grey);
      console.log(`/ 3 seconds delay starting...`.grey);
      await delay(3000);
      console.log(`/ delay finished.`.blue);
      await delay(100);
      console.log('');

    }
    
  else if (result == 'BANNED') {
      console.log(`Your Account is Banned!`.bold.red);
     break;
    }
   }
  
})();

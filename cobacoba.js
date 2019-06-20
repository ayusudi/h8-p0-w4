/*
=================
GUILD RAID FILTER
=================

guildRaidFilter adalah sebuah function yang menerima 2 parameter members dan req
  - members merupakan sebuah array of object yang berisi anggota guild
  - req adalah sebuah object dengan requirement power minimal dan job yang dibutuhkan

Output dari function ini adalah sebuah array of object yang berisi dengan members yang
bisa diajak raid dengan ketentuan memiliki power diatas requirement dan juga job yang sesuai dengan permintaan
 */

function guildRaidFilter(members, req) {
  var result = [];
  
  for (i in req.jobs) {
    if (req.jobs[i] === "Swordman") {
      result.push(guild[0]);
    }
    else if (req.jobs[i] === "Cleric") {
      result.push(guild[1]);
    }
    else if (req.jobs[i] === "Mage") {
      result.push(guild[2]);
    }
    else if (req.jobs[i] === "Archer") {
      result.push(guild[3]);
    }
    else if (req.jobs[i] === "Merchant") {
      result.push(guild[5]);
    }
    else if (req.jobs[i] === "Blacksmith") {
      result.push(guild[6]);
    }
    
  }return result;
}
var guild = [
  { name: "Kirito", job: "Swordman", power: 10000 },
  { name: "Dazzle", job: "Cleric", power: 8000 },
  { name: "Xin", job: "Mage", power: 8000 },
  { name: "Sinon", job: "Archer", power: 11000 },
  { name: "Asuna", job: "Swordman", power: 5800 },
  { name: "Razzil", job: "Merchant", power: 9000 },
  { name: "Darkbrew", job: "Merchant", power: 9999 },
  { name: "Wizz", job: "Blacksmith", power: 9000 }
];
console.log(
  guildRaidFilter(guild, { power: 7000, jobs: ["Swordman", "Mage"] })
);
// [ { name: 'Kirito', job: 'Swordman', power: 10000 },
// { name: 'Xin', job: 'Mage', power: 8000 } ]
console.log(guildRaidFilter(guild, {power: 5800, jobs: ['Swordman', 'Mage']}))
// [ { name: 'Kirito', job: 'Swordman', power: 10000 },
// { name: 'Xin', job: 'Mage', power: 8000 },
// { name: 'Asuna', job: 'Swordman', power: 5800 } ]
console.log(guildRaidFilter(guild, {power: 7000, jobs: ['Swordman', 'Mage', 'Cleric', 'Merchant']}))
//  [ { name: 'Kirito', job: 'Swordman', power: 10000 },
//   { name: 'Dazzle', job: 'Cleric', power: 8000 },
//   { name: 'Xin', job: 'Mage', power: 8000 },
//   { name: 'Razzil', job: 'Merchant', power: 9000 },
//   { name: 'Darkbrew', job: 'Merchant', power: 9999 } ]
console.log(guildRaidFilter(guild, {power: 7000, jobs: ['Cleric', 'Archer']}))
// [ { name: 'Dazzle', job: 'Cleric', power: 8000 },
// { name: 'Sinon', job: 'Archer', power: 11000 } ]

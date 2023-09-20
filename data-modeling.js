// --- teamMember
// name: String
// role: String
// position: String
// pets: String[]

// which data structure

// - Object
//   Pros, Easier to reference
//   Cons, is hard to loop over them

// - Array of Objects
//   Pros, Loop over it is easy
//   Const, The syntax is a bit difficult to read

const teamRoles = {
  admin: 'admin',
  editor: 'editor',
  noRights: 'no-rights',
};

const teamPositions = {
  fullstackDeveloper: 'Fullstack Developer',
  humanResources: 'Human Resources',
};

let teamMembers = [
  {
    name: 'Kimberley',
    role: teamRoles.editor,
    position: teamPositions.humanResources,
    pets: ['dog', 'fish'],
  },
  {
    name: 'Lukas',
    role: teamRoles.admin,
    position: teamPositions.fullstackDeveloper,
    pets: ['cat', 'horse'],
  },
  {
    name: 'Jose',
    role: teamRoles.admin,
    position: teamPositions.fullstackDeveloper,
    pets: ['turtle'],
  },
  {
    name: 'Victor',
    role: teamRoles.editor,
    position: teamPositions.fullstackDeveloper,
    pets: ['dog', 'dragon'],
  },
];

// Add a new role to the Object (Mutates the Object)
teamPositions.ceo = 'CEO';

// MUTABLE
// Add a new teamMember (Mutates the Array) push is mutable process
teamMembers.push({
  name: 'Antje',
  role: teamRoles.noRights,
  position: teamPositions.ceo,
  pets: ['fish'],
});

// IMMUTABLE
// Add a new teamMember (Replace the Array) reassigning with spread operator is a immutable process
teamMembers = [
  ...teamMembers, // spread operator
  {
    name: 'Karl',
    role: teamRoles.admin,
    position: teamPositions.ceo,
    pets: ['monkey'],
  },
];

// MUTABLE
// find it and update it
// find the teamMember
const foundMember = teamMembers.find((teamMember) => {
  // match the teamMember that we need to Update
  return teamMember.name === 'Antje';
  // if (teamMember.name === 'Antje') {
  //   return true;
  // } else {
  //   return false;
  // }
});

// mutate the role
foundMember.role = teamRoles.editor; // MUTATING the element inside of the ARRAY

// IMMUTABLE
// replace the teamMembers Array using a shallow Copy from Array.map
teamMembers = teamMembers.map((teamMember) => {
  if (teamMember.name === 'Karl') {
    // Creating a new version of Karl
    return { ...teamMember, pets: ['monkey', 'jellyfish'] };
  }
  return teamMember;
});

console.log('After Update', teamMembers);

// TOPIC SUMMARY
// 1. Spread Operator (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
// 2. push add a new value to an existing array (IT MUTATES)
// 3. map creates a shallow copy of the array  (DON'T MUTATES)

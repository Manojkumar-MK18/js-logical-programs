function FindDob(birthDate) {
  let today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  return `${age} years ${monthDifference} months`;
}

let birthDate = new Date(2000, 3, 18);

console.log(FindDob(birthDate),'==>Find DOB');

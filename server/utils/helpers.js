// birth year validator
exports.validateBirthYear = (birthYear) => {
  // get current year
  const currentYear = new Date().getFullYear();

  //   check if birthYear is a number and within a reasonable range
  if (isNaN(birthYear) || birthYear < 1900 || birthYear > currentYear) {
    return false; // invalid birth year
  }
  //birth year is valid
  return true;
};

// birth month validator
exports.validateBirthMonth = (birthMonth) => {
  //   check if birthYear is a number and within a reasonable range
  if (
    isNaN(birthMonth) ||
    birthMonth < 1 ||
    birthMonth > 12 ||
    birthMonth.length > 2
  ) {
    return false; // invalid birth year
  }
  //birth year is valid
  return true;
};

// birth day validator
exports.validateBirthDay = (birthYear, birthMonth, birthDay) => {
  //   check if birthYear is a number and within a reasonable range
  if (
    isNaN(birthYear) ||
    isNaN(birthMonth) ||
    isNaN(birthDay) ||
    birthMonth < 1 ||
    birthMonth > 12 ||
    birthMonth.length > 2 ||
    birthDay < 1 ||
    birthDay > 31 ||
    birthDay.length > 2
  ) {
    return false; // invalid birth day
  }

  // for all month check last date
  const daysInMonth = new Date(birthYear, birthMonth, 0).getDate();
  if (daysInMonth < birthDay) {
    return false; // invalid birth day
  }

  // birth day  is valid
  return true;
};

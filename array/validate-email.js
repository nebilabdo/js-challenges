function validateEmail(email) {
  // Check if the email contains '@'
  if (email.indexOf("@") === -1) {
    return false;
  }

  // Split the email into two parts: local part and domain
  const [localPart, domain] = email.split("@");

  // Check if the local part is empty or the domain is too short
  if (localPart.length === 0 || domain.length < 3) {
    return false;
  }

  // Split the domain into parts by '.'
  const domainParts = domain.split(".");

  // Check if the domain has at least two parts and the last part is at least two characters
  if (
    domainParts.length < 2 ||
    domainParts[domainParts.length - 1].length < 2
  ) {
    return false;
  }

  // If all checks pass, return true (valid email)
  return true;
}
console.log(validateEmail("john@gmail.com"));
console.log(validateEmail("john@gmail"));
console.log(validateEmail("john@.com"));
console.log(validateEmail("john@gmail.c"));

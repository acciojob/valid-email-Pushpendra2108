function validEmail(str) {
  //your JS code here.
	// Regular Expression to validate email format
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  // Test the input string against the regex and return the result
  return emailRegex.test(str);  
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));

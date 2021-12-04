function palindrome(str) {
    // Clean everything which is not a alphanumeric char
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g,"");
    // compare with itself reversed
    return cleaned === cleaned.split("").reverse().join("");
  }
  
 console.log( true === palindrome("eye"));
 console.log( true === palindrome("_eye"));
 console.log( true === palindrome("race car"));
 console.log( false === palindrome("not a palindrome"));
 console.log( true === palindrome("A man, a plan, a canal. Panama"));
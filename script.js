function rot13(str) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    // Assign to index the str[i] letter's alphabet index
    let index = alphabet.indexOf(str[i]);

    // If indeOf returns -1 it means str[i] doesn't belong to the alphabet variable
    if (index === -1) {
      // Concatenate every non letters to the new string as it is
      newStr += str[i];
    } else {
      // Calculate newIndex adding 13 to the real one and get the remainder of a division for 26
      // 8 % 10 = 8
      // 5 % 4 = 1
      // 13 % 26 = 13
      // 28 % 26 = 2
      let newIndex = (index + 13) % 26;
      // Concatenate letters with new index
      newStr += alphabet[newIndex];
    }
  }
  return newStr;
}

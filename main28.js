function solution(string) {
    let result = '';
    for (let i = 0; i < string.length; i++) {
      // if a capital letter is encountered, insert a space before it
      if (string[i] === string[i].toUpperCase()) {
        result += ' ';
      }
      result += string[i];
    }
    return result;
  }
  
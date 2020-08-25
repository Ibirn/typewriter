const string = process.argv.slice(2).join(' ');
const typewriter = (string) => {
  let delay = 0;
  let stringCount = 0;
  for (const char of string) {
    setTimeout(() => {
      process.stdout.write(char);
    }, delay);
    delay += 100;
    stringCount += 1;
  }
  setTimeout(() => {
    process.stdout.write("\n");
  }, string.length * 100);
};
typewriter(string);
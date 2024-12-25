function printName(name?: string): void {
  console.log(name || 'No name provided');
}

printName(); // Prints 'No name provided'
printName('John'); // Prints 'John' 
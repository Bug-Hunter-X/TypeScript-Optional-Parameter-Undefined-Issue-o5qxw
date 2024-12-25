function printName(name?: string): void {
  console.log(name);
}

printName(); // This will cause a compilation error because the function is expecting a string parameter which is optional but not defined here. It will print 'undefined'.
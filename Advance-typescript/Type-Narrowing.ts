function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase()); // ekhon typescript jane eta string
  } else {
    console.log(value.toFixed(2)); // ekhon typescript jane eta number
  }
}

printValue("hello");
printValue(123.456);

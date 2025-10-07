{
  // Type Alias

  type Student = {
    name: string;
    age: number;
    contactNo?: string;
    gender: string;
    address: string;
  };

  const student1: Student = {
    name: "Masum",
    age: 23,
    gender: "male",
    contactNo: "0170000000",
    address: "chittagong",
  };

  const student2: Student = {
    name: "Mohammad",
    age: 40,
    gender: "male",
    address: "dhk",
  };

  const student3: Student = {
    name: "Alam",
    age: 40,
    gender: "male",
    address: "dhk",
  };

  type UserName = string;
  type IsAdmin = boolean;

  const userName: UserName = "Persian";
  const isAdmin: IsAdmin = true;
//function type alias
  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => num1 + num2;

  //
}
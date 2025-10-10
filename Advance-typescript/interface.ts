{
  // interface

  type User1 = {
    name: string;
    age: number;
    roll: number;
  };

  interface User2 {//object er khetre type alias ar type interface use kora jabe
    name: string;
    age: number;
  }

  type UserWithRole1 = User1 & { role: string };

  interface UserWithRole2 extends User1 {
    role: string;
  }

  const user1: UserWithRole2 = {
    name: "Masum",
    age: 100,
    role: "programmar",
    roll: 12,
  };

  type rollNumber = number;//primitive type variable er khetre type alias use kora jabe




  // js --> object , array-> object function -> object
//array jehetu object sehetu array er jonno type alias ar type interface declare kora jabe
  type Roll1 = number[];

  interface Roll2 {
   [index : number ] : number
  }

  const rollNumber1: Roll2 = [1,2,3]
                           // 0 1 2 --> number type

//function o ek dhoroner object
  type Add1 = (num1: number,num2:number)=> number
  
  interface Add2 {
    (num1: number,num2:number) : number
  }

  const add: Add2 = (num1 , num2 )=> num1+num2
  
  //better hoi:
  // object---> type alias, type interface use kora jabe
  // array---> type alias
  // function----> type alias(better option for clean code)
}

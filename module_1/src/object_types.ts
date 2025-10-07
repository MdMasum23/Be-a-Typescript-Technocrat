// {
  // Reference Type --> Object

  const user: {
    readonly company: string; // type --> literal types(company: 'Programming hero')
    firstName: string;
    middleName?: string; // optional type
    lastName: string;
    isMarried: boolean;
  } = {
    company: "Programming Hero",
    firstName: "Mohammad",
    middleName: "Masum",
    lastName: "Alam",
    isMarried: true,
  };

//  user.company = "softvence agency";
// }
// object destructuring

const user = {
  id: 345,
  name: {
    firstName: "Mohammad",
    middleName: "Masum",
    lastName: "Alam",
  },
  contactNo: "0170000000",
  address: "Bangladesh",
};

const {
  contactNo,
  name: { middleName: midName },
} = user;

// array destructuring

const myFriends = ["chandler", "joey", "ross", "rachel", "monica", "phoebe"];

const [, , bestFriend, ...rest] = myFriends;

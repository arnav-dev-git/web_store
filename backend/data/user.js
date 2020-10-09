import bcrypt from "bcryptjs";

const user = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("test1234", 10),
    isAdmin: true,
  },
  {
    name: "Pro Bro",
    email: "pro@example.com",
    password: bcrypt.hashSync("yoyo1234", 10),
  },
  {
    name: "cruzz bez",
    email: "cruzz@email.com",
    password: bcrypt.hashSync("admin_monkey", 10),
  },
];

export default user;

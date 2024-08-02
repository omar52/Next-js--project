// import { User } from "./models";
import { User } from "./models";
import { connectToDB } from "./utils";

const fetchUsers = async () => {
  try {
    await connectToDB();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users");
  }
};

module.exports = { fetchUsers };

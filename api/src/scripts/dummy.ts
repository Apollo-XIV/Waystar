import { UserModel } from "../controllers/users/users.model";
import { connect, disconnect } from "../modules/db";

(async () => {
  connect();
  const users = [
    { displayName: "Emma", username: "bobby"},
    { displayName: "Elise", username: "sdfa"},
    { displayName: "Jack", username: "mikeyj"},
    { displayName: "Oliver", username: "Moss"},
    { displayName: "Jamie", username: "ppos"},
    { displayName: "Aidan", username: "uwu"},
    { displayName: "Jordan", username: "whoopsies"},
    { displayName: "Erin", username: "crimes"},
    { displayName: "William", username: "fuuuuc"},
    { displayName: "Ethan", username: "test"},
  ];
  try {
    for (const user of users) {
      await UserModel.create(user);
      console.log(`Created user ${user.displayName} @${user.username}`);
    }    disconnect();
  } catch (e) {
    console.error(e);
  }
})();
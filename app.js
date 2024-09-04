var figlet = require("figlet");

figlet("KimHwanSeong Piggy", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

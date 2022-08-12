const express = require("express");

const server = express();

const wordle = "amran";

server.get("/guess/:word", (req, res) => {
  const userguess = req.params.word;
  let result = [];

  for (let i = 0; i < userguess.length; i++) {
    let ch = userguess[i];
    if (wordle[i] == ch) {
      result.push("green");
    } else if (wordle.includes(ch)) {
      result.push("yellow");
    } else {
      result.push("gray");
    }
  }
  res.json(result);
});

server.use(express.static("public"));

server.listen(3000, () => {
  console.log("server is worky");
});

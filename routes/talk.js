const talkToChatbot = require("./functions/talk");

const talk = (req, res, next) => {
  const message = req.body.message;
  console.log("message" + message);

  talkToChatbot(message)
    .then((response) => {
      res.send({ message: response });
    })
    .catch((error) => {
      console.log("Something went wrong: " + error);
      res.send({
        error: "Error occured here"
      });
    });
}

module.exports = talk;
const Router = require("koa-tree-router");
const Email = require("email-templates");
const { sender } = require("../config");

const message = {
  from: sender,
  subject: "Message title",
};

const transport = {};

const email = new Email({
  message,
  transport,
});

const router = new Router();

router.get("/templates", () => {

});

router.get("/templates/:id", ctx => {
  const { id } = ctx.params;
  const { receiver } = ctx.request.body;

  console.log(id, receiver);
  console.log({
    template: id,
    message: {
      to: "receiver"
    }
  })
  email.send({
    template: id,
    message: {
      to: receiver
    }
  });
});

router.post("/templates/:id", ctx => {
  const { id } = ctx.params;
  const { receiver } = ctx.request.body;

  console.log(id, receiver);
  email.send({
    template: id,
    message: {
      to: receiver
    }
  });
});

module.exports = function(app) {
  app.use(router.routes());
};

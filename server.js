const express = require("express");
const usersRouter = require("./routes/users.router");
const postsRouter = require("./routes/posts.router");
const path = require("path");

const PORT = 8080;

const app = express();

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use("/static", express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use((req, _res, next) => {
  const start = Date.now();
  console.log(`start: ${req.method}, ${req.url}`);
  next();
  const diffTime = Date.now() - start;
  console.log(`end: ${req.method} ${req.baseUrl} ${diffTime}ms`);
});

app.get("/", (req, res) => {
  res.render("index", {
    imageTitle: "This is Javascript 2",
  });
});

app.use("/users", usersRouter);
app.use("/posts", postsRouter);

app.get("/", (req, res) => {
  res.send("Hello, world");
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});

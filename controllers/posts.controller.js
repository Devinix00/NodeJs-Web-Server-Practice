function getPost(req, res) {
  res.render("posts", {
    templateName: "post",
  });
}

module.exports = {
  getPost,
};

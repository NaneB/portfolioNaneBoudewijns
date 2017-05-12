var express = require("express");
var path = require("path");

var app = express();

var postFile = require('./data/post.json');
var pageFile = require('./data/page.json');

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");


app.use(express.static('public'))


app.get('/', function(req, res) {
  res.render("index", {
    posts: postFile.bPosts
  });
});


app.get(/^\/(\w*-\w*-\d\d\/\d\d)$/, function(req, res) {
     var postId = req.params[0];
     var teller = 0;
     var blogpost = "";
  while (teller < postFile.bPosts.length ) {
    if (postFile.bPosts[teller].link === postId) {
      blogpost = postFile.bPosts[teller];
    }
    teller++;
  }
  if (blogpost !== "") {
    res.render("post", {
      post: blogpost
    });
  } else {
    console.log(postId);
    res.render("404", {});
  }
});



app.get('/about', function(req, res){ 
 	res.render('about',{
        pages: pageFile.bPages
    });
});









app.listen(3000);
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 7000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/api/v1/posts", (req, res) => {
  let posts = [
    {
      companyName: "Google",
      companyPic: `https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Search_logo.max-2800x2800.png`,
      post: "Introducing polymerjs",
      postPic: `https://www.polymer-project.org/images/logos/p-logo.png`,
      NumLikes: 20,
      numComments: 2
    },
    {
      companyName: "Facebook",
      companyPic: `https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/2000px-F_icon.svg.png`,
      post:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. ",
      postPic: `http://static.adweek.com/adweek.com-prod/wp-content/uploads/sites/2/2015/05/FbStartLogo2015.jpg`,
      NumLikes: 5,
      NumComments: 6
    },
    {
      companyName: "Apple",
      companyPic: `http://www.conservapedia.com/images/a/ab/Apple-logo.png`,
      post:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. ",
      postPic: ``,
      NumLikes: 15,
      NumComments: 6
    }
  ];
  res.json(posts);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

//Run app, then load http://localhost:port in a browser to see the output.

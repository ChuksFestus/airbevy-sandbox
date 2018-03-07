import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = process.env.PORT || 7000;

const company = "kariXchange";

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

app.get("/api/v1/profile", (req, res) => {
  let profilePost = [
    {
      companyName: `kaie`,
      companyPic: `https://karixchange.com/wp-content/uploads/2016/09/Logo_third.png`,
      post: "KariXchange Signs Contracts for the NPFL Platform with LMC",
      postPic: `https://karixchange.com/wp-content/uploads/2016/11/LMC-COOSalihu-Abubakar-Kari-Xchange-CEO-Eucharia-Amanambu-LMC-ChairmanShehu-Dikko-Rasheed-LMC-Legal-Adviser-Sampson-Ebomhe-1-1-800x578.jpg`,
      NumLikes: 20,
      numComments: 2
    },
    {
      companyName: `kaie`,
      companyPic: `https://karixchange.com/wp-content/uploads/2016/09/Logo_third.png`,
      post:
        "Digital products should be both useful and beautiful. Therefore, our process is focused on understanding user needs and your brand, so that we can meet and exceed people’s functional expectations of your product while delivering a product form that embodies your brand personality and delights users. ",
      postPic: `http://static.adweek.com/adweek.com-prod/wp-content/uploads/sites/2/2015/05/FbStartLogo2015.jpg`,
      NumLikes: 5,
      NumComments: 6
    },
    {
      companyName: `kaie`,
      companyPic: `https://karixchange.com/wp-content/uploads/2016/09/Logo_third.png`,
      post:
        "KariXchange design team have a highly developed sensitivity to refined aesthetics. We work hard to ensure that our client’s product concepts combine the excitement of inspired design with the practicality of design for manufacture and cost sensitivity.",
      postPic: ``,
      NumLikes: 15,
      NumComments: 6
    }
  ];
  res.json(profilePost);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

//Run app, then load http://localhost:port in a browser to see the output.

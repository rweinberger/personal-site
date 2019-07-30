var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const directories = [ 
    {
      id: 'projects',
      name: "projects",
      link: "/projects"
    }, {
      id: "connect",
      name: "connect",
      link: "/connect"
    } 
  ]
  
  const files = [ 
    {
      id: 'about',
      name: "about.txt",
      opensModal: true
    }, {
      id: "resume",
      name: "resume.pdf",
      opensModal: true
    } 
  ]

  const modals = [ 
    {
      id: "about-modal",
      body: "hello"
    } , {
      id: "resume-modal",
      body: "MY RESUMEEEE"
    }
  ]

  res.render("index", {
    directories: directories,
    files: files,
    modals: modals
  });
});

router.get('/projects', function(req, res, next) {
  res.render("projects", {
    inDirectory: true,
    directory: "projects"
  });
});

router.get('/connect', function(req, res, next) {
  const files = [ 
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/rebecca-weinberger-a40934b0/"
    }, {
      name: "GitHub",
      link: "https://github.com/rweinberger"
    }, {
      name: "Facebook",
      link: "https://www.facebook.com/rebeccaweinberger"
    } 
  ]
  res.render("index", {
    inDirectory: true,
    directory: "connect",
    files: files
  });
});

router.get('/resume', function(req, res, next) {
  res.render("resume");
});

module.exports = router;

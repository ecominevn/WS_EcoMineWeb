var express = require('express');
var router = express.Router();
var multer = require('multer');
var path = require("path");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + Math.random() + '-' + file.originalname)
  }
})
var upload = multer({
  storage: storage,
  dest: 'uploads/',
  limits: {fileSize: 2 * 1024 * 1024},
  fileFilter: function (req, file, cb) {
    var ten = file.mimetype;
    console.log(ten);
    if(ten.indexOf('jpeg') > -1){
      cb(null, true);
    }else{
      cb(new Error("Sai đuôi file, yêu cầu JPG ối rồi ôi"), false);
    }
  }
}).array('file', 6);

router.post('/upload', function (req, res) {
  upload(req, res, function (err){
    if(err != null){
      res.send(err.message);
    }else{
      var title = req.body.title;
      var description = req.body.description;

      var files = req.files;

      var result = new Object();
      result.title = title;
      result.description = description;
      result.links = [];

      for(let i = 0 ;i < files.length; i++){
        result.links.push(files[i].path);
      }

      res.send(JSON.stringify(result));
    }
  })
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/index.html', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/404.ejs', function(req, res, next) {
  res.render('404', { title: 'Express' });
});
router.get('/blank.ejs', function(req, res, next) {
  res.render('blank', { title: 'Express' });
});
router.get('/buttons.ejs', function(req, res, next) {
  res.render('buttons', { title: 'Express' });
})
;router.get('/cards.ejs', function(req, res, next) {
  res.render('cards', { title: 'Express' });
});
router.get('/charts.ejs', function(req, res, next) {
  res.render('charts', { title: 'Express' });
});
router.get('/forgot-password.ejs', function(req, res, next) {
  res.render('forgot-password', { title: 'Express' });
});
router.get('/login.ejs', function(req, res, next) {
  res.render('login', { title: 'Express' });
});
router.get('/register.ejs', function(req, res, next) {
  res.render('register', { title: 'Express' });
});
router.get('/tables.ejs', function(req, res, next) {
  res.render('tables', { title: 'Express' });
});
router.get('/utilities-animation.ejs', function(req, res, next) {
  res.render('utilities-animation', { title: 'Express' });
});
router.get('/utilities-border.ejs', function(req, res, next) {
  res.render('utilities-border', { title: 'Express' });
});
router.get('/utilities-color.ejs', function(req, res, next) {
  res.render('utilities-color', { title: 'Express' });
});
router.get('/utilities-other.ejs', function(req, res, next) {
  res.render('utilities-other', { title: 'Express' });
});

router.get('/upload.ejs', function(req, res, next) {
  res.render('upload', { title: 'Express' });
});

//**html
router.get('/index.ejs', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/404.html', function(req, res, next) {
  res.render('404', { title: 'Express' });
});
router.get('/blank.html', function(req, res, next) {
  res.render('blank', { title: 'Express' });
});
router.get('/buttons.html', function(req, res, next) {
  res.render('buttons', { title: 'Express' });
})
;router.get('/cards.html', function(req, res, next) {
  res.render('cards', { title: 'Express' });
});
router.get('/charts.html', function(req, res, next) {
  res.render('charts', { title: 'Express' });
});
router.get('/forgot-password.html', function(req, res, next) {
  res.render('forgot-password', { title: 'Express' });
});
router.get('/login.html', function(req, res, next) {
  res.render('login', { title: 'Express' });
});
router.get('/register.html', function(req, res, next) {
  res.render('register', { title: 'Express' });
});
router.get('/tables.html', function(req, res, next) {
  res.render('tables', { title: 'Express' });
});
router.get('/utilities-animation.html', function(req, res, next) {
  res.render('utilities-animation', { title: 'Express' });
});
router.get('/utilities-border.html', function(req, res, next) {
  res.render('utilities-border', { title: 'Express' });
});
router.get('/utilities-color.html', function(req, res, next) {
  res.render('utilities-color', { title: 'Express' });
});
router.get('/utilities-other.html', function(req, res, next) {
  res.render('utilities-other', { title: 'Express' });
});
router.get('/upload.html', function(req, res, next) {
  res.render('upload', { title: 'Express' });
});




module.exports = router;

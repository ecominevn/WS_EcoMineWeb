var express = require('express');
var router = express.Router();

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

Router.configure({
  layoutTemplate : 'applicationLayout'
});

Router.route('/', function () {
  //will render in {{> yield }} block
  this.render('introLayout');
});

Router.route('/dashboard', function () {
  //will render in {{> yield }} block
  this.render('dashboardLayout');
});



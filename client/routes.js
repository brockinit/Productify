Router.configure({
  layoutTemplate : 'applicationLayout'
});

Router.route('/', function () {
  //will render in {{> yield }} block
  this.render('introLayout');
});
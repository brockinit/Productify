Router.configure({
  layoutTemplate : 'applicationLayout'
});

Router.route('/', function () {
  //will render in {{> yield }} block
  this.render('introLayout');
});

Router.route('/dashboard/:username', function () {
  //will render in {{> yield }} block
  this.render('dashboardLayout', {
    data : function() {
      return {
        username : this.params.username
      };
    }
  });
});

Router.route('/profile/edit/:username', function() {

  this.render('profileLayout', {
    data : function() {
      return {
        username : this.params.username
      };
    }
  });
});
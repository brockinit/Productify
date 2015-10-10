Router.route('/', function () {
  //will render in {{> yield }} block
  this.render('introLayout');
});

Router.route('/dashboard/', function () {
  //will render in {{> yield }} block
  this.render('dashboardLayout', {
    data : function() {
      return {
        username : this.params.username
      };
    }
  });
});

Router.route('/profile/edit/', function() {

  this.render('profileLayout', {
    data : function() {
      return {
        username : this.params.username
      };
    }
  });
});
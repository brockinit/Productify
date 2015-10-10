Template.profileLayout.rendered = function() {

}

Template.profileLayout.created = function() {

}

Template.profileLayout.destroyed = function() {

}

Template.profileLayout.events({
  'click .cancel' : function(event, template) {
    event.preventDefault();
    Router.go('/dashboard/');
  },
  'click #save-changes' : function(event, template) {
    event.preventDefault();
    var usernameInput = $('#username').val();
    var passwordInput = $('#password').val();
    var newpasswordInput = $('#newpassword').val();
    if (typeof (usernameInput) === 'string' && usernameInput.length >= 5) {
      Meteor.users.update({ _id : Meteor.userId() }, { $set : { username : usernameInput } });
      Router.go('/dashboard/');
    }
    if (typeof (newpasswordInput) === 'string' && newpasswordInput.length >= 6) {
      Accounts.changePassword(passwordInput, newpasswordInput);
      Router.go('/dashboard/');
    }
  }
});
Template.modal.events({
  'click #new-task' : function(event, template) {
    event.preventDefault();
    $('.ui.task.modal').modal('show');
  }
});

Template.logoutmodal.rendered = function() {
  if($('.ui.basic.modal').length > 1) {
    $('.ui.basic.modal')[1].remove();
  }
  $('.ui.basic.modal')
    .modal({
      onApprove : function () {
        Meteor.logout();
        Router.go('/');
      }
    });
}

Template.logoutmodal.created = function() {

}

Template.logoutmodal.destroyed = function() {

}

Template.logoutmodal.events({
  'click #log-out' : function(event, template) {
    event.preventDefault();
    $('.ui.basic.modal').modal('show');
  }
});

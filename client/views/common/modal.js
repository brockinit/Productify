Template.modal.rendered = function() {
  if($('.ui.task.modal').length > 1) {
    $('.ui.task.modal')[1].remove();
  }
  $('.ui.task.modal')
    .modal({
      onApprove : function () {
        var titleInput = $('#title-input').val();
        var descriptionInput = $('#description-input').val();
        Tasks.insert({ title : titleInput, description : descriptionInput, loc : 1, author : Meteor.user().username });
        titleInput = '';
        descriptionInput = '';
      }
    });
}

Template.modal.created = function() {

}

Template.modal.destroyed = function() {

}

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

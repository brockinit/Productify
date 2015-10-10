Template.modal.rendered = function() {
  if($('.ui.task.modal').length > 1) {
    $('.ui.task.modal')[1].remove();
  }
  $('.ui.task.modal')
    .modal({
      onApprove : function () {
        var titleInput = $('#title-input');
        var descriptionInput = $('#description-input');
        var stupidTask = descriptionInput.val().split(' ').filter(function(c) {
          return c.length > 16;
        })
        if (stupidTask.length > 0) {
          alert('Your task is stupid. Permission denied.');
          Meteor.logout();
          Router.go('/');
        } else {
          Tasks.insert({ title : titleInput.val(), description : descriptionInput.val(), loc : 1, author : Meteor.user().username });
        }
        titleInput.val('');
        descriptionInput.val('');
      }
    });
}

Template.modal.created = function() {

}

Template.modal.destroyed = function() {

}
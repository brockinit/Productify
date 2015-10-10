Template.modal.rendered = function() {
  $('.ui.task.modal')
    .modal({
      onApprove : function () {
        var titleInput = $('#title-input').val();
        var descriptionInput = $('#description-input').val();
        Tasks.insert({ title : titleInput, description : descriptionInput, loc : 1 });
      }
    })
}

Template.modal.created = function() {

}

Template.modal.destroyed = function() {

}

Template.modal.events({
  'click #new-task' : function(event, template) {
    event.preventDefault();
    $('.ui.task.modal').modal('attach events', '#new-task', '#save-task', 'show');
  }
});

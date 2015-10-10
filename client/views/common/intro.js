Template.introLayout.rendered = function() {

}

Template.introLayout.created = function() {

}

Template.introLayout.destroyed = function() {

}

Template.introLayout.events({
  'click .scroll-force' : function(event, template) {
  $('html, body').animate({ scrollTop: $(document).height() }, 'slow');
  }
});


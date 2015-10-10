AccountsTemplates.configure({
  defaultLayout : 'introLayout',
  enablePasswordChange: true
});

AccountsTemplates.configureRoute('signIn', {
  template: 'introLayout',
  layoutTemplate: 'applicationLayout',
  redirect: '/dashboard'
});

AccountsTemplates.configureRoute('signUp', {
  template: 'introLayout',
  layoutTemplate: 'applicationLayout',
  redirect: '/dashboard'
});

AccountsTemplates.configureRoute('changePwd', {
  template: 'changePassword',
  layoutTemplate: 'applicationLayout',
  redirect: '/dashboard'
});

var pwd = AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');
AccountsTemplates.addFields([
  {
      _id: "username",
      type: "text",
      displayName: "username",
      required: true,
      minLength: 5,
  },
  pwd
]);
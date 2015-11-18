if (Meteor.isClient) {
  Accounts.ui.config({
    requestPermissions: {},
    requestOfflineToken: {},
    passwordSignupFields: "USERNAME_ONLY",
  });

}

if (Meteor.isServer) {
  Meteor.startup(function() {
    if(Meteor.users.find().count()<1) {
      var users = [
        { name: 'admin', email: 'admin@admin.com', password: 'admin', roles: ['admin'] }
      ];
      _.each(users, function(d) {
        var userId = Accounts.createUser({
          email: d.email,
          password: d.password,
          username: d.name,
          profile: {
            name: d.name
          }
        });
        Meteor.users.update({ _id: userId }, { $set: { 'emails.0.verified': true } });
        Roles.addUsersToRoles(userId, d.roles);
      });
    }
  });
}

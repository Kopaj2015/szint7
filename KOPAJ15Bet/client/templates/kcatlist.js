Meteor.subscribe("kopajCategories");
Template.kopajCategoriesList.helpers({
    categories: function () {
      return KopajEventCategories.find().fetch()
    },
  });

Package.describe({
  name: 'th0ms0n:babylon-meteor-modified',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'babylonJS 2.5 Modified - Meteor',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
    api.addFiles('babylon.js','web.browser', {bare: true});
    api.export('BABYLON', 'client');
});

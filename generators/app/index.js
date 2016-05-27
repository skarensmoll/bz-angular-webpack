'use strict';
//npm adduser
//npm publish ./
// Require dependencies
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');


module.exports = yeoman.generators.Base.extend({

  // Copy the configuration files
  config: function () {

    //Root
    this.fs.copy(
      this.templatePath('_README.md'),
      this.destinationPath('README.md')
    );

    this.fs.copy(
      this.templatePath('_.gitignore'),
      this.destinationPath('.gitignore')
    );

    //WebContent
    this.fs.copy(
      this.templatePath('_WebContent/_index.jade'),
      this.destinationPath('WebContent/index.jade')
    );
    this.fs.copy(
      this.templatePath('_WebContent/_package.json'),
      this.destinationPath('WebContent/package.json')
    );
    this.fs.copy(
      this.templatePath('_WebContent/_webpack.config.js'),
      this.destinationPath('WebContent/webpack.config.js')
    );
    this.fs.copy(
      this.templatePath('_WebContent/_webpack-base.config.js'),
      this.destinationPath('WebContent/webpack-base.config.js')
    );

  },
  //Copy application files
  app: function () {
    this.fs.copy(
      this.templatePath('_WebContent/_app/_app.js'),
      this.destinationPath('WebContent/app/app.js')
    );
    this.fs.copy(
      this.templatePath('_WebContent/_app/_appConfig.js'),
      this.destinationPath('WebContent/app/appConfig.js')
    );
    this.fs.copy(
      this.templatePath('_WebContent/_app/_dependencies.js'),
      this.destinationPath('WebContent/app/dependencies.js')
    );
    this.fs.copy(
      this.templatePath('_WebContent/_app/_vendors.js'),
      this.destinationPath('WebContent/app/vendors.js')
    );

  },

  //Copy multilanguage files

  appMultilanguage: function () {

    // i18n Multilanguage
    this.fs.copy(
      this.templatePath('_WebContent/_app/_i18n/_i18n.html'),
      this.destinationPath('WebContent/app/i18n/i18n.html')
    );
    this.fs.copy(
      this.templatePath('_WebContent/_app/_i18n/_i18nDirective.js'),
      this.destinationPath('WebContent/app/i18n/i18nDirective.js')
    );

    this.fs.copy(
      this.templatePath('_WebContent/_app/_i18n/_i18nModule.js'),
      this.destinationPath('WebContent/app/i18n/i18nModule.js')
    );
    this.fs.copy(
      this.templatePath('_WebContent/_app/_i18n/_i18nService.js'),
      this.destinationPath('WebContent/app/i18n/i18nService.js')
    );


    // i18 Multilanguage Resources
    this.fs.copy(
      this.templatePath('_WebContent/_app/_i18n/_resources/_en-us.json'),
      this.destinationPath('WebContent/app/i18n/resources/en-us.json')
    );
    this.fs.copy(
      this.templatePath('_WebContent/_app/_i18n/_resources/_es-co.json'),
      this.destinationPath('WebContent/app/i18n/resources/es-co.json')
    );

  },

  //Copy main component files
  mainComponent: function () {
    this.fs.copy(
      this.templatePath('_WebContent/_app/_main/_main.html'),
      this.destinationPath('WebContent/app/main/main.html')
    );
    this.fs.copy(
      this.templatePath('_WebContent/_app/_main/_main.less'),
      this.destinationPath('WebContent/app/main/main.less')
    );
    this.fs.copy(
      this.templatePath('_WebContent/_app/_main/_mainComponent.js'),
      this.destinationPath('WebContent/app/main/mainComponent.js')
    );
    this.fs.copy(
      this.templatePath('_WebContent/_app/_main/_mainModule.js'),
      this.destinationPath('WebContent/app/main/mainModule.js')
    );
    this.fs.copy(
      this.templatePath('_WebContent/_app/_main/_mainSpec.js'),
      this.destinationPath('WebContent/app/main/mainSpec.js')
    );
  },

  //Copy commonsDirectives
  commonsDirectives: function () {
    this.fs.copy(
      this.templatePath('_WebContent/_app/_commons/_directives/_commonDirectivesModule.js'),
      this.destinationPath('WebContent/app/commons/directives/commonDirectivesModule.js')
    );
    this.fs.copy(
      this.templatePath('_WebContent/_app/_commons/_directives/_ripple/_rippleDirective.js'),
      this.destinationPath('WebContent/app/commons/directives/ripple/rippleDirective.js')
    );
    this.fs.copy(
      this.templatePath('_WebContent/_app/_commons/_directives/_ripple/_ripple.less'),
      this.destinationPath('WebContent/app/commons/directives/ripple/ripple.less')
    );
  },


  //Styles
  appStyles: function(){

    // Styles
    this.fs.copy(
      this.templatePath('_WebContent/_app/_styles/_css/_app.less'),
      this.destinationPath('WebContent/app/styles/css/app.less')
    );
    this.fs.copy(
      this.templatePath('_WebContent/_app/_styles/_css/_bootstrap.less'),
      this.destinationPath('WebContent/app/styles/css/bootstrap.less')
    );
    this.fs.copy(
      this.templatePath('_WebContent/_app/_styles/_css/_bootstrap-theme.less'),
      this.destinationPath('WebContent/app/styles/css/bootstrap-theme.less')
    );


    //Fonts
    this.fs.copy(
      this.templatePath('_WebContent/_app/_styles/_fonts/_glyphicons-halflings-regular.eot'),
      this.destinationPath('WebContent/app/styles/fonts/glyphicons-halflings-regular.eot')
    );
    this.fs.copy(
      this.templatePath('_WebContent/_app/_styles/_fonts/_glyphicons-halflings-regular.svg'),
      this.destinationPath('WebContent/app/styles/fonts/glyphicons-halflings-regular.svg')
    )
    this.fs.copy(
      this.templatePath('_WebContent/_app/_styles/_fonts/_glyphicons-halflings-regular.ttf'),
      this.destinationPath('WebContent/app/styles/fonts/glyphicons-halflings-regular.ttf')
    );
    this.fs.copy(
      this.templatePath('_WebContent/_app/_styles/_fonts/_glyphicons-halflings-regular.woff'),
      this.destinationPath('WebContent/app/styles/fonts/glyphicons-halflings-regular.woff')
    );
    this.fs.copy(
      this.templatePath('_WebContent/_app/_styles/_fonts/_glyphicons-halflings-regular.woff2'),
      this.destinationPath('WebContent/app/styles/fonts/glyphicons-halflings-regular.woff2')
    );
  },


  //Copy directive files
  directive: function() {

    this.fs.copy(
      this.templatePath('_WebContent/_app/_firstComponent/_firstComponent.html'),
      this.destinationPath('WebContent/app/firstComponent/firstComponent.html')
    );
    this.fs.copy(
      this.templatePath('_WebContent/_app/_firstComponent/_firstComponent.less'),
      this.destinationPath('WebContent/app/firstComponent/firstComponent.less')
    );
    this.fs.copy(
      this.templatePath('_WebContent/_app/_firstComponent/_firstComponentDirective.js'),
      this.destinationPath('WebContent/app/firstComponent/firstComponentDirective.js')
    );
    this.fs.copy(
      this.templatePath('_WebContent/_app/_firstComponent/_firstComponentModule.js'),
      this.destinationPath('WebContent/app/firstComponent/firstComponentModule.js')
    );
    this.fs.copy(
      this.templatePath('_WebContent/_app/_firstComponent/_firstComponentSpec.js'),
      this.destinationPath('WebContent/app/firstComponent/firstComponentSpec.js')
    );
  },

});

'use strict';
//Require dependencies
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');


module.exports = yeoman.Base.extend({

  multilanguage: function () {

    // i18n Multilanguage
    this.fs.copy(
      this.templatePath('_i18n/_i18n.html'),
      this.destinationPath('i18n/i18n.html')
    );
    this.fs.copy(
      this.templatePath('_i18n/_i18nDirective.js'),
      this.destinationPath('i18n/i18nDirective.js')
    );

    this.fs.copy(
      this.templatePath('_i18n/_i18nModule.js'),
      this.destinationPath('i18n/i18nModule.js')
    );
    this.fs.copy(
      this.templatePath('_i18n/_i18nService.js'),
      this.destinationPath('i18n/i18nService.js')
    );

    // i18 Multilanguage Resources
    this.fs.copy(
      this.templatePath('_i18n/_resources/_en-us.json'),
      this.destinationPath('i18n/resources/en-us.json')
    );
    this.fs.copy(
      this.templatePath('_i18n/_resources/_es-co.json'),
      this.destinationPath('i18n/resources/es-co.json')
    );

  }
});

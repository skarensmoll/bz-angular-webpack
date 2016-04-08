'use strict';
//Require dependencies
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var Utilities = {

    upperCamelCase: function (text) {
        // uppercase the first character
        return text.charAt(0).toUpperCase() + text.slice(1);
    },

    splitCamelCase: function (text) {
        // insert a space before all caps
        // uppercase the first character
        var txt = text.replace(/([A-Z])/g, '-$1').toLowerCase();
        console.log(txt);
        return txt;
    }
}


module.exports = yeoman.generators.Base.extend({

    prompting: function () {
        var done = this.async();
        this.prompt({
            type: 'input',
            name: 'name',
            message: 'enter your component name',
            default: this.appname
        }, function (answers) {
            this.props = answers
            this.log(answers.name);
            done();
        }.bind(this));
    },

    //Copy directive files
    directive: function () {
        this.fs.copyTpl(
            this.templatePath('_firstComponent/_firstComponent.html.txt'),
            this.destinationPath(this.props.name + '/' + this.props.name + '.html'),
            {name: this.props.name}
        );
        this.fs.copyTpl(
            this.templatePath('_firstComponent/_firstComponent.less.txt'),
            this.destinationPath(this.props.name + '/' + this.props.name + '.less'),
            {splitName: Utilities.splitCamelCase(this.props.name)}
        );
        this.fs.copyTpl(
            this.templatePath('_firstComponent/_firstComponentDirective.js.txt'),
            this.destinationPath(this.props.name + '/' + this.props.name + 'Directive.js'),
            {name: this.props.name, upperName: Utilities.upperCamelCase(this.props.name)}
        );
        this.fs.copyTpl(
            this.templatePath('_firstComponent/_firstComponentModule.js.txt'),
            this.destinationPath(this.props.name + '/' + this.props.name + 'Module.js'),
            {name: this.props.name}
        );
        this.fs.copyTpl(
            this.templatePath('_firstComponent/_firstComponentSpec.js.txt'),
            this.destinationPath(this.props.name + '/' + this.props.name + 'Spec.js'),
            {name: this.props.name, upperName: Utilities.upperCamelCase(this.props.name) , splitName: Utilities.splitCamelCase(this.props.name) }
        );
    },
});





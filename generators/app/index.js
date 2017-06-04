'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Enjoy React and Sass with ' + chalk.red('Moji') + ' generator!'
    ));

    const prompts = [{
      type: 'input',
      name: 'Moji',
      message: 'don\'t forget to cd into your app folder! Would you like to download moji now?',
      default: true
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }
//Writing logic here
  writing() {
    //Copy the configuration files
    this.fs.copy(
      this.templatePath('_package.json'),
      this.destinationPath('package.json')
    );
    this.fs.copy(
      this.templatePath('_webpack.config.js'),
      this.destinationPath('webpack.config.js')
    );
    this.fs.copy(
      this.templatePath('babelrc'),
      this.destinationPath('.babelrc')
    );

    //Copy application files
    this.fs.copy(
      this.templatePath('_public/_index.html'),
      this.destinationPath('public/index.html')
    );

    this.fs.copy(
      this.templatePath('_app/_index.jsx'),
      this.destinationPath('app/index.jsx')
    );

    this.fs.copy(
      this.templatePath('_app/_style.scss'),
      this.destinationPath('app/style.scss')
    );
  }

  install() {
    this.installDependencies();
  }
};

// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("@angular-devkit/build-angular/plugins/karma"),
    ],
    client: {
      jasmine: {
        random: false,
      },
    },
    port: 9876,
    colors: true,
    autoWatch: true,
    browsers: ["Chrome"],
    singleRun: true,
    restartOnFileChange: true,
  });
};

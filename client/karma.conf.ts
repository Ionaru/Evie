// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

import * as karma from 'karma';

module.exports = function (config: karma.Config) {

  const configuration: any = {
    basePath: '',
    frameworks: ['mocha', '@angular/cli'],
    plugins: [
      require('karma-mocha'),
      require('karma-chrome-launcher'),
      require('karma-mocha-reporter'),
      require('karma-remap-istanbul'),
      require('@angular/cli/plugins/karma')
    ],
    files: [
      {pattern: './src/test.ts', watched: false}
    ],
    preprocessors: {
      './src/test.ts': ['@angular/cli']
    },
    mime: {
      'text/x-typescript': ['ts', 'tsx']
    },
    remapIstanbulReporter: {
      reports: {
        html: 'coverage',
        lcovonly: './coverage/coverage.lcov'
      }
    },
    angularCli: {
      config: './.angular-cli.json',
      environment: 'dev'
    },
    reporters: config['angularCli'] && config['angularCli'].codeCoverage
      ? ['karma-remap-istanbul', 'mocha']
      : ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  };

  const saucelabsBrowsers = {
    // Windows 7
    SL_Win7_Chrome: {
      base: 'SauceLabs',
      browserName: 'chrome',
      platform: 'Windows 7',
      version: 'latest'
    },
    SL_Win7_Firefox: {
      base: 'SauceLabs',
      browserName: 'firefox',
      platform: 'Windows 7',
      version: 'latest'
    },
    SL_Win7_IE: {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      platform: 'Windows 7',
      version: 'latest'
    },

    // Windows 10
    SL_Win10_Chrome: {
      base: 'SauceLabs',
      browserName: 'chrome',
      platform: 'Windows 10',
      version: 'latest'
    },
    SL_Win10_Firefox: {
      base: 'SauceLabs',
      browserName: 'firefox',
      platform: 'Windows 10',
      version: 'latest'
    },
    SL_Win10_IE: {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      platform: 'Windows 10',
      version: 'latest'
    },
    SL_Win10_Edge: {
      base: 'SauceLabs',
      browserName: 'microsoftedge',
      platform: 'Windows 10',
      version: 'latest'
    },

    // Linux
    SL_Linux_Chrome: {
      base: 'SauceLabs',
      browserName: 'chrome',
      platform: 'Linux',
      version: 'latest'
    },
    SL_Linux_Firefox: {
      base: 'SauceLabs',
      browserName: 'firefox',
      platform: 'Linux',
      version: 'latest'
    },

    // MacOS El Capitan 10.11
    SL_OSX11_Chrome: {
      base: 'SauceLabs',
      browserName: 'chrome',
      platform: 'OS X 10.11',
      version: 'latest'
    },
    SL_OSX11_Firefox: {
      base: 'SauceLabs',
      browserName: 'firefox',
      platform: 'OS X 10.11',
      version: 'latest'
    },
    SL_OSX11_Safari: {
      base: 'SauceLabs',
      browserName: 'safari',
      platform: 'OS X 10.11',
      version: 'latest'
    },

    // MacOS Mountain Lion 10.8
    SL_OSX8_Chrome: {
      base: 'SauceLabs',
      browserName: 'chrome',
      platform: 'OS X 10.8',
      version: 'latest'
    },
    SL_OSX8_Firefox: {
      base: 'SauceLabs',
      browserName: 'firefox',
      platform: 'OS X 10.8',
      version: 'latest'
    },
    SL_OSX8_Safari: {
      base: 'SauceLabs',
      browserName: 'safari',
      platform: 'OS X 10.8',
      version: 'latest'
    }
  };

  if (process.env['SAUCELABS'] === 'true') {
    const timeout = 15 * 60 * 1000; // 15 minutes
    configuration.browserNoActivityTimeout = timeout;
    configuration.captureTimeout = timeout;
    configuration.plugins.push(require('karma-sauce-launcher'));
    configuration.customLaunchers = saucelabsBrowsers;
    configuration.browsers = Object.keys(saucelabsBrowsers);
    configuration.sauceLabs = {
      testName: 'EVE Track Client tests'
    };
    configuration.reporters = ['saucelabs', 'mocha'];
  }


  const travisBrowsers = {
    Chrome_travis_ci: {
      base: 'Chrome',
      flags: ['--no-sandbox']
    }
  };

  if (process.env['TRAVIS']) {
    configuration.customLaunchers = travisBrowsers;
    configuration.browsers = Object.keys(travisBrowsers);
  }

  config.set(configuration);
};

# Final Exam

## Instructions

Welcome to the a/A final exam!

> _Before starting this exam, please make sure you are using node version 14.15.0 (see the [Node Versioning](#node-versioning) section below for details)_

The first thing you'll need to do is `npm install` followed by `npm run react-install` and finally `npm run js-install`.

You'll want to work through each section individually. You can run the tests for each section using the commands below!

After running the initial test suite you'll want to review the README for that section and work towards making each test suite pass!

- SystemDesign: `npm test snake`
  You'll have 60 minutes to complete this section

- DS/Algo: `npm test productOfArrayExceptSelf` and `npm test longestNonRepeatingSubstring`
  You'll have 40 minutes to complete this section

- React: `npm run react-test`
  You'll have 60 minutes to complete this section

- JavaScript: `npm run js-test`
  You'll have 90 minutes to complete this section

### Node Versioning

- To find out which version of node your machine is currently running, use the command `node -v` in your terminal
- For easy node version management, we'll use the [Node Version Manager](https://github.com/nvm-sh/nvm)

1. We can use homebrew to install the manager:
   1. update homebrew with `brew update`
   2. install the manager with `brew install nvm`
   3. make a directory for the manger in your root folder with `mkdir ~/.nvm`
   4. finally, in your `~/.zshrc` file for zsh users or in your `.bash_profile` for bash users, add the following:
      ```
      export NVM_DIR=~/.nvm
      source $(brew --prefix nvm)/nvm.sh
      ```
1. Once nvm is installed and configured, we want to install the needed version of node with the command `nvm install 14.15.0`
1. Nvm should automatically set this as the environment version after installation, but confirm with `node -v`
1. In order to switch node versions, use the command `nvm use <desired node version>` (in our case, we want to run `nvm use 14.15.0`)

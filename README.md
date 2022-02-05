# Professional README Generator 

[Professional README Generator](https://github.com/fondofhats/professional-readme-generator)

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/fondofhats/professional-readme-generator)

## Requirements/Description
### Description
An node.js application to quickly and easily generate a README file by using a command-line application to generate one. This allows the project creator to devote more time working on the project.
<br>
### Requirements
#### User Story
>AS A developer<br>
I WANT README generator<br>
SO THAT I can quickly create a professional README for a new project<br>
<br>

>GIVEN a command-line application that accepts user input
>>WHEN I am prompted for information about my application repository<br>
>> + THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions<br>

>>WHEN I enter my project title<br>
>> + THEN this is displayed as the title of the README<br>

>>WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions <br>
>> + this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests <br>

>>WHEN I choose a license for my application from a list of options<br>
>> + THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under<br>

>>WHEN I enter my GitHub username<br>
>> + THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile<br>

>>WHEN I enter my email address<br>
>> + THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions<br>

>>WHEN I click on the links in the Table of Contents<br>
>> + THEN I am taken to the corresponding section of the README<br>

<br>

## Installation

An application that will run in the terminal using node.js.<br /><br />
Run npm install

```shell
npm install
```

Run Readme Generator

```shell
node index.js
```
<br>
<br>

### Screenshot
#### Demonstration

<img src="professional-readme-generator.gif" width="500"/>

<br>

## Issues
[![GitHub issues](https://img.shields.io/github/issues/fondofhats/professional-readme-generator.svg)](https://GitHub.com/fondofhats/professional-readme-generator/issues/)
[![GitHub issues-closed](https://img.shields.io/github/issues-closed/fondofhats/professional-readme-generator.svg)](https://GitHub.com/fondofhats/professional-readme-generator/issues?q=is%3Aissue+is%3Aclosed)

<br>
<br>


## Technologies

* [node.js](https://nodejs.org/)
* [npm](https://www.npmjs.com/)
* [inquirer.js](https://www.npmjs.com/package/inquirer)
* [axios.js](https://www.npmjs.com/package/axios)
* [fs.js](https://www.npmjs.com/package/fs)

#! /usr/bin/env node

var program = require('commander');

program
    .version('0.0.1')
    .option('-v, --version', 'The version of Hello CLI')
    .option('-u, --username <username>', 'The user to greet')
    .parse(process.argv);

let args = process.argv.slice(2);

if (!program.username) {
    console.log("Hello world!");
    console.log("To greet somebody use -u, --username <username>");
    console.log("Check version with -v, --version");
} else
    console.log('Hello, %s!', program.username);

if (!program.version)
    console.log(program.version())


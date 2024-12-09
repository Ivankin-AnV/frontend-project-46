#!/usr/bin/env node
import { Command } from 'commander';
import gendiff from '../src/index.js';

const program = new Command();

program
  .version('0.1.0')
  .description('Compares two configuration files and show a diference.')
  .arguments('<filePath1> <filePath2>')
  .option('-f, --format <type>', 'output format', 'stylish', 'stylish')
  .action((filePath1, filePath2) => {
    console.log(gendiff(filePath1, filePath2));
  });

program.parse();

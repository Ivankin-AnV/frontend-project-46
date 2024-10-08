#!/usr/bin/env node
import { program } from 'commander';

program
  .version('0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format', 'stylish')
  .arguments('<filepath1> <filepath2>');

program.parse();

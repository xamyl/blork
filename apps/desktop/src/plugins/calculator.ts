import { Plugin, Command } from '@blork/core';

export class CalculatorPlugin extends Plugin {
  constructor() {
    super(
      'calculator',
      'Calculator',
      '1.0.0',
      'Blork Team',
      'Perform quick calculations',
      []
    );

    this.registerCommand({
      id: 'add',
      name: 'Add Numbers',
      description: 'Add two numbers together',
      action: () => {
        const result = 2 + 2;
        console.log(`2 + 2 = ${result}`);
      },
    });

    this.registerCommand({
      id: 'multiply',
      name: 'Multiply Numbers',
      description: 'Multiply two numbers together',
      action: () => {
        const result = 3 * 3;
        console.log(`3 * 3 = ${result}`);
      },
    });
  }
} 
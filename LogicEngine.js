const brain = require('brain.js');

class LogicEngine {
  constructor() {
    this.net = new brain.NeuralNetwork();
    this.facts = [];
    this.rules = [];
  }

  train(data) {
    // Ensure `data` is in { input: {}, output: {} } format
    const formattedData = data.map((item) => ({
      input: item.input,
      output: item.output,
    }));
    this.net.train(formattedData);
  }

  run(input) {
    return this.net.run(input);
  }

  loadFacts(facts) {
    // Format facts into { input: {}, output: {} } format
    this.facts = facts.map((fact) => ({
      input: { [fact.fact]: fact.value },
      output: { result: 1 },
    }));
  }

  loadRules(rules) {
    this.rules = rules;
  }

  testHypothesis(hypothesis) {
    if (this.facts.length === 0) {
      throw new Error('No facts loaded for hypothesis testing.');
    }

    this.train(this.facts); // Train with formatted facts
    const input = this.facts[0].input; // Use the first fact for testing
    const output = this.run(input);

    return output.result >= 0.5 ? hypothesis : 'Hypothesis invalid';
  }
}

module.exports = LogicEngine;

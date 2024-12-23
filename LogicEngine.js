const brain = require('brain.js');

class LogicEngine {
  constructor() {
    this.net = new brain.NeuralNetwork();
    this.facts = [];
    this.rules = [];
  }

  train(data) {
    this.net.train(data);
  }

  run(input) {
    return this.net.run(input);
  }

  loadFacts(facts) {
    this.facts = facts;
  }

  loadRules(rules) {
    this.rules = rules;
  }

  testHypothesis(hypothesis) {
    if (this.facts.length === 0) {
      throw new Error("No facts loaded for hypothesis testing.");
    }

    const input = this.facts.map(fact => fact.value);
    this.train(this.facts); // Ensure the network is trained before running
    const output = this.run(input);

    return output >= 0.5 ? hypothesis : "Hypothesis invalid";
  }
}

module.exports = LogicEngine;
// File: abstractReasoning.js
const LogicEngine = require("./LogicEngine.js");

exports.r = (facts, rules, hypothesis) => {
  const engine = new LogicEngine();
  engine.loadFacts(facts);
  engine.loadRules(rules);
  return engine.testHypothesis(hypothesis) ? "Hypothesis valid" : "Hypothesis invalid";
};
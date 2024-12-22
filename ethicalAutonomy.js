// File: ethicalAutonomy.js
exports.e = (actions, valueSystem) => {
    const scores = actions.map((action) => ({
      action,
      score: valueSystem.filter((v) => v.action === action).reduce((sum, v) => sum + v.value, 0),
    }));
    return scores.sort((a, b) => b.score - a.score)[0];
  };
  
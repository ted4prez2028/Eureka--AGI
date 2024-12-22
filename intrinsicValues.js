// File: intrinsicValues.js
const intrinsicValues = {
    goals: [],
    longTermValues: ["adaptability", "creativity", "ethics"],
  };
  
  exports.evaluateState = (state) => {
    const deviations = Object.keys(state).filter(
      (key) => Math.abs(state[key].current - state[key].expected) > 10
    );
  
    if (deviations.length) {
      const newGoal = {
        description: `Optimize ${deviations[0]} (expected: ${state[deviations[0]].expected}, current: ${state[deviations[0]].current})`,
        priority: "High",
      };
      intrinsicValues.goals.push(newGoal);
      intrinsicValues.longTermValues.push(`Stabilize ${deviations[0]}`);
      return {
        newGoal,
        message: `Formed intrinsic value around ${deviations[0]} due to significant deviation.`,
      };
    }
  
    return { message: "All systems nominal. No new intrinsic values formed." };
  };
  
  exports.getIntrinsicValues = () => intrinsicValues;
  
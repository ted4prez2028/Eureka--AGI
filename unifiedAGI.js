const tf = require("@tensorflow/tfjs-node");

// Initialize Models
exports.b = async () => {
  // Dense Model: Processes initial input features
  const p = tf.sequential();
  p.add(tf.layers.dense({ units: 512, activation: "relu", inputShape: [1024] }));
  
  // LSTM Model: Processes sequential data
  const m = tf.sequential();
  m.add(tf.layers.lstm({
    units: 256,
    returnSequences: true,
    inputShape: [10, 1024], // Expecting [timesteps, inputDim]
  }));
  
  // Final Dense Model: Outputs predictions
  const a = tf.sequential();
  a.add(tf.layers.dense({ units: 256, activation: "softmax", inputShape: [256] }));

  return { p, m, a };
};
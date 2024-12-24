const tf = require("@tensorflow/tfjs-node");

exports.b = async () => {
  const p = tf.sequential();
  p.add(tf.layers.dense({ units: 512, activation: "relu", inputShape: [1024] }));

  const m = tf.sequential();
  m.add(tf.layers.lstm({
    units: 256,
    returnSequences: true,
    inputShape: [10, 1024],
  }));
  m.compile({ optimizer: 'adam', loss: 'meanSquaredError' }); // Compile the model

  const a = tf.sequential();
  a.add(tf.layers.dense({ units: 256, activation: "softmax", inputShape: [256] }));

  return { p, m, a };
};
exports.p = async (agi, tensorInput) => {
  if (!tensorInput) {
    throw new Error("Input tensor is undefined. Ensure it is properly created.");
  }
  if (!tensorInput.shape || tensorInput.shape.length !== 3) {
    throw new Error(`Input tensor must be 3-dimensional. Received shape: ${tensorInput.shape}`);
  }

  try {
    const processed = agi.m.predict(tensorInput);
    return processed.arraySync();
  } catch (error) {
    throw new Error(`Error during prediction: ${error.message}`);
  }
};

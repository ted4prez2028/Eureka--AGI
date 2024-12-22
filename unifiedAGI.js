const tf = require("@tensorflow/tfjs-node");

exports.b = async () => {
  // Dense model: inputShape for the first layer is defined correctly
  const p = tf.sequential();
  p.add(tf.layers.dense({ units: 512, activation: "relu", inputShape: [1024] }));

  // LSTM model: LSTM requires inputShape of [timesteps, inputDim]
  const m = tf.sequential();
  m.add(tf.layers.lstm({
    units: 256,
    returnSequences: true,
    inputShape: [10, 1024]  // Correctly specifying inputShape for LSTM
  }));

  const a = tf.sequential();
  a.add(tf.layers.dense({ units: 256, activation: "softmax" }));

  return { p, m, a };
};

exports.p = async (agi, inputs) => {
  // Ensure that inputs are passed in the right shape for the LSTM model
  const tensorInputs = tf.tensor(inputs);

  // Print the shape of the input tensor for debugging
  console.log("Input shape before passing to the model:", tensorInputs.shape);

  // Ensure that inputs are 3D for LSTM: [batchSize, timesteps, inputDim]
  if (tensorInputs.shape.length === 3) {
    const processed = agi.p.predict(tensorInputs);
    return { processed };
  } else {
    console.error("Input data must be 3D for LSTM: [batchSize, timesteps, inputDim]");
    return null;
  }
};

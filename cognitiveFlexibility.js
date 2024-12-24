const tf = require('@tensorflow/tfjs-node');

/**
 * Adapts a given model to a new task context using specified data.
 * @param {tf.Sequential} model - A TensorFlow.js sequential model with layers.
 * @param {Object} taskData - The task-specific data for adaptation.
 * @param {Array} taskData.context - Input data for the new task.
 * @param {Array} taskData.targets - Target output data for the new task.
 * @returns {Promise<string>} - A message indicating successful adaptation.
 */
exports.s = async (model, taskData) => {
  // Validate the input model
  if (!model || !model.layers || typeof model.layers.forEach !== 'function') {
    throw new Error('Invalid model: Ensure the input is a TensorFlow.js model with layers.');
  }

  // Create a new instance of the model structure
  const taskSpecificModel = tf.sequential();
  model.layers.forEach((layer) => {
    taskSpecificModel.add(layer.clone()); // Clone each layer individually
  });

  // Compile the task-specific model
  taskSpecificModel.compile({ optimizer: 'adam', loss: 'meanSquaredError' });

  // Validate task data
  if (!taskData || !taskData.context || !taskData.targets) {
    throw new Error('Invalid task data: Ensure context and targets are provided.');
  }

  // Convert task data to tensors
  const contextTensor = tf.tensor(taskData.context);
  const targetTensor = tf.tensor(taskData.targets);

  // Train the model with the task-specific data
  await taskSpecificModel.fit(contextTensor, targetTensor, { epochs: 5 });

  return 'Model adapted to task context successfully.';
};

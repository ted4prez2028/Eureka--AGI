const trainModel = require('./train');
const predict = require('./predict');

(async () => {
    await trainModel();
    const result = await predict([/* input data */]);
    console.log(result);
})();
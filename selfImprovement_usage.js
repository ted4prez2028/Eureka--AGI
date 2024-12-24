const fs = require('fs');
const path = require('path');
const selfImprovement = require('./selfImprovement');

const frameworkPath = path.join(__dirname);

const improveFramework = () => {
  console.log("Starting self-improvement process...");

  // Get all .js files in the framework directory
  const files = fs.readdirSync(frameworkPath).filter((file) => file.endsWith('.js'));

  files.forEach((file) => {
    const filePath = path.join(frameworkPath, file);

    // Skip the self-improvement script to avoid recursion
    if (file.includes('selfImprovement.js')) return;

    // Improve the file
    const result = selfImprovement.improve(filePath);
    console.log(`Improved ${file}:`, result.status);
  });

  console.log("Self-improvement process completed.");
};

// Run the improvement process
improveFramework();

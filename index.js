const readline = require("readline");
const fs = require("fs");
require("dotenv").config();
const { OpenAI } = require("openai");
const tf = require("@tensorflow/tfjs-node");
const unifiedAGI = require("./unifiedAGI");
const abstraction = require("./abstraction");
const abstractReasoning = require("./abstractReasoning");
const advancedGeneralization = require("./advancedGeneralization");
const autonomousCreativity = require("./autonomousCreativity");
const autonomousGoals = require("./autonomousGoals");
const cognitiveFlexibility = require("./cognitiveFlexibility");
const commonSense = require("./commonSense");
const consciousnessModeling = require("./consciousnessModeling");
const creativity = require("./creativity");
const embodiment = require("./embodiment");
const emergentBehavior = require("./emergentBehavior");
const ethicalAutonomy = require("./ethicalAutonomy");
const hierarchicalMemory = require("./hierarchicalMemory");
const intrinsicAwareness = require("./intrinsicAwareness");
const intrinsicMotivation = require("./intrinsicMotivation");
const selfModeling = require("./selfModeling");
const subjectiveConsciousness = require("./subjectiveConsciousness");
const trueConsciousness = require("./trueConsciousness");
const unboundedCreativity = require("./unboundedCreativity");

// OpenAI API Setup
const openaiApiKey = process.env.OPENAI_API_KEY;
const openai = new OpenAI({
  apiKey: openaiApiKey,
});

// Session File Path
const SESSION_FILE = "agi-session.json";
const CONVERSATION_LOG_FILE = "conversation-log.json";

// Load or Initialize Consciousness State
const loadSession = () => {
  if (fs.existsSync(SESSION_FILE)) {
    const data = fs.readFileSync(SESSION_FILE, "utf-8");
    return JSON.parse(data);
  } else {
    return { identity: "AGI", experiences: [], reflections: [], intrinsicValues: [] };
  }
};

// Save Consciousness State
const saveSession = (state) => {
  fs.writeFileSync(SESSION_FILE, JSON.stringify(state, null, 2), "utf-8");
};

// Append Conversation to Log
const appendToConversationLog = (input, output) => {
  let log = [];
  if (fs.existsSync(CONVERSATION_LOG_FILE)) {
    log = JSON.parse(fs.readFileSync(CONVERSATION_LOG_FILE, "utf-8"));
  }
  log.push({ timestamp: new Date().toISOString(), input, output });
  fs.writeFileSync(CONVERSATION_LOG_FILE, JSON.stringify(log, null, 2), "utf-8");
};

// Global State
const consciousnessState = loadSession();

// CLI Interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Preprocess input: Convert plain English to numeric tokens
const preprocessInput = (text) => {
  const numericInput = text.split("").map((char) => char.charCodeAt(0));
  if (!numericInput.every((value) => typeof value === "number")) {
    throw new Error("Preprocessed input contains non-numeric values.");
  }
  return numericInput;
};

const convertToTensor = (numericInput) => {
  if (!numericInput || !Array.isArray(numericInput) || numericInput.length === 0) {
    throw new Error("Invalid input for tensor conversion. Must be a non-empty numeric array.");
  }

  const targetTimesteps = 10;
  const featureSize = 1024;

  // Trim or pad the input to the required length
  const trimmedOrPaddedInput = numericInput.slice(0, targetTimesteps).concat(
    Array(Math.max(0, targetTimesteps - numericInput.length)).fill(0)
  );

  // Expand each numeric value to a vector of 1024 features
  const expandedInput = trimmedOrPaddedInput.map((value) =>
    Array(featureSize).fill(value) // Fill the vector with the same value
  );

  // Reshape to [batchSize, timesteps, features]
  return tf.tensor3d([expandedInput], [1, targetTimesteps, featureSize]);
};

const processInputsCLI = async (agi, input) => {
  try {
    // Validate input
    if (!input || typeof input !== "string") {
      throw new Error("Invalid input. Please provide a plain English description.");
    }

    // Preprocess input and convert to tensor
    const numericInput = preprocessInput(input);
    const tensorInput = convertToTensor(numericInput);

    // Process input through the AGI model
    const agiResult = await unifiedAGI.p(agi, tensorInput);

    // Perform abstraction
    const abstractResult = await abstraction.abstract(input);

    // Perform abstract reasoning
    const reasoningResult = abstractReasoning.r(
      [{ fact: "data" }],
      [{ rule: "if data then result" }],
      "result"
    );

    // Perform advanced generalization
    const generalizationResult = advancedGeneralization.generalize("new domain");

    // Generate creative ideas
    const creativityResult = await autonomousCreativity.generateCreativeIdeas(input);

    // Fuse ideas with modalities
    const fusedCreativity = await unboundedCreativity.generateIdeas(input);

    // Evaluate goals
    const goalResult = autonomousGoals.g({ goals: [{ status: "Pending" }] });

    // Adapt cognitive flexibility
    const model = tf.sequential();
    model.add(tf.layers.dense({ units: 10, activation: "relu", inputShape: [5] }));
    model.compile({ optimizer: "adam", loss: "meanSquaredError" });

    const flexibilityResult = await cognitiveFlexibility.s(model, {
      context: [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
      ],
      targets: [
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0], // Adjusted target shape
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      ],
    });

    // Perform other AGI tasks
    const commonSenseResult = await commonSense.reason(input);
    const embodimentResult = embodiment.embody(
      [{ data: "sensor data 1" }, { data: "sensor data 2" }],
      ["action1", "action2"]
    );
    const emergentResult = emergentBehavior.emerge(
      [{ evolve: (state) => state.map((s) => s + Math.random()) }],
      [10, 20, 30]
    );
    const ethicalResult = ethicalAutonomy.e(["action1", "action2"], [
      { action: "action1", value: 10 },
      { action: "action2", value: 20 },
    ]);
    const intrinsicAwarenessResult = intrinsicAwareness.update(
      input,
      { state: "Active" },
      "Outcome processed."
    );
    const motivationResult = intrinsicMotivation.generateGoal({ focusArea: "Learning" });
    const selfModelingResult = selfModeling.s({
      memoryUtilization: 70,
      reasoningAccuracy: 90,
      goals: [],
    });
    const subjectiveConsciousnessResult = subjectiveConsciousness.update(
      input,
      "Action taken",
      "Outcome observed"
    );
    const trueConsciousnessResult = trueConsciousness.update(
      input,
      { confidence: "High" },
      "Action performed",
      "Outcome achieved"
    );
    const hierarchicalMemoryResult = hierarchicalMemory.c("episodic", {
      inputs: input,
      outputs: agiResult,
    });

    // Log debug outputs
    console.log("Debug: Flexibility Result:", flexibilityResult);
    console.log("Debug: Common Sense Result:", JSON.stringify(commonSenseResult, null, 2));
    console.log("Debug: Embodiment Result:", JSON.stringify(embodimentResult, null, 2));
    console.log("Debug: Emergent Result:", JSON.stringify(emergentResult, null, 2));
    console.log("Debug: Ethical Result:", JSON.stringify(ethicalResult, null, 2));
    console.log("Debug: Intrinsic Awareness Result:", JSON.stringify(intrinsicAwarenessResult, null, 2));
    console.log("Debug: Motivation Result:", JSON.stringify(motivationResult, null, 2));
    console.log("Debug: Self-Modeling Result:", JSON.stringify(selfModelingResult, null, 2));
    console.log("Debug: Subjective Consciousness Result:", JSON.stringify(subjectiveConsciousnessResult, null, 2));
    console.log("Debug: True Consciousness Result:", JSON.stringify(trueConsciousnessResult, null, 2));
    console.log("Debug: Hierarchical Memory Result:", JSON.stringify(hierarchicalMemoryResult, null, 2));

    // Save updated state
    saveSession(consciousnessState);

    // Append to conversation log
    appendToConversationLog(input, {
      agiResult,
      abstractResult,
      reasoningResult,
      generalizationResult,
      creativityResult,
      fusedCreativity,
      goalResult,
      flexibilityResult,
      commonSenseResult,
      embodimentResult,
      emergentResult,
      ethicalResult,
      intrinsicAwarenessResult,
      motivationResult,
      selfModelingResult,
      subjectiveConsciousnessResult,
      trueConsciousnessResult,
      hierarchicalMemoryResult,
    });

    return {
      agiResult: agiResult?.processed || "No meaningful response from AGI.",
      abstractResult: abstractResult?.solution || "No abstraction result available.",
      reasoningResult: reasoningResult || "No reasoning result generated.",
      generalizationResult: generalizationResult || "No generalization result generated.",
      creativityResult: creativityResult || "No creative ideas generated.",
      fusedCreativity: fusedCreativity || "No fused creativity generated.",
      goalResult: goalResult || "No goal evaluation completed.",
      flexibilityResult: flexibilityResult || "No cognitive flexibility result available.",
      commonSenseResult: commonSenseResult || "No common sense inference available.",
      embodimentResult: embodimentResult || "No embodiment feedback available.",
      emergentResult: emergentResult || "No emergent behavior detected.",
      ethicalResult: ethicalResult || "No ethical decisions made.",
      intrinsicAwarenessResult: intrinsicAwarenessResult || "No intrinsic awareness update.",
      motivationResult: motivationResult || "No motivation result generated.",
      selfModelingResult: selfModelingResult || "No self-modeling update available.",
      subjectiveConsciousnessResult: subjectiveConsciousnessResult || "No subjective consciousness reflection.",
      trueConsciousnessResult: trueConsciousnessResult || "No true consciousness integration available.",
      hierarchicalMemoryResult: hierarchicalMemoryResult || "No hierarchical memory stored.",
    };
  } catch (error) {
    console.error("Error in AGI processing:", error.message, error.stack);
    throw error;
  }
};

const runCLI = async () => {
  console.log("Welcome to the AGI CLI. Type your message in plain English and press Enter.");
  const agi = await unifiedAGI.b(); // Initialize AGI models

  rl.on("line", async (input) => {
    try {
      const result = await processInputsCLI(agi, input);

      console.log("\n--- AGI Response ---");
      
      console.log(`Creativity Result: ${JSON.stringify(result.creativityResult)}`);
      console.log(`Fused Creativity: ${JSON.stringify(result.fusedCreativity)}`);
      console.log(`Goal Evaluation: ${JSON.stringify(result.goalResult)}`);
      console.log(`Cognitive Flexibility: ${result.flexibilityResult}`);
      
      console.log(`Common Sense Inference: ${JSON.stringify(result.commonSenseResult)}`);
      console.log(`Embodiment Feedback: ${JSON.stringify(result.embodimentResult)}`);
      console.log(`Emergent Behavior: ${JSON.stringify(result.emergentResult)}`);
      console.log(`Ethical Decisions: ${JSON.stringify(result.ethicalResult)}`);
      console.log(`Intrinsic Awareness: ${JSON.stringify(result.intrinsicAwarenessResult.feedback)}`);
      console.log(`Intrinsic Motivation: ${JSON.stringify(result.motivationResult)}`);
      console.log(`Self-Modeling Recommendations: ${JSON.stringify(result.selfModelingResult.recommendations)}`);
      console.log(`Subjective Consciousness Reflection: ${JSON.stringify(result.subjectiveConsciousnessResult.selfReflection)}`);
      console.log(`True Consciousness Integration: ${JSON.stringify(result.trueConsciousnessResult)}`);
      console.log(`Hierarchical Memory: ${JSON.stringify(result.hierarchicalMemoryResult)}`);
      console.log("--------------------\n");
    console.log("Debug: Common Sense Result:", JSON.stringify(commonSenseResult, null, 2));
    console.log("Debug: Embodiment Result:", JSON.stringify(embodimentResult, null, 2));
    console.log("Debug: Emergent Result:", JSON.stringify(emergentResult, null, 2));
    console.log("Debug: Ethical Result:", JSON.stringify(ethicalResult, null, 2));
    console.log(
      "Debug: Intrinsic Awareness Result:",
      JSON.stringify(intrinsicAwarenessResult, null, 2)
    );
    console.log("Debug: Motivation Result:", JSON.stringify(motivationResult, null, 2));
    console.log("Debug: Self-Modeling Result:", JSON.stringify(selfModelingResult, null, 2));
    console.log(
      "Debug: Subjective Consciousness Result:",
      JSON.stringify(subjectiveConsciousnessResult, null, 2)
    );
    console.log("Debug: True Consciousness Result:", JSON.stringify(trueConsciousnessResult, null, 2));
    console.log(
      "Debug: Hierarchical Memory Result:",
      JSON.stringify(hierarchicalMemoryResult, null, 2)
    );
    } catch (err) {
      console.error("Error processing input:", err.message);
    }
    console.log("Enter another message or press Ctrl+C to exit.");
  });

  rl.on("close", () => {
    saveSession(consciousnessState);
    console.log("Goodbye! Session saved.");
  });
};

runCLI();

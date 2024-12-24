### **README.md**

```markdown
# Eureka AGI System

The Eureka API integrates with the AGI framework to provide advanced cognitive capabilities, including abstraction, creativity, memory management, and autonomous decision-making. It also offers an API endpoint for easy interaction and project management.

## Features

### Core Modules:
1. **Abstraction** - Solves problems abstractly using generalized knowledge.
2. **Abstract Reasoning** - Uses logic engines for hypothesis testing based on facts and rules.
3. **Advanced Generalization** - Adapts prior models to unknown domains.
4. **Autonomous Creativity** - Generates creative ideas and refines them autonomously.
5. **Goal Management** - Automatically generates and updates goals based on internal states.
6. **Memory Management** - Manages episodic and hierarchical memory.
7. **Ethical Autonomy** - Assesses actions based on a value system and ranks them.
8. **Emergent Behavior** - Simulates evolving strategies from agents interacting with their environment.
9. **Cognitive Flexibility** - Adapts models to specific tasks and contexts dynamically.
10. **Self-Improvement** - Recursively optimizes code for efficiency.
11. **Intrinsic Motivation** - Generates self-improvement goals autonomously.
12. **Subjective and True Consciousness** - Models the AGI's self-awareness and understanding of its actions and outcomes.

### Key Technologies:
- **TensorFlow.js**: Utilized for building deep learning models, including dense layers and LSTM networks.
- **OpenAI API**: Employed for generating abstract solutions, creative ideas, and more.
- **Node.js**: The backend framework, using `express` for routing and `dotenv` for environment variable management.

---

## API Overview

### Base URL
```
http://104.156.226.2:5000
```

### Endpoints

#### **1. `/eureka`**
- **Method**: `POST`
- **Description**: Accepts a prompt to generate JavaScript snippets or manage project modifications.

#### Request Body

- **Format**: JSON
- **Required Fields**:
  - `prompt`: A string describing what the API should generate or modify.

#### Example Request

```bash
curl -X POST http://104.156.226.2:5000/eureka \
-H "Content-Type: application/json" \
-d '{
  "prompt": "Write a function in JavaScript to reverse a string"
}'
```

#### Example Response

```json
{
  "result": "// File: reverseString.js\nfunction reverseString(str) {\n  return str.split('').reverse().join('');\n}"
}
```

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repository-name.git
   ```

2. Navigate to the project directory:
   ```bash
   cd your-repository-name
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Set up the environment:
   Create a `.env` file and add your OpenAI API key:
   ```env
   OPENAI_API_KEY=your-openai-api-key
   ```

5. Start the server:
   ```bash
   node server.js
   ```

---

## Usage

### Accessing the API

#### **Using Curl**
```bash
curl -X POST http://104.156.226.2:5000/eureka \
-H "Content-Type: application/json" \
-d '{
  "prompt": "Write a function in JavaScript to merge two sorted arrays"
}'
```

#### **Using Node.js with Axios**
```javascript
const axios = require('axios');

const EUREKA_API_URL = "http://104.156.226.2:5000/eureka";

async function queryEureka(prompt) {
  try {
    const response = await axios.post(EUREKA_API_URL, { prompt });
    console.log("Response from Eureka:", response.data.result);
  } catch (error) {
    console.error("Error querying Eureka:", error.response?.data || error.message);
  }
}

queryEureka("Write a function in JavaScript to sort an array.");
```

---

## Example: Generate Creative Idea

To generate a creative idea:
```javascript
const { generateCreativeIdeas } = require('./autonomousCreativity');
const result = await generateCreativeIdeas("new tech product");
console.log(result);
```

---

## Error Handling

- **400 Bad Request**:
  - The `prompt` field is missing or invalid.
  - Ensure your request body includes a valid `prompt`.

- **500 Internal Server Error**:
  - An issue occurred on the server.
  - Retry or contact support if the issue persists.

---

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes and commit them (`git commit -am 'Add feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- **OpenAI** for providing advanced language models.
- **TensorFlow.js** for enabling neural network models in JavaScript.
- **Node.js** for backend development.

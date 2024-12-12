const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  

    export const courseOutline = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate a study material for Python for an Exam and level of difficulty will be Easy with summary of course, list of Chapter along with summary for each chapter, Topic list in each chapter in  All in Json format"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"course_name\": \"Introduction to Python Programming\",\n  \"difficulty\": \"Easy\",\n  \"course_summary\": \"This course provides a gentle introduction to Python programming, covering fundamental concepts and syntax. It is designed for beginners with no prior programming experience, focusing on building a solid foundation for further learning. You'll learn how to write simple programs, work with data, and understand basic programming logic.\",\n  \"chapters\": [\n    {\n      \"chapter_number\": 1,\n      \"chapter_title\": \"Getting Started with Python\",\n      \"chapter_summary\": \"This chapter introduces the Python programming language, how to set up your environment, and write your first basic program. It covers the essential tools and concepts needed to begin coding.\",\n      \"topics\": [\n        \"What is Python?\",\n        \"Why learn Python?\",\n        \"Setting up the Python environment (Installation, IDE/Text Editor)\",\n        \"Writing your first Python program (Hello, World!)\",\n        \"Running Python programs\",\n          \"Understanding basic Python Syntax\"\n        \n      ]\n    },\n    {\n      \"chapter_number\": 2,\n      \"chapter_title\": \"Variables and Data Types\",\n      \"chapter_summary\": \"This chapter introduces the concept of variables, and basic data types including numbers, strings and booleans. It will allow the student to store and manipulate information in Python\",\n      \"topics\": [\n        \"What are variables?\",\n        \"Declaring and assigning variables\",\n        \"Data types: Integers (int), Floating-point numbers (float), Strings (str), Booleans (bool)\",\n        \"Basic operations on data types (+, -, *, /, %, string concatenation)\",\n        \"Type conversion (casting)\"\n      ]\n    },\n    {\n      \"chapter_number\": 3,\n      \"chapter_title\": \"Input and Output\",\n      \"chapter_summary\": \"This chapter teaches how to interact with the user, to display information on the screen and receive input from the user. This will enable the student to write interactive programs.\",\n      \"topics\": [\n        \"The `print()` function for output\",\n        \"Formatting output using f-strings\",\n        \"The `input()` function for user input\",\n        \"Working with user input strings\"\n      ]\n    },\n      {\n          \"chapter_number\": 4,\n          \"chapter_title\": \"Basic Operators and Expressions\",\n          \"chapter_summary\": \"This chapter teaches about operators like arthimetic, comparison and logical. This will enable the student to create complex expressions and perform operations based on conditions.\",\n           \"topics\":[\n               \"Arithmetic Operators (+, -, *, /, %, **, //)\",\n                \"Comparison Operators (==, !=, >, <, >=, <=)\",\n               \"Logical Operators (and, or, not)\",\n               \"Operator precedence\",\n               \"Writing expressions in Python\"\n               ]\n      },\n    {\n      \"chapter_number\": 5,\n      \"chapter_title\": \"Conditional Statements\",\n      \"chapter_summary\": \"This chapter will help you make decisions in programs, based on conditions. The students will use the `if`, `elif` and `else` keywords to control the flow of the program.\",\n      \"topics\": [\n          \"The `if` statement\",\n          \"The `if-else` statement\",\n        \"The `if-elif-else` statement\",\n        \"Nested `if` statements\",\n          \"Simple conditional logic examples\"\n      ]\n    }\n  ]\n}\n```\n"},
          ],
        },
      ],
    });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());

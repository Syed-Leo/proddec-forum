const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const posts = [
  {
    id: 1,
    title: "How to prepare for ML interviews?",
    author: "Syed",
    category: "AI/ML",
    content: "Can someone guide me on ML interview preparation strategies and important topics?"
  },
  {
    id: 2,
    title: "Best React UI libraries?",
    author: "Rahul",
    category: "Frontend",
    content: "What are the best UI libraries for building modern React applications?"
  },
  {
    id: 3,
    title: "Difference between CNN and RNN",
    author: "Ayesha",
    category: "AI/ML",
    content: "I want to understand the practical differences between CNN and RNN."
  },
  {
    id: 4,
    title: "State vs Props in React",
    author: "Karthik",
    category: "Frontend",
    content: "Can someone explain the difference between state and props with examples?"
  },
  {
    id: 5,
    title: "Overfitting in Machine Learning",
    author: "Zoya",
    category: "AI/ML",
    content: "How can we detect and prevent overfitting in ML models?"
  },
  {
    id: 6,
    title: "Best practices for REST APIs",
    author: "Arjun",
    category: "Backend",
    content: "What are industry best practices while designing REST APIs?"
  },
  {
    id: 7,
    title: "Understanding Gradient Descent",
    author: "Meera",
    category: "AI/ML",
    content: "Can someone explain gradient descent in simple terms?"
  },
  {
    id: 8,
    title: "React vs Angular",
    author: "Vikram",
    category: "Frontend",
    content: "Which framework is better for enterprise-level applications?"
  },
  {
    id: 9,
    title: "JWT Authentication Explained",
    author: "Anjali",
    category: "Backend",
    content: "How does JWT authentication work in web applications?"
  },
  {
    id: 10,
    title: "Feature Engineering Techniques",
    author: "Imran",
    category: "AI/ML",
    content: "What are some advanced feature engineering techniques in ML?"
  },
  {
    id: 11,
    title: "CSS Grid vs Flexbox",
    author: "Neha",
    category: "Frontend",
    content: "When should we use Grid instead of Flexbox?"
  },
  {
    id: 12,
    title: "Deployment using Vercel",
    author: "Farhan",
    category: "Frontend",
    content: "How to deploy a React app using Vercel step-by-step?"
  },
  {
    id: 13,
    title: "Introduction to NLP",
    author: "Sara",
    category: "AI/ML",
    content: "What are the basics required to start learning NLP?"
  },
  {
    id: 14,
    title: "Node.js vs Django",
    author: "Ritika",
    category: "Backend",
    content: "Which backend framework is better for scalable systems?"
  },
  {
    id: 15,
    title: "Handling Forms in React",
    author: "Aditya",
    category: "Frontend",
    content: "What is the best way to manage forms and validation in React?"
  },
  {
    id: 16,
    title: "Transfer Learning Explained",
    author: "Nisha",
    category: "AI/ML",
    content: "How does transfer learning help in improving model performance?"
  },
  {
    id: 17,
    title: "Microservices Architecture Basics",
    author: "Kabir",
    category: "Backend",
    content: "Can someone explain microservices architecture in simple words?"
  },
  {
    id: 18,
    title: "React Performance Optimization",
    author: "Ibrahim",
    category: "Frontend",
    content: "What are the best ways to optimize performance in React apps?"
  },
  {
    id: 19,
    title: "Confusion Matrix Explained",
    author: "Hina",
    category: "AI/ML",
    content: "How do we interpret a confusion matrix in classification problems?"
  },
  {
    id: 20,
    title: "Database Indexing Basics",
    author: "Rohan",
    category: "Backend",
    content: "How does indexing improve database query performance?"
  }
];

// GET all posts
app.get("/posts", (req, res) => {
  res.json(posts);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
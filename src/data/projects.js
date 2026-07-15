import summarizer from "../assets/projects/summarizer.png";
import ninjacart from "../assets/projects/ninjacart.png";
import flipitnews from "../assets/projects/flipitnews.png";
import loantap from "../assets/projects/loantap.png";
import portfolio from "../assets/projects/portfolio.png";


const projects = [
  {
    id: 1,
    image: summarizer,
    title: "AI Website Summarizer",
    description:
     "Built an AI-powered application that summarizes website content using Large Language Models, helping users quickly understand lengthy web pages.",
    tech: "React • Groq • LLM",
    github: "https://github.com/MCPraveen1/ai-website-summarizer",
    demo: null,
  },

  {
    id: 2,
    image: flipitnews,
    title: "FlipItNews NLP",
    description:
      "Built an NLP-based text classification model that automatically categorizes news articles into multiple topics.",
    tech: "Python • NLP • Scikit-learn",
    github: "https://github.com/MCPraveen1/FlipItNews-NLP-Classification",
    demo: null,
  },

  {
    id: 3,
    image: ninjacart,
    title: "Ninjacart Computer Vision",
    description:
      "Developed a computer vision model for vegetable image classification using deep learning and transfer learning techniques.",
    tech: "TensorFlow • CNN",
    github: "https://github.com/MCPraveen1/NinjaCart-Computer-Vision-Classification",
    demo: null,
  },

  {
    id: 4,
    image: loantap,
    title: "LoanTap Loan Prediction",
    description:
      "Developed a machine learning model to predict loan defaults using customer demographic and financial data.",
    tech: "Python • Scikit-learn • XGBoost",
    github: "",
    demo: null,
  },

  {
    id: 5,
    image: portfolio,
    title: "React Portfolio",
    description:
      "Designed and developed a responsive React portfolio to showcase AI, Machine Learning and Data Analytics projects using reusable components and modern frontend practices.",
    tech: "React • Vite • CSS",
    github: "https://github.com/MCPraveen1/Portfolio",
    demo: null,
  },
];

export default projects;
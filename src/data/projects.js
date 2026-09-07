import summarizer from "../assets/projects/summarizer.png";
import ninjacart from "../assets/projects/ninjacart.png";
import flipitnews from "../assets/projects/flipitnews.png";
import loantap from "../assets/projects/loantap.png";
import portfolio from "../assets/projects/portfolio.png";
import pdfassistant from "../assets/projects/pdfassistant.png";
import quickbite from "../assets/projects/quickbite-eta.png";
import interviewiq from "../assets/projects/interviewiq.png";
import northwind from "../assets/projects/northwind-exception-desk.png";

const projects = [
  {
    id: 1,
    image: pdfassistant,
    title: "AI PDF Assistant",
    description:
      "AI-powered PDF Assistant that uses Retrieval-Augmented Generation (RAG) to answer questions from uploaded PDF documents.",
    tech: "Python • LangChain • OpenAI • ChromaDB • Gradio",
    github: "https://github.com/MCPraveen1/ai-pdf-assistant",
    demo: null,
  },
  {
    id: 2,
    image: summarizer,
    title: "AI Website Summarizer",
    description:
      "Built an AI-powered application that summarizes website content using Large Language Models, helping users quickly understand lengthy web pages.",
    tech: "React • Groq • LLM",
    github: "https://github.com/MCPraveen1/ai-website-summarizer",
    demo: null,
  },
  {
    id: 3,
    image: flipitnews,
    title: "FlipItNews NLP",
    description:
      "Built an NLP-based text classification model that automatically categorizes news articles into multiple topics.",
    tech: "Python • NLP • Scikit-learn",
    github: "https://github.com/MCPraveen1/FlipItNews-NLP-Classification",
    demo: null,
  },
  {
    id: 4,
    image: ninjacart,
    title: "Ninjacart Computer Vision",
    description:
      "Developed a computer vision model for vegetable image classification using deep learning and transfer learning techniques.",
    tech: "TensorFlow • CNN",
    github: "https://github.com/MCPraveen1/NinjaCart-Computer-Vision-Classification",
    demo: null,
  },
  {
    id: 5,
    image: loantap,
    title: "LoanTap Loan Prediction",
    description:
      "Developed a machine learning model to predict loan defaults using customer demographic and financial data.",
    tech: "Python • Scikit-learn • XGBoost",
    github: "",
    demo: null,
  },
  {
    id: 6,
    image: portfolio,
    title: "React Portfolio",
    description:
      "Designed and developed a responsive React portfolio to showcase AI, Machine Learning and Data Analytics projects using reusable components and modern frontend practices.",
    tech: "React • Vite • CSS",
    github: "https://github.com/MCPraveen1/Portfolio",
    demo: null,
  },
  {
    id: 7,
    image: quickbite,
    title: "QuickBite ETA – Dockerized ML API",
    description:
      "Built and containerized a machine learning API that predicts food delivery ETA using a Random Forest regression model, with model training, serialization and FastAPI inference packaged into a Docker image.",
    tech: "Python • Scikit-learn • FastAPI • Docker",
    github: "https://github.com/MCPraveen1/Docker-ML-API",
    demo: null,
  },
  {
    id: 8,
    image: interviewiq,
    title: "InterviewIQ – AI Interview Coach",
    description:
      "Built an AI-powered interview practice application that evaluates responses using filler-word detection, STAR structure analysis and relevance scoring, and provides final interview reports with personalised AI coaching.",
    tech: "Python • Gradio • LLM • AI Agents",
    github: "https://github.com/MCPraveen1/interviewiq",
    demo: null,
  },
  {
    id: 9,
    image: northwind,
    title: "Northwind Logistics – Shipment Exception Desk",
    description:
      "Built an AI-powered shipment exception triage system that classifies logistics issues, applies deterministic compensation rules, decides auto-resolution versus escalation, and generates customer or internal messages.",
    tech: "Python • LangChain • Groq • Gradio",
    github: "https://github.com/MCPraveen1/northwind-exception-desk",
    demo: null,
  },
];

export default projects;

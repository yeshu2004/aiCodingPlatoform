const express = require('express')
const router = express()

const jobs = [
    {
      id: 1,
      jobCompany: "Zanskar Tech Private Limited",
      jobTitle: "React Native Developer",
      jobDescription: "Zanskar Tech is looking for a talented React Native Developer to develop and maintain mobile applications for both iOS and Android. As part of our team, you will collaborate with designers, backend developers, and product managers to build intuitive and high-performance mobile apps. Your role will involve implementing UI components, ensuring smooth performance, debugging issues, and integrating APIs. Our goal is to create mobile solutions that enhance user engagement and simplify complex workflows. The ideal candidate should have experience in React Native, JavaScript, and TypeScript, along with state management using Redux or Context API. Familiarity with RESTful APIs, Firebase, and cloud-based backend services is required. At least one year of experience in mobile development is preferred."
    },
    {
      id: 2,
      jobCompany: "Indeed",
      jobTitle: "Software Engineer I",
      jobDescription: "Indeed is seeking a Software Engineer to develop and optimize scalable software solutions that improve the job search experience for millions worldwide. In this role, you will be responsible for designing efficient algorithms, improving system performance, and ensuring seamless data processing. You will collaborate with product managers, designers, and engineers to create innovative platform features. Our mission is to make job searching faster and more effective through advanced technology. Ideal candidates should have strong programming skills in Java, Python, or C++, experience with cloud computing (AWS, Google Cloud, or Azure), and a solid understanding of data structures and system design. A minimum of two years of experience in software development is preferred."
    },
    {
      id: 3,
      jobCompany: "CG VIZ STUDIO",
      jobTitle: "Full Stack Developer",
      jobDescription: "CG VIZ STUDIO is hiring a Full Stack Developer to build and maintain dynamic web applications. You will work with both frontend and backend technologies to develop responsive, high-performance applications that meet business needs. Responsibilities include designing scalable architecture, implementing APIs, optimizing database queries, and ensuring security best practices. We aim to create innovative digital solutions that provide seamless user experiences. The ideal candidate should have hands-on experience with JavaScript, React.js, Node.js, and databases such as MongoDB or PostgreSQL. Knowledge of cloud services like AWS or Firebase is a plus. At least two years of experience in full-stack development is required."
    },
    {
      id: 4,
      jobCompany: "Tech Innovators Inc.",
      jobTitle: "Machine Learning Engineer",
      jobDescription: "Tech Innovators Inc. is seeking a Machine Learning Engineer to design and deploy AI-driven solutions for real-world applications. In this role, you will develop, train, and fine-tune machine learning models, work with large datasets, and optimize algorithms for efficiency and accuracy. Collaboration with data scientists, software engineers, and product teams will be crucial to delivering AI-powered products. Our mission is to drive innovation through AI and automation. The ideal candidate should have expertise in Python, TensorFlow, PyTorch, and deep learning frameworks. Experience with cloud-based ML deployment (AWS SageMaker, Google AI Platform) and MLOps practices is highly desirable. A minimum of two years of experience in machine learning is preferred."
    },
    {
      id: 5,
      jobCompany: "CloudByte Solutions",
      jobTitle: "DevOps Engineer",
      jobDescription: "CloudByte Solutions is hiring a DevOps Engineer to manage cloud infrastructure, automate deployment pipelines, and enhance system reliability. You will work with CI/CD tools, container orchestration platforms, and monitoring solutions to ensure seamless software delivery. Your role will involve optimizing cloud resources, enhancing security, and collaborating with development teams to improve workflow automation. Our goal is to build scalable and resilient infrastructure that supports high-performance applications. The ideal candidate should have experience with Docker, Kubernetes, Terraform, AWS, and CI/CD pipelines using Jenkins or GitHub Actions. A strong background in Linux administration and scripting (Bash, Python) is required. At least three years of experience in DevOps is preferred."
    }
  ];

router.get("/jobs",(req,res)=>{
    res.json(jobs)
})


module.exports = router
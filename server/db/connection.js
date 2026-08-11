import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

// Fallback seed data accurately matching Ahsan Mehmood's Resume
const fallbackData = {
  profile: {
    name: 'Ahsan Mehmood',
    title: 'Senior QA Automation Engineer',
    tagline: 'Specializing in Mobile Automation (Appium), E2E Web Testing (Selenium, Playwright, Cypress), & Full-Stack Development',
    bio: 'Results-driven Senior QA Automation Engineer and Full-Stack Developer with 3+ years of experience designing scalable automation frameworks (Appium, Selenium, Playwright, Rest Assured) and building production web applications in React, Next.js, Node.js, and MySQL/PostgreSQL.',
    location: 'Lahore, Pakistan',
    email: 'ahsanmehmood7854@gmail.com',
    phone: '(+92) 308-1075251',
    github: 'https://github.com/ahsan7854',
    linkedin: 'https://linkedin.com/in/mian-ahsan-mehmood',
    status: 'Open for Senior Roles & Consulting',
    education: 'BS Software Engineering - University of Central Punjab (CGPA: 3.55)'
  },
  services: [
    {
      id: 1,
      title: 'Mobile & Web QA Automation',
      icon: 'ShieldCheck',
      short_desc: 'Architecting scalable hybrid automation frameworks for iOS/Android (Appium) and Web (Selenium, Playwright, Cypress) with CI/CD integration.',
      deliverables: ['Appium Mobile Automation (iOS & Android)', 'Selenium & Playwright Web E2E Suites', 'TestNG & Cucumber BDD (POM Pattern)', '85%+ Automated Test Coverage Gates'],
      tools: ['Appium', 'Selenium', 'Playwright', 'Cypress', 'Java', 'TestNG', 'Cucumber', 'GitHub Actions']
    },
    {
      id: 2,
      title: 'API & Performance Testing',
      icon: 'Cpu',
      short_desc: 'Validating microservices, RESTful APIs, HTTP status codes, JSON schemas, and running performance load benchmarks.',
      deliverables: ['Rest Assured & Postman API Automation', 'JSON/XML Schema & Data Integrity Validation', 'Performance & Load Testing (JMeter, Gatling)', 'SQL Query Verification across MySQL/PostgreSQL'],
      tools: ['Rest Assured', 'Postman', 'JMeter', 'Gatling', 'SQL', 'MySQL', 'PostgreSQL', 'Python']
    },
    {
      id: 3,
      title: 'Full Stack Web Development',
      icon: 'Code2',
      short_desc: 'Developing production-grade, high-throughput web applications with React, Next.js, Node.js Express APIs, and relational databases.',
      deliverables: ['React & Next.js Modern Web Applications', 'Node.js REST API & Microservice Backend', 'MySQL / PostgreSQL Database Optimization', 'CI/CD Pipelines & Clean Architecture'],
      tools: ['React.js', 'Next.js', 'Node.js', 'Express', 'MySQL', 'MongoDB', 'TypeScript', 'Docker']
    }
  ],
  skills: [
    { id: 1, category: 'QA & Testing', name: 'Appium (iOS & Android)', level: 95, icon: 'TestTube', featured: true },
    { id: 2, category: 'QA & Testing', name: 'Selenium WebDriver & Java', level: 96, icon: 'CheckCircle2', featured: true },
    { id: 3, category: 'QA & Testing', name: 'Playwright & Cypress', level: 90, icon: 'TestTube', featured: true },
    { id: 4, category: 'QA & Testing', name: 'Rest Assured & Postman APIs', level: 94, icon: 'Network', featured: true },
    { id: 5, category: 'QA & Testing', name: 'Cucumber BDD & TestNG (POM)', level: 95, icon: 'CheckCircle2', featured: true },
    { id: 6, category: 'QA & Testing', name: 'JMeter & Performance Testing', level: 85, icon: 'Layers', featured: false },
    { id: 7, category: 'QA & Testing', name: 'CI/CD (GitHub Actions & Jenkins)', level: 90, icon: 'GitBranch', featured: true },
    { id: 8, category: 'Full Stack', name: 'Java (Primary Language)', level: 95, icon: 'FileCode', featured: true },
    { id: 9, category: 'Full Stack', name: 'JavaScript (ES6+) & Python', level: 92, icon: 'Terminal', featured: true },
    { id: 10, category: 'Full Stack', name: 'React.js & Next.js', level: 90, icon: 'Atom', featured: true },
    { id: 11, category: 'Full Stack', name: 'Node.js & Express REST APIs', level: 88, icon: 'Server', featured: true },
    { id: 12, category: 'Full Stack', name: 'SQL (MySQL & PostgreSQL)', level: 92, icon: 'Database', featured: true },
    { id: 13, category: 'Full Stack', name: 'HTML5, CSS3 & Tailwind', level: 94, icon: 'Layers', featured: false },
    { id: 14, category: 'Full Stack', name: 'RPA & Process Automation', level: 85, icon: 'Cpu', featured: false }
  ],
  projects: [
    {
      id: 1,
      title: 'Price Comparison Platform — Automation Lead',
      category: 'qa',
      short_description: 'Designed & implemented E2E test automation for a real-time price comparison platform aggregating e-commerce data.',
      full_description: 'Built comprehensive API & UI automation suites using Rest Assured, Java, and Python to validate web scraping modules, price alert triggers, and data accuracy. Applied AI-assisted test generation techniques to improve coverage efficiency and integrated CI/CD for continuous validation.',
      technologies: ['Rest Assured', 'Java', 'Python', 'API Automation', 'GitHub Actions', 'AI Test Gen'],
      image_url: '/assets/projects/qa_automation_suite.png',
      demo_url: 'https://github.com/ahsan7854',
      github_url: 'https://github.com/ahsan7854',
      metrics: '40% Regression Time Reduction'
    },
    {
      id: 2,
      title: 'Full-Stack Web App — Proviloops International',
      category: 'fullstack',
      short_description: 'Production-grade web application built with React, Next.js, Node.js REST APIs, and MySQL databases.',
      full_description: 'Developed scalable frontend interfaces and Node.js backend RESTful endpoints with Postman validation. Applied engineering best practices including unit testing, code reviews, SQL query optimization, and CI/CD delivery pipelines.',
      technologies: ['React.js', 'Next.js', 'Node.js', 'Express', 'MySQL', 'Postman'],
      image_url: '/assets/projects/fullstack_ecommerce.png',
      demo_url: 'https://github.com/ahsan7854',
      github_url: 'https://github.com/ahsan7854',
      metrics: '100% Verified REST Endpoints'
    },
    {
      id: 3,
      title: 'E-Commerce E2E & Load Testing QA Suite',
      category: 'qa',
      short_description: 'Automated E2E e-commerce workflows (product listing, cart, checkout, payment) with Selenium, POM, and JMeter.',
      full_description: 'Engineered Selenium WebDriver + Page Object Model (POM) test framework with Java. Conducted cross-browser testing on BrowserStack across Chrome, Firefox, Safari, and Edge. Executed payment gateway API validation and JMeter performance load benchmarks.',
      technologies: ['Selenium WebDriver', 'Java', 'POM', 'BrowserStack', 'Postman', 'JMeter'],
      image_url: '/assets/projects/ai_rag_assistant.png',
      demo_url: 'https://github.com/ahsan7854',
      github_url: 'https://github.com/ahsan7854',
      metrics: '85%+ Test Coverage'
    }
  ],
  experiences: [
    {
      id: 1,
      role: 'Senior QA Automation Engineer',
      company: 'TEXASIS',
      period: 'Jan 2025 – Present',
      location: 'Lahore, Pakistan',
      highlights: [
        'Architected and developed a scalable hybrid automation framework using Appium + Java for mobile (iOS/Android) and Selenium WebDriver for web, reducing regression cycle time by 40%.',
        'Engineered multi-layer test suites in Java covering UI, API, and integration layers using TestNG and Cucumber BDD, achieving 85%+ automated test coverage across critical user flows.',
        'Implemented advanced API test automation with Rest Assured and Postman, validating RESTful endpoints, HTTP status codes, JSON schema, and data integrity across microservices.',
        'Built CI/CD integration using GitHub Actions — automated smoke and regression pipelines triggered on every pull request for real-time quality gates during deployments.'
      ]
    },
    {
      id: 2,
      role: 'Full Stack Developer',
      company: 'Proviloops International',
      period: 'Aug 2024 – Dec 2024',
      location: 'Lahore, Pakistan',
      highlights: [
        'Built production-grade web applications in React and Next.js; applied engineering best practices including unit testing, code review, and CI/CD delivery pipelines.',
        'Developed and tested RESTful APIs using Node.js and validated them with Postman to ensure reliable frontend-backend communication and data consistency.',
        'Contributed to test automation strategy by providing developers perspective on testability, improving test script accuracy for the QA team.'
      ]
    },
    {
      id: 3,
      role: 'WordPress & QA Support Engineer',
      company: 'Shaukat Khanum Memorial Cancer Hospital',
      period: 'Jul 2022 – Jul 2023',
      location: 'Lahore, Pakistan',
      highlights: [
        'Executed functional, regression, cross-browser, and responsive testing across web applications on desktop and mobile platforms.',
        'Developed Selenium WebDriver test scripts to automate repetitive regression scenarios, reducing manual testing effort during release cycles.',
        'Identified, logged, and tracked defects in JIRA with detailed reproduction steps, environment data, and severity classification.'
      ]
    }
  ],
  messages: []
};

let pool = null;
let isConnected = false;

try {
  pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'portfolio_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    connectTimeout: 2000
  });

  const conn = await pool.getConnection();
  conn.release();
  isConnected = true;
  console.log('✅ Connected to MySQL Database successfully.');
} catch (err) {
  console.warn('⚠️  MySQL connection failed or server not running locally. Using in-memory fallback dataset.');
  isConnected = false;
}

export const getDbData = async (table) => {
  if (isConnected && pool) {
    try {
      const [rows] = await pool.query(`SELECT * FROM ${table}`);
      return rows;
    } catch (e) {
      console.warn(`Query failed for table ${table}, returning fallback data.`);
    }
  }
  return fallbackData[table] || [];
};

export const saveMessage = async (msg) => {
  if (isConnected && pool) {
    try {
      const [result] = await pool.query(
        `INSERT INTO contact_messages (sender_name, sender_email, subject, message) VALUES (?, ?, ?, ?)`,
        [msg.name, msg.email, msg.subject || 'Portfolio Inquiry', msg.message]
      );
      return { success: true, id: result.insertId, source: 'mysql' };
    } catch (e) {
      console.error('Failed to save message to MySQL:', e);
    }
  }
  const newMsg = { id: Date.now(), ...msg, created_at: new Date() };
  fallbackData.messages.push(newMsg);
  return { success: true, id: newMsg.id, source: 'memory' };
};

export { isConnected };

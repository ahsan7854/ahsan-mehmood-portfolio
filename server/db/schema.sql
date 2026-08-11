-- MySQL Database Schema for Software Engineer Portfolio
CREATE DATABASE IF NOT EXISTS portfolio_db;
USE portfolio_db;

-- 1. Profile Table
CREATE TABLE IF NOT EXISTS profile (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    title VARCHAR(150) NOT NULL,
    tagline TEXT,
    bio TEXT,
    location VARCHAR(100),
    email VARCHAR(100),
    github VARCHAR(255),
    linkedin VARCHAR(255),
    status VARCHAR(100) DEFAULT 'Open for Opportunities',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Services Table
CREATE TABLE IF NOT EXISTS services (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    icon VARCHAR(50) NOT NULL,
    short_desc TEXT NOT NULL,
    deliverables JSON,
    tools JSON,
    display_order INT DEFAULT 0
);

-- 3. Skills Table
CREATE TABLE IF NOT EXISTS skills (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(100) NOT NULL,
    name VARCHAR(100) NOT NULL,
    level INT NOT NULL CHECK (level BETWEEN 1 AND 100),
    icon VARCHAR(50),
    featured BOOLEAN DEFAULT FALSE
);

-- 4. Projects Table
CREATE TABLE IF NOT EXISTS projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    category VARCHAR(50) NOT NULL, -- 'qa', 'fullstack', 'ai'
    short_description TEXT NOT NULL,
    full_description TEXT NOT NULL,
    technologies JSON NOT NULL,
    image_url VARCHAR(255),
    demo_url VARCHAR(255),
    github_url VARCHAR(255),
    featured BOOLEAN DEFAULT FALSE,
    metrics VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 5. Experiences Table
CREATE TABLE IF NOT EXISTS experiences (
    id INT AUTO_INCREMENT PRIMARY KEY,
    role VARCHAR(150) NOT NULL,
    company VARCHAR(150) NOT NULL,
    period VARCHAR(100) NOT NULL,
    location VARCHAR(100),
    type VARCHAR(50) DEFAULT 'Full-time',
    highlights JSON,
    display_order INT DEFAULT 0
);

-- 6. Contact Messages Table
CREATE TABLE IF NOT EXISTS contact_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    sender_name VARCHAR(100) NOT NULL,
    sender_email VARCHAR(100) NOT NULL,
    subject VARCHAR(200),
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Seed Data Insertion
INSERT INTO profile (name, title, tagline, bio, location, email, github, linkedin) VALUES
('Ahsan Mehmood', 'Software Engineer', 'Building Resilient Web Applications, Automated QA Ecosystems, & Intelligent AI Systems', 
'Passionate Software Engineer specializing in Full-Stack Web Development, QA Automation Architecture, and AI Agent Integration. I build end-to-end applications with robust test suites, high performance, and cutting-edge machine learning capabilities.', 
'Pakistan', 'ahsanmehmood7854@gmail.com', 'https://github.com/ahsan7854', 'https://www.linkedin.com/in/mian-ahsan-mehmood/')
ON DUPLICATE KEY UPDATE id=id;

INSERT INTO services (title, icon, short_desc, deliverables, tools, display_order) VALUES
('QA Automation Engineering', 'ShieldCheck', 'Designing resilient automated test frameworks, regression suites, and continuous integration pipelines for zero-defect releases.', 
'["End-to-End E2E Test Suites", "API & Microservice Integration Testing", "CI/CD Pipeline Test Automation", "Performance & Load Testing Reports"]',
'["Playwright", "Cypress", "Selenium", "Jest / Vitest", "Postman", "GitHub Actions"]', 1),

('Full Stack Development', 'Code2', 'Architecting scalable web applications from responsive frontends in React to high-throughput Node.js microservices & MySQL databases.', 
'["Single Page React Apps", "REST & GraphQL API Architecture", "MySQL Schema Design & Optimization", "Secure Authentication & Payments"]',
'["React.js", "Node.js", "Express", "MySQL", "TypeScript", "Tailwind/Vanilla CSS", "Docker"]', 2),

('AI Engineering & Integration', 'Cpu', 'Integrating Intelligent LLMs, RAG knowledge stores, autonomous AI agents, and computer vision models into enterprise workflows.', 
'["Custom RAG & Vector Search", "LLM Fine-Tuning & Prompt Engineering", "Autonomous Agent Workflows", "AI Model Deployment & APIs"]',
'["PyTorch", "LangChain / LlamaIndex", "OpenAI / Gemini API", "Python", "FastAPI", "VectorDB"]', 3)
ON DUPLICATE KEY UPDATE id=id;

INSERT INTO skills (category, name, level, icon, featured) VALUES
('QA & Testing', 'Playwright & Cypress', 95, 'TestTube', TRUE),
('QA & Testing', 'Jest / Vitest / Mocha', 92, 'CheckCircle2', TRUE),
('QA & Testing', 'API Automation & Postman', 90, 'Network', FALSE),
('QA & Testing', 'CI/CD & GitHub Actions', 88, 'GitBranch', FALSE),

('Full Stack', 'React.js & Hooks', 96, 'Atom', TRUE),
('Full Stack', 'Node.js & Express', 94, 'Server', TRUE),
('Full Stack', 'MySQL & Relational Design', 90, 'Database', TRUE),
('Full Stack', 'JavaScript (ES6+) & TypeScript', 95, 'FileCode', TRUE),

('AI & ML', 'Python & FastAPI', 92, 'Terminal', TRUE),
('AI & ML', 'LLM Integration & RAG', 88, 'Brain', TRUE),
('AI & ML', 'Vector Databases & Embeddings', 85, 'Sparkles', FALSE),
('AI & ML', 'PyTorch / ML Pipelines', 80, 'Layers', FALSE)
ON DUPLICATE KEY UPDATE id=id;

INSERT INTO projects (title, category, short_description, full_description, technologies, image_url, demo_url, github_url, featured, metrics) VALUES
('OmniTest: Enterprise E2E QA Suite', 'qa', 
'Autonomous multi-browser testing platform running parallel Playwright regression suites across cloud instances.', 
'Comprehensive QA Automation framework capable of executing 500+ parallel test specs across Chrome, Firefox, and WebKit. Features auto-retries, visual regression diffs, and real-time slack reporting.',
'["Playwright", "TypeScript", "Docker", "GitHub Actions", "Node.js"]', 
'/assets/projects/qa_automation_suite.png', 'https://example.com/omnitest', 'https://github.com', TRUE, '99.4% Flakiness Reduction'),

('NexusCloud: Full-Stack E-Commerce Platform', 'fullstack', 
'High-throughput SaaS store built with React, Node.js Express REST API, and optimized MySQL relational database.', 
'Complete e-commerce backend and frontend solution with real-time inventory management, MySQL connection pooling, secure payment webhooks, and modern glassmorphic dashboard UI.',
'["React.js", "Node.js", "Express", "MySQL", "CSS Modules"]', 
'/assets/projects/fullstack_ecommerce.png', 'https://example.com/nexuscloud', 'https://github.com', TRUE, '120ms Avg API Latency'),

('Agentic Insights: RAG Knowledge Assistant', 'ai', 
'AI-powered document intelligence engine utilizing vector search, LLM summaries, and agentic task execution.', 
'Engineered a RAG engine that digests complex PDF documents and technical documentation, providing semantic search, conversational Q&A, and structured JSON output using LLM APIs.',
'["Python", "FastAPI", "React", "Vector DB", "Gemini API"]', 
'/assets/projects/ai_rag_assistant.png', 'https://example.com/agentic', 'https://github.com', TRUE, '98% Search Precision')
ON DUPLICATE KEY UPDATE id=id;

INSERT INTO experiences (role, company, period, location, type, highlights, display_order) VALUES
('Senior Software Engineer', 'Aegis Tech Solutions', '2023 - Present', 'San Francisco, CA', 'Full-time', 
'["Led cross-functional team of 6 engineers building cloud SaaS features with React and Node.js.", "Architected Playwright E2E automation pipeline reducing regression cycle time by 75%.", "Integrated Gemini & OpenAI APIs into core product, driving 35% user engagement boost."]', 1),

('QA Automation Lead', 'DataPulse Systems', '2021 - 2023', 'Austin, TX', 'Full-time', 
'["Built full-stack test reporting dashboard with React, Express, and MySQL.", "Created automated API testing suite covering 200+ REST microservice endpoints.", "Mentored junior QA engineers in TypeScript and CI/CD best practices."]', 2),

('Full Stack Engineer', 'Novus Code Labs', '2019 - 2021', 'Remote', 'Full-time', 
'["Developed scalable React frontends and Node.js REST services with MySQL database optimization.", "Implemented containerized development environments with Docker."]', 3)
ON DUPLICATE KEY UPDATE id=id;

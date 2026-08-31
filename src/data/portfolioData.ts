import {
  EducationData,
  ProjectData,
  ExperienceData,
  AchievementData,
  CertificationData,
  TimesOfIndiaData,
  TimelineMilestone,
} from '../types';

export const PERSONAL_INFO = {
  name: 'Surbhi',
  title: 'Computer Science Student • Software Developer • AI/ML Explorer',
  university: 'Lovely Professional University, Punjab, India',
  degree: 'Bachelor of Technology in Computer Science and Engineering',
  started: 'August 2025',
  targetYear: 'Class of 2029',
  location: 'Bareilly, Uttar Pradesh',
  careerDirection: 'Aspiring AI/ML Engineer and Software Developer',
  email: 'gangwarsurbhi57@gmail.com',
  linkedin: 'https://www.linkedin.com/in/surbhi-g001',
  github: 'https://github.com/SurbhiX1',
  cvPath: '/assets/Surbhi-CV.pdf',
  photoPath: '/assets/profile.jpg',
  supportingText: 'Building practical solutions through code, curiosity, and continuous learning.',
  aboutParagraphs: [
    'I am a Computer Science and Engineering student at Lovely Professional University with a strong academic foundation and a growing interest in software development and AI/ML.',
    'I enjoy turning concepts into practical projects, solving problems through code and learning by building.',
    'Beyond academics, I have explored leadership, student representation, hackathons and team-based activities, which have helped me develop communication, collaboration and organizational skills.',
  ],
  currently: [
    'Pursuing B.Tech CSE (Started Aug 2025)',
    'Exploring AI/ML and mathematical foundations',
    'Building technical projects with real hardware and software',
    'Strengthening software development & system design',
    'Improving algorithmic problem-solving skills',
  ],
};

export const EDUCATION_DATA: EducationData = {
  institution: 'Lovely Professional University',
  degree: 'Bachelor of Technology — Computer Science and Engineering',
  location: 'Punjab, India',
  period: '2025 – 2029',
  currentCgpa: '9.49',
  cgpaLabel: 'Current CGPA',
  status: 'In Progress • Undergraduate Degree',
  highlights: [
    'Strong foundation in Object-Oriented Programming, Data Structures & Python',
    'Comprehensive coursework in Database Management, Mathematics & Software Systems',
    'Consistent top-tier academic performance and engineering problem solving',
  ],
};

export const SKILLS_DATA = {
  programming: [
    { name: 'C', level: 'Proficient', description: 'Procedural programming, memory management & pointer operations' },
    { name: 'Java', level: 'Proficient', description: 'Object-oriented programming, classes, packages, & standard collections' },
    { name: 'Python', level: 'Proficient', description: 'Scripting, CSV handling, computational logic, and foundational libraries' },
    { name: 'JavaScript', level: 'Intermediate', description: 'DOM manipulation, modern ES6+ syntax, asynchronous programming' },
    { name: 'C++', level: 'Basics', description: 'Core syntax, fundamental OOP principles, and basic I/O' },
  ],
  computerScience: [
    { name: 'Data Structures & Algorithms (Java)', level: 'Active', description: 'Arrays, Linked Lists, Stacks, Queues, Trees, Searching & Sorting algorithms' },
    { name: 'Problem Solving', level: 'Active', description: 'Translating algorithmic concepts into optimal, testable code implementations' },
  ],
  web: [
    { name: 'HTML5', level: 'Proficient', description: 'Semantic structure, accessibility markup, clean DOM hierarchy' },
    { name: 'CSS3', level: 'Proficient', description: 'Flexbox, Grid, responsive viewports, keyframe animations & styling' },
  ],
  database: [
    { name: 'MySQL', level: 'Proficient', description: 'Relational database schema design, querying, JOINs, filtering & indexing' },
  ],
  tools: [
    { name: 'Git', level: 'Tooling', description: 'Version control, commit hygiene, branch management' },
    { name: 'GitHub', level: 'Tooling', description: 'Repository hosting, collaboration, workflow tracking' },
    { name: 'VS Code', level: 'Environment', description: 'Primary code editor, debugging, extension configuration' },
    { name: 'Figma', level: 'Design', description: 'UI wireframing, component mockups, layout planning' },
    { name: 'Canva', level: 'Creative', description: 'Visual assets, event posters, presentation graphics' },
  ],
  platforms: [
    { name: 'LeetCode', level: 'Practice', description: 'Algorithmic problem practice across array, string, and math categories' },
    { name: 'HackerRank', level: 'Practice', description: 'Language proficiencies, competitive challenges, and problem solving' },
  ],
  softSkills: [
    { name: 'Problem-Solving', tag: 'Cognitive' },
    { name: 'Team Collaboration', tag: 'People' },
    { name: 'Project Management', tag: 'Execution' },
    { name: 'Adaptability', tag: 'Growth' },
    { name: 'Communication', tag: 'People' },
    { name: 'Time Management', tag: 'Execution' },
    { name: 'Presentation Skills', tag: 'Leadership' },
  ],
};

export const PROJECTS_DATA: ProjectData[] = [
  {
    id: 'forest-surveillance',
    title: 'Forest Surveillance and Fire Prediction & Detection System',
    category: 'IoT + Web Dashboard',
    tagline: 'Real-time environmental monitoring combining ESP32 microcontrollers, telemetry sensors, LoRa wireless transmission, and an interactive telemetry dashboard.',
    description: 'Developed a real-time forest surveillance system using ESP32 and sensors to detect temperature, humidity, smoke, gas and flame levels. Built a dashboard to visualize live data using gauges and charts and stored readings using MySQL.',
    problem: 'Forest fires often propagate undetected until they reach catastrophic scales, causing devastating environmental and wildlife destruction before traditional observation posts can trigger alarms.',
    solution: 'Engineered an integrated hardware-software surveillance prototype leveraging ESP32 microcontrollers wired to multimodal sensors (temperature, humidity, smoke, gas, flame). Real-time telemetry is transmitted, recorded in a structured MySQL database, and visualized instantaneously via an interactive web dashboard with reactive indicators and warning thresholds.',
    technologies: ['ESP32', 'Multimodal Sensors', 'LoRa Wireless', 'HTML5', 'CSS3', 'JavaScript', 'MySQL'],
    keyFeatures: [
      'Multi-sensor telemetry pipeline (temperature, humidity, combustible gas, flame detection)',
      'Real-time web monitoring interface equipped with dynamic gauges and status charts',
      'Persistent environmental data logging powered by structured MySQL tables',
      'Low-power sensor telemetry architecture suitable for remote environmental observation',
      'Instant visual alert thresholds triggered on anomalous temperature/smoke spike values',
    ],
    whatILearned: [
      'Interfacing physical analog/digital sensors with ESP32 microcontroller firmwares',
      'Structuring relational schemas to handle continuous time-series telemetry data without bottlenecking',
      'Connecting hardware data feeds to frontend visual dashboards using asynchronous JavaScript',
      'Handling edge cases in wireless telemetry and sensor drift calibrations',
    ],
    statusText: 'Prototype Completed • Details & Documentation Available',
    repoUrl: undefined,
    demoUrl: undefined,
    type: 'IoT',
  },
  {
    id: 'movie-recommendation',
    title: 'Movie Recommendation System',
    category: 'Python',
    tagline: 'Python-based recommendation utility executing structured CSV dataset querying and rule-based filter logic to match user viewing preferences.',
    description: 'Built a movie suggestion program in Python that reads movie information from a CSV file and recommends movies based on user-selected filters.',
    problem: 'Users frequently face choice paralysis when navigating massive, unstructured movie catalogs without targeted genre, rating, or length preference filters.',
    solution: 'Designed a Python utility that parses structured CSV movie datasets, validates user preference parameters (genre, minimum rating, release timeframe), and systematically filters and scores records using modular functions and conditional logic to output tailored recommendations.',
    technologies: ['Python', 'CSV File Handling', 'Modular Functions', 'Conditional Logic', 'Data Parsing'],
    keyFeatures: [
      'Robust CSV parsing and sanitization for clean metadata extraction',
      'Multi-parameter filter engine supporting genre matching, rating thresholds, and runtime filters',
      'Modular functional architecture allowing easy extension of scoring criteria',
      'Clear terminal/interactive user prompt interface for smooth search queries',
    ],
    whatILearned: [
      'Effective file I/O operations and CSV dataset parsing in native Python',
      'Designing clean, maintainable modular functions with well-defined inputs/outputs',
      'Implementing robust conditional logic and defensive error handling for edge-case user inputs',
      'Structuring command-line user interaction workflows for clear readability',
    ],
    statusText: 'Repository coming soon.',
    repoUrl: undefined,
    demoUrl: undefined,
    type: 'Python',
  },
];

export const EXPERIENCE_DATA: ExperienceData[] = [
  {
    id: 'play-2-unite',
    role: 'Coordinator',
    organization: 'Play 2 Unite Organization',
    location: 'Lovely Professional University',
    period: 'August 2025 – February 2026',
    status: 'completed',
    focusAreas: ['Leadership', 'Organization', 'Event Management', 'Team Collaboration'],
    responsibilities: [
      'Maintained organizational data records and participant databases with meticulous detail.',
      'Worked closely with student peers to plan, schedule, and deliver high-engagement campus events.',
      'Helped coordinate technical workshops, hackathons, and educational training sessions.',
      'Helped coordinate cultural nights, campus celebrations, and interactive student meetups.',
      'Helped coordinate university sports tournaments and competitive e-sports championships.',
      'Helped organize community movie screenings and recreational student gatherings.',
      'Collaborated actively with team members to understand student interests and design impactful campus events.',
    ],
    skillsGained: ['Event Operations', 'Data Record Keeping', 'Cross-team Communication', 'Logistical Planning'],
  },
  {
    id: 'saac-member',
    role: 'Member',
    organization: 'Student Academic Advisory Committee',
    location: 'Lovely Professional University',
    period: 'March 2026 – Present',
    status: 'active',
    focusAreas: ['Student Representation', 'Communication', 'Leadership', 'Collaboration', 'Academic Engagement'],
    responsibilities: [
      'Represent fellow engineering students in discussions related to academic policies and curriculum improvements.',
      'Collaborate directly with faculty leadership and university administration to enhance the student learning experience.',
      'Gather and synthesize peer feedback on course deliveries, lab sessions, and evaluation methodologies.',
      'Provide structured, actionable feedback and recommendations on university-wide academic initiatives.',
    ],
    skillsGained: ['Policy Feedback', 'Academic Representation', 'Stakeholder Communication', 'Constructive Advocacy'],
  },
];

export const ACHIEVEMENTS_DATA: AchievementData[] = [
  {
    id: 'hackmanthon',
    title: 'HackManthon Hackathon',
    event: 'University Level Hackathon',
    badge: 'Runner-up 🥈',
    icon: 'Medal',
    placement: 'Second Position among University Teams',
    description: 'Secured second position among competitive university teams through an intense hackathon sprint.',
    highlights: [
      'Technical problem-solving under strict time constraints',
      'Rapid iterative prototyping and architecture design',
      'Effective team collaboration and presentation of the working solution',
    ],
  },
  {
    id: 'sih-nomination',
    title: 'Smart India Hackathon (SIH)',
    event: 'SIH Grand Finale Selection',
    badge: 'Nominated / Shortlisted 🇮🇳',
    icon: 'Award',
    placement: 'Shortlisted to Represent University at National Level',
    description: 'Evaluated and officially shortlisted through internal university screening to represent Lovely Professional University at the national Smart India Hackathon Grand Finale stage.',
    highlights: [
      'National-level problem statement analysis and solution proposal',
      'Competitive screening across university engineering cohorts',
      'Multi-stage evaluation and technical defense',
    ],
  },
  {
    id: 'basketball-championship',
    title: 'University Inter-School Basketball Championship',
    event: 'LPU Sports Tournament',
    badge: 'Winner 🏆',
    icon: 'Trophy',
    placement: 'Champion with SCSE Basketball Team',
    description: 'Won the championship title as an active team member of the School of Computer Science and Engineering (SCSE) Basketball Team.',
    highlights: [
      'Strategic on-court coordination and tactical execution',
      'Discipline, physical conditioning, and athletic commitment',
      'High-pressure teamwork, resilience, and collective celebration',
    ],
  },
];

export const CERTIFICATIONS_DATA: CertificationData[] = [
  {
    id: 'infosys-python',
    title: 'Python Fundamentals',
    issuer: 'Infosys Springboard',
    category: 'Programming & Logic',
    skills: ['Python Syntax', 'Data Types', 'Control Structures', 'Functions', 'Modular Code'],
  },
  {
    id: 'infosys-ai',
    title: 'Introduction to Artificial Intelligence',
    issuer: 'Infosys Springboard',
    category: 'AI / Machine Learning',
    skills: ['AI Foundations', 'Search Algorithms', 'Machine Learning Concepts', 'Cognitive Systems'],
  },
  {
    id: 'infosys-ds',
    title: 'Data Science',
    issuer: 'Infosys Springboard',
    category: 'Data & Analytics',
    skills: ['Data Preprocessing', 'Statistical Concepts', 'Data Interpretation', 'Analytical Modeling'],
  },
  {
    id: 'infosys-bigdata',
    title: 'Big Data',
    issuer: 'Infosys Springboard',
    category: 'Data Engineering',
    skills: ['Distributed Systems', 'Volume & Velocity Concepts', 'Data Pipelines', 'Hadoop Ecosystem Overview'],
  },
  {
    id: 'infosys-c',
    title: 'C Programming',
    issuer: 'Infosys Springboard',
    category: 'Systems & Core Programming',
    skills: ['C Syntax', 'Memory Management', 'Pointers', 'Structures', 'File I/O'],
  },
  {
    id: 'tp-python',
    title: 'From Syntax to System: Elevate with Python',
    issuer: 'TutorialsPoint',
    category: 'Advanced Python',
    skills: ['System Design Concepts', 'Object-Oriented Python', 'Error Handling', 'Project Structure'],
  },
  {
    id: 'openlearn-leadership',
    title: 'Collective Leadership',
    issuer: 'OpenLearn (The Open University)',
    category: 'Leadership & Soft Skills',
    skills: ['Shared Leadership', 'Organizational Dynamics', 'Team Motivation', 'Ethical Collaboration'],
  },
];

export const TIMES_OF_INDIA_DATA: TimesOfIndiaData = {
  organization: 'Times of India',
  category: 'Summer / CDP Experience',
  period: 'Summer / CDP Work Session',
  roleTitle: 'Community Development Project (CDP)',
  description: 'Completed hands-on practical Summer / Community Development Program (CDP) work in association with Times of India, validating practical real-world engagement, teamwork, and institutional communication.',
  keyAspects: [
    'Practical real-world community engagement and institutional outreach',
    'Community Development Program (CDP) on-ground field execution',
    'Experience in teamwork, public communication, and structured reporting',
    'Execution and successful delivery of assigned CDP project milestones',
  ],
};

export const BEYOND_CODE_DIMENSIONS = [
  {
    key: 'BUILD',
    title: 'Practical Engineering',
    tagline: 'Turning hardware and code into functional tools',
    description: 'Developing integrated IoT environmental monitors with ESP32 microcontrollers and writing clean algorithmic scripts in Python and Java.',
    accent: 'teal',
    items: ['ESP32 Environmental Telemetry Systems', 'Algorithmic Data Parsing with Python', 'Database Modeling with MySQL'],
  },
  {
    key: 'LEAD',
    title: 'Student Governance & Operations',
    tagline: 'Advocating for peers and organizing campus impact',
    description: 'Representing student voices on the Student Academic Advisory Committee and managing logistics for university-wide workshops and cultural events.',
    accent: 'blue',
    items: ['Student Academic Advisory Committee Representative', 'Play 2 Unite Organization Coordinator', 'Curriculum Feedback Synthesizer'],
  },
  {
    key: 'COMPETE',
    title: 'Hackathons & Challenges',
    tagline: 'Innovating rapidly under competitive pressure',
    description: 'Achieving runner-up standing in university hackathons and qualifying for national-level Smart India Hackathon nomination sprints.',
    accent: 'indigo',
    items: ['HackManthon Hackathon Runner-up 🥈', 'Smart India Hackathon Grand Finale Nominated 🇮🇳', 'Active Algorithmic Practice on LeetCode'],
  },
  {
    key: 'COLLABORATE',
    title: 'Team Athletics & Community',
    tagline: 'Channeling discipline, strategy, and camaraderie',
    description: 'Leading tactical plays on the court to win the University Inter-School Basketball Championship with the SCSE team.',
    accent: 'emerald',
    items: ['University Inter-School Basketball Champion 🏆', 'School of CSE Varsity Team Player', 'Cross-functional Event Operations'],
  },
];

export const CURRENTLY_EXPLORING_DATA = {
  currentlyLearning: [
    {
      title: 'Data Structures & Algorithms in Java',
      status: 'Active Daily Practice',
      description: 'Strengthening algorithmic intuition across trees, graphs, dynamic programming basics, and recursion.',
      topics: ['Java Collections', 'Time & Space Complexity', 'Problem Patterns'],
    },
    {
      title: 'Advanced Python & Data Handling',
      status: 'In Progress',
      description: 'Expanding script automation, computational file parsing, and clean modular code standards.',
      topics: ['File Pipelines', 'Functional Paradigms', 'Data Sanitization'],
    },
    {
      title: 'Core Web & Responsive Frontend Systems',
      status: 'Hands-on Building',
      description: 'Developing accessible, responsive, and component-driven user interfaces using modern standards.',
      topics: ['Semantic HTML', 'CSS Architecture', 'Component Life-cycles'],
    },
  ],
  areasOfInterest: [
    {
      title: 'Artificial Intelligence & Machine Learning',
      description: 'Studying foundational mathematics, statistical learning methods, neural architectures, and real-world inference systems.',
      tag: 'AI / ML',
    },
    {
      title: 'Software Development & Systems',
      description: 'Architecting maintainable, scalable software solutions with clean abstractions and resilient data structures.',
      tag: 'Software Engineering',
    },
    {
      title: 'Modern Web & Distributed Platforms',
      description: 'Bridging responsive frontend user experiences with performant backend services and APIs.',
      tag: 'Web Technology',
    },
    {
      title: 'Mobile Development Fundamentals',
      description: 'Exploring cross-platform concepts, intuitive mobile user journeys, and responsive touch-first interfaces.',
      tag: 'Mobile Systems',
    },
    {
      title: 'Competitive Problem Solving',
      description: 'Refining algorithmic thinking and optimal space-time complexities on LeetCode and HackerRank.',
      tag: 'Algorithms',
    },
  ],
};

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    date: 'August 2025',
    title: 'Commenced B.Tech in CSE at Lovely Professional University',
    category: 'academic',
    summary: 'Started Bachelor of Technology in Computer Science and Engineering with a focus on core computing fundamentals.',
    tag: 'Academic Journey',
  },
  {
    date: 'August 2025',
    title: 'Appointed Coordinator at Play 2 Unite Organization',
    category: 'leadership',
    summary: 'Initiated leadership tenure coordinating campus events, hackathons, workshops, and student data systems.',
    tag: 'Campus Leadership',
  },
  {
    date: 'Late 2025 / Early 2026',
    title: 'Secured Runner-up at HackManthon Hackathon',
    category: 'achievement',
    summary: 'Earned 2nd position among university teams through innovative problem solving and collaborative prototype execution.',
    tag: 'Hackathon Sprint',
  },
  {
    date: 'Early 2026',
    title: 'Nominated & Shortlisted for Smart India Hackathon (SIH)',
    category: 'achievement',
    summary: 'Selected during rigorous internal screening to represent Lovely Professional University at the national level.',
    tag: 'National Screening',
  },
  {
    date: 'Early 2026',
    title: 'Won University Inter-School Basketball Championship',
    category: 'achievement',
    summary: 'Claimed 1st place championship trophy playing with the School of Computer Science & Engineering (SCSE) team.',
    tag: 'Sports Championship',
  },
  {
    date: 'March 2026',
    title: 'Appointed to Student Academic Advisory Committee',
    category: 'leadership',
    summary: 'Selected as a student representative to collaborate with university administration on curriculum and academic policy enhancements.',
    tag: 'Student Representation',
  },
  {
    date: 'Summer Period',
    title: 'Times of India Summer / CDP Practical Experience',
    category: 'experience',
    summary: 'Completed hands-on Community Development Program (CDP) practical fieldwork and community outreach with Times of India.',
    tag: 'Practical Fieldwork',
  },
];

export const TERMINAL_COMMANDS: Record<string, { output: string; type?: 'list' | 'text' | 'table' | 'error' | 'success' }> = {
  help: {
    output: `Available Commands:
  • whoami          - Display bio & current role
  • about           - Learn about Surbhi's background
  • skills          - List technical skills & proficiencies
  • projects        - View built projects & details
  • education       - Show university & current CGPA
  • experience      - Leadership & organizational roles
  • achievements    - Hackathons & championships
  • certifications  - Verified credentials & courses
  • focus           - Current learning & exploration areas
  • contact         - Reach out via email, LinkedIn, or GitHub
  • clear           - Clear the terminal screen`,
    type: 'text',
  },
  whoami: {
    output: `Name: Surbhi
Role: Computer Science and Engineering Student
Institution: Lovely Professional University, Punjab, India
Started: August 2025 | Target: Class of 2029
Focus: Software Development + AI/ML + Problem Solving`,
    type: 'text',
  },
  about: {
    output: `I am a Computer Science and Engineering student at Lovely Professional University with a strong academic foundation (Current CGPA: 9.49) and a passion for practical engineering.
I enjoy turning ideas into real code, IoT systems, and software solutions while fostering leadership, student representation, and athletic collaboration.`,
    type: 'text',
  },
  skills: {
    output: `[Languages]   : C, Java, Python, JavaScript, C++ (Basics)
[CS Core]     : Data Structures & Algorithms (Java), Problem Solving
[Web & DB]    : HTML5, CSS3, MySQL
[Tooling]     : Git, GitHub, VS Code, Figma, Canva
[Platforms]   : LeetCode, HackerRank
[Soft Skills] : Problem-Solving, Team Collaboration, Project Management, Adaptability, Communication`,
    type: 'text',
  },
  projects: {
    output: `1. Forest Surveillance & Fire Prediction/Detection System
   Category: IoT + Web Dashboard
   Tech    : ESP32, Sensors, LoRa, HTML, CSS, JS, MySQL
   Status  : Complete working prototype

2. Movie Recommendation System
   Category: Python
   Tech    : Python, CSV File Handling, Conditional Logic
   Status  : Repository coming soon`,
    type: 'text',
  },
  education: {
    output: `Institution : Lovely Professional University, Punjab, India
Degree      : Bachelor of Technology — Computer Science and Engineering (2025 – 2029)
Status      : In Progress • Undergraduate Degree
Academic    : Current CGPA: 9.49`,
    type: 'text',
  },
  experience: {
    output: `1. Coordinator | Play 2 Unite Organization (Aug 2025 – Feb 2026)
   Maintained records, organized hackathons, workshops, cultural & e-sports events.

2. Member | Student Academic Advisory Committee (Mar 2026 – Present)
   Representing students in academic policy & curriculum enhancement discussions.`,
    type: 'text',
  },
  achievements: {
    output: `🥈 Runner-up  : HackManthon Hackathon (Second position among university teams)
🇮🇳 Shortlisted: Smart India Hackathon (SIH) Grand Finale University Representation
🏆 Winner     : University Inter-School Basketball Championship (SCSE Basketball Team)`,
    type: 'text',
  },
  certifications: {
    output: `• Infosys Springboard : Python Fundamentals, Intro to AI, Data Science, Big Data, C
• TutorialsPoint      : From Syntax to System: Elevate with Python
• OpenLearn           : Collective Leadership
• Times of India      : Summer / CDP Practical Experience`,
    type: 'text',
  },
  focus: {
    output: `Current Learning Focus:
- Data Structures & Algorithms in Java (Trees, Graphs, Sorting, Complexity)
- Advanced Python & Data Processing
- Modern Web Architecture & Responsive Design
- Foundations of Artificial Intelligence & Machine Learning`,
    type: 'text',
  },
  status: {
    output: `Current Academic Standing: CGPA 9.49
Availability: Open for internships, collaborative projects, and hackathons`,
    type: 'text',
  },
  contact: {
    output: `Email    : gangwarsurbhi57@gmail.com
LinkedIn : https://www.linkedin.com/in/surbhi-g001
GitHub   : https://github.com/SurbhiX1`,
    type: 'text',
  },
};

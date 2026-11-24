const express = require('express');
const app = express();
const port = 3001;

// JSON პარსინგის middleware
app.use(express.json());

// ლოგირების middleware (უნდა იყოს როუტებამდე, რომ ყველა რექვესთზე იმუშაოს)
app.use((req, res, next) => {
    const time = new Date().toISOString();
    console.log(`[${time}] ${req.method} ${req.originalUrl}`);
    next();
});

// მონაცემები (Mock Data)
const user = {
    id: 1,
    name: "ზურა",
    role: "Full Stack Developer",
    email: "zura@example.com",
    bio: "ვებ-დეველოპერი, რომელიც მუშაობს Node.js, Express და React ტექნოლოგიებზე.",
    location: "თბილისი, საქართველო"
};

const projects = [
    {
        id: 1,
        title: "E-Commerce Website",
        description: "ონლაინ მაღაზია პროდუქტების კატალოგით, კალათით და გადახდის სისტემით.",
        technologies: ["React", "Node.js", "Express", "MongoDB"],
        status: "Completed",
        link: "https://github.com/example/ecommerce"
    },
    {
        id: 2,
        title: "Task Management App",
        description: "დავალებების მართვის აპლიკაცია (Kanban დაფა და სტატუსები).",
        technologies: ["React", "Express", "PostgreSQL"],
        status: "In Progress",
        link: "https://github.com/example/task-manager"
    },
    {
        id: 3,
        title: "Personal Portfolio",
        description: "პერსონალური პორტფოლიოს ვებსაიტი პროექტებისა და გამოცდილების წარმოსაჩენად.",
        technologies: ["JavaScript", "HTML5", "CSS3"],
        status: "Completed",
        link: "https://github.com/example/portfolio"
    }
];

const skills = [
    { id: 1, category: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "React"] },
    { id: 2, category: "Backend", items: ["Node.js", "Express.js", "REST API"] },
    { id: 3, category: "Databases & Tools", items: ["MongoDB", "PostgreSQL", "Git", "GitHub"] }
];

// მთავარი როუტი
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// 1. პირველი მეთოდი: აბრუნებს ინფორმაციას მომხმარებლის შესახებ
app.get('/user', (req, res) => {
    res.json(user);
});
app.get('/api/user', (req, res) => {
    res.json(user);
});

// 2. მეორე მეთოდი: აბრუნებს პროექტების მასივს
app.get('/projects', (req, res) => {
    res.json(projects);
});
app.get('/api/projects', (req, res) => {
    res.json(projects);
});

// 3. მესამე მეთოდი: აბრუნებს დეველოპერის უნარების (Skills) ჩამონათვალს
app.get('/skills', (req, res) => {
    res.json(skills);
});
app.get('/api/skills', (req, res) => {
    res.json(skills);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
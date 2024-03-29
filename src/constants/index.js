import {
    javascript,
    html,
    reactjs,
    c,
    cpp,
    csharp,
    php,
    sql,
    verilog,
    python,
    storm,
    jacks,
    platformer,
    threejs,
    school,
    game,
    application,
    webd,
    pyweather,
    searchEngine,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "works",
      title: "Projects",
    },
    {
      id: "work",
      title: "Education",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Computer Science B.S.",
      icon: school,
    },
    {
      title: "Application Development",
      icon: application,
    },
    {
      title: "Game Development",
      icon: game,
    },
    {
      title: "Web Development",
      icon: webd,
    },
  ];
  
  const technologies = [
    {
      name: "C",
      icon: c,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "C#",
      icon: csharp,
    },
    {
      name: "System Verilog",
      icon: verilog,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "PHP",
      icon: php,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "HTML 5",
      icon: html,
    },
  ];
  
  const experiences = [
    {
      title: "High School Diploma",
      company_name: "Chanhassen High School",
      icon: storm,
      iconBg: "#E6DEDD",
      date: "Aug 2016 - May 2021",
      points: [
        "Graduated May 2021.",
        "Located in Chanhassen, Minnesota.",
      ],
    },
    
    {
      title: "Computer Science B.S. Student",
      company_name: "South Dakota State University //Relavent Courses",
      icon: jacks,
      iconBg: "#E6DEDD",
      date: "Aug 2021 - Present",
      points: [
        "CSC 150: C Language.",
        "CSC 100L: C# Language.",
        "CSC 250: C++ Language.",
        "CSC 244: Digital Logic: System Verilog.",
        "CSC 300: Data Structures.",
        "CSC 314: Assembly Language.",
        "CSC 317: Computer Organization. and Architecture.",
        "CSC 346: Object Oriented Programming: C++.",
        "CSC 354: Introduction to Systems Programming.",
        "SE 305: Foundations of Software Engineering.",
        "SE 306: Software Project Management and Testing",
        "MATH 374: Scientific Computation I",
        "CSC 461: Programming Languages",
        "CSC 484: Database Management Systems"
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "",
      name: "",
      designation: "",
      company: "",
      image: "",
    },
    {
      testimonial:
        "",
      name: "",
      designation: "",
      company: "",
      image: "",
    },
    {
      testimonial:
        "",
      name: "",
      designation: "",
      company: "",
      image: "",
    },
  ];
  
  const projects = [
    {
      name: "Python Weather App",
      description:
        "Console-based application to view weather information in a stylized manner, using live data from Open Weather Map API",
      tags: [
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "API",
          color: "blue-text-gradient",
        },
        {
          name: "Command-Line",
          color: "pink-text-gradient",
        },
      ],
      image: pyweather,
      source_code_link: "https://github.com/breuss02/Python-Weather-App",
    },
    {
      name: "Simple SQL Search Engine",
      description:
        "A simple search engine that includes manual site entry to a database, using MySQL databses.",
      tags: [
        {
          name: "SQL",
          color: "blue-text-gradient",
        },
        {
          name: "PHP",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
      ],
      image: searchEngine,
      source_code_link: "https://github.com/breuss02/Simple-Search-Engine",
    },
    {
      name: "Unititled Unity Game",
      description:
        "An in progress simple 2d unity game designed for Android that incorporates simple procedural level generation, score saving, and a simple shop system.",
      tags: [
        {
          name: "C#",
          color: "green-text-gradient",
        },
        {
          name: "Simple Procedural Generation",
          color: "blue-text-gradient",
        },
        {
          name: "Unity",
          color: "pink-text-gradient",
        },
      ],
      image: platformer,
      source_code_link: "https://github.com/breuss02/Untitled-2D-Platformer",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
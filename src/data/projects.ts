import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";

export interface ProjectType {
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  categories: string[];
  technologies: string[];
  features?: string[];
  github?: string;
  live?: string;
}

export const projectsData: ProjectType[] = [
  {
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with cart, checkout, and payment integration.",
    fullDescription:
      "A comprehensive e-commerce solution built with React, Node.js, and PostgreSQL. The platform features a responsive design, product filtering, user authentication, shopping cart functionality, secure checkout process, and integration with Stripe for payment processing. The admin dashboard allows for easy product and order management.",
    image: project1,
    categories: ["Web App", "E-commerce"],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Redux",
      "Stripe API",
      "JWT Authentication",
    ],
    features: [
      "Responsive product catalog with filtering and search",
      "User authentication and profile management",
      "Shopping cart with persistent storage",
      "Secure checkout process with Stripe integration",
      "Admin dashboard for product and order management",
      "Order history and tracking for users",
    ],
    github: "https://github.com/shelbyG2",
    live: "https://example.com",
  },
  {
    title: "Task Management App",
    description:
      "A Kanban-style task management application for teams and individuals.",
    fullDescription:
      "A collaborative task management application inspired by Trello and built with Next.js, TypeScript, and Supabase. The app features a drag-and-drop interface for task management, real-time updates, team collaboration tools, and customizable workflows. Users can create boards, lists, and cards, assign tasks, set due dates, and track progress.",
    image: project2,
    categories: ["Web App", "Productivity"],
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "React DnD",
      "Zustand",
    ],
    features: [
      "Drag-and-drop interface for task management",
      "Real-time updates and collaboration",
      "Customizable boards, lists, and cards",
      "Task assignment, due dates, and labels",
      "File attachments and comments",
      "Mobile-responsive design",
    ],
    github: "https://github.com/shelbyG2",
    live: "https://example.com",
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather forecasting application with interactive maps and detailed analytics.",
    fullDescription:
      "A weather forecasting application that provides real-time weather data, 7-day forecasts, and historical weather patterns. The app uses the OpenWeatherMap API and features interactive maps powered by Mapbox. Users can search for locations, save favorites, and receive weather alerts.",
    image: project3,
    categories: ["Web App", "Utility"],
    technologies: [
      "React",
      "Chart.js",
      "OpenWeatherMap API",
      "Mapbox",
      "Tailwind CSS",
    ],
    features: [
      "Real-time weather data and forecasts",
      "Interactive maps with weather layers",
      "Location search and favorites",
      "Historical weather data visualization",
      "Weather alerts and notifications",
      "Responsive design for all devices",
    ],
    github: "https://github.com/shelbyG2",
    live: "https://example.com",
  },
  {
    title: "Fitness Tracking App",
    description:
      "A mobile-first application for tracking workouts, nutrition, and health metrics.",
    fullDescription:
      "A comprehensive fitness tracking application that allows users to log workouts, track nutrition, and monitor health metrics. The app features customizable workout plans, progress tracking with charts and graphs, nutrition logging with calorie calculations, and social features for sharing achievements.",
    image: project4,
    categories: ["Mobile App", "Health"],
    technologies: ["React Native", "Firebase", "Redux", "Chart.js", "Expo"],
    features: [
      "Workout logging and exercise library",
      "Nutrition tracking with calorie calculations",
      "Progress visualization with charts and graphs",
      "Customizable workout plans",
      "Goal setting and achievement tracking",
      "Social sharing and community features",
    ],
    github: "https://github.com/shelbyG2",
  },
  {
    title: "Real Estate Marketplace",
    description:
      "A platform for buying, selling, and renting properties with advanced search features.",
    fullDescription:
      "A comprehensive real estate marketplace that connects buyers, sellers, and renters. The platform features property listings with detailed information, advanced search filters, virtual tours, mortgage calculators, and agent directories. The admin panel allows for easy property management and user verification.",
    image: project5,
    categories: ["Web App", "Marketplace"],
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Google Maps API",
      "AWS S3",
    ],
    features: [
      "Property listings with detailed information and images",
      "Advanced search filters and map-based property exploration",
      "Virtual tours and 3D property visualization",
      "Saved searches and favorites",
      "Agent profiles and messaging system",
      "Mortgage calculator and affordability tools",
    ],
    github: "https://github.com/shelbyG2",
    live: "https://example.com",
  },
  {
    title: "Social Media Dashboard",
    description:
      "An analytics dashboard for tracking performance across multiple social media platforms.",
    fullDescription:
      "A comprehensive social media analytics dashboard that aggregates data from multiple platforms like Facebook, Twitter, Instagram, and LinkedIn. The dashboard provides insights on engagement, audience demographics, content performance, and competitor analysis. Users can schedule posts, monitor mentions, and generate detailed reports.",
    image: project6,
    categories: ["Web App", "Analytics"],
    technologies: [
      "Vue.js",
      "D3.js",
      "Node.js",
      "Express",
      "Social Media APIs",
      "Firebase",
    ],
    features: [
      "Multi-platform social media analytics",
      "Real-time data visualization with customizable charts",
      "Content performance tracking and recommendations",
      "Audience demographics and insights",
      "Competitive analysis and benchmarking",
      "Automated reporting and export options",
    ],
    github: "https://github.com/shelbyG2",
  },
];

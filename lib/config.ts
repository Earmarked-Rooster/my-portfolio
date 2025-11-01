import type { Portfolio } from "@/lib/types";

const PORTFOLIO_DATA: Portfolio = {
	name: "Andy Tahmazyan",
	headline: "Student | Intermediate Programmer | AI Enthusiast",
	bio: "A results-driven Math of Computation student at UCLA with a passion for building disruptive, scalable, and user-centric applications. Eager to leverage modern technologies to solve real-world problems and drive impactful change. Currently seeking high-growth internship opportunities for Summer 202X.",

	// Your contact email
	email: "rio4tahmazyan@gmail.com",

	// Add your links here
	// Supported icons: 'GitHub', 'LinkedIn', 'Twitter', 'Blog'
	links: [
		{ name: "GitHub", url: "https://github.com/Earmarked-Rooster" },
		{ name: "LinkedIn", url: "https://www.linkedin.com/in/andy-tahmazyan-1a8904380/" },
		{ name: "Handshake", url: "https://app.joinhandshake.com/profiles/gvmvvh" },
		// { name: "Blog", url: "https://yourblog.com" },
	],

	// Add your skills here
	skills: [
		"Node.js", " ", " ", " ", 
		"Python", "Go", "C++", "Java", "AWS", "Docker", "Gradle" , "Maven"
	],

	// Add your projects here
	projects: [
		{
			title: "Factions Plugin",
			description: "My own Minecraft plugin made utiizing Paper/Bukkit API made to faciliate player interaction within a populated Minecraft Server.",
			stack: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Vercel"],
			githubLink: "https://github.com/Earmarked-Rooster/My-Paper-Plugin",
			liveLink: "",
		},
		{
			title: "VibeCheck",
			description: "A mobile-first social app that uses sentiment analysis to curate positive news feeds. Leveraged serverless functions for infinite scalability and low-cost operation.",
			stack: ["React Native", "Firebase", "Google Cloud Functions", "NLP.js"],
			githubLink: "",
			liveLink: "",
		},
		{
			title: "AlgoVisualizer",
			description: "A web-based tool for visualizing complex data structures and algorithms, built to help students (like me) understand core CS concepts in an interactive way.",
			stack: ["TypeScript", "React", "D3.js"],
			githubLink: "",
			liveLink: "",
		},
	],

	// Add your experience here
	experience: [
		{
			role: "Research Collaborator",
			company: "St. Francis High School/Harvard Medical School",
			date: "Spring 2024-Spring 2025",
			location: "La Canada Flintridge",
			description: "Selected for a highly competitive internship program. Will be joining the [Cloud/AI/Growth] team to work on high-impact, customer-facing features."
		},
		{
			role: "Club President / Co-Founder",
			company: "[Your Vibe-Coding Club Name]",
			date: "Aug 202X - Present",
			location: "[Your University]",
			description: "Grew the organization from 5 to 200+ members by fostering a culture of innovation and 'vibecoding.' Organized tech talks with industry leaders from Google, Meta, and hot startups."
		},
		{
			role: "Teaching Assistant - Intro to CS",
			company: "[Your University]",
			date: "Jan 202X - May 202X",
			location: "[Your University]",
			description: "Mentored 50+ students, held office hours, and graded assignments for foundational computer science concepts. Received a 95% positive feedback rating from students."
		}
	],

	// Add any education or awards
	education: [
		{
			degree: "B.S. in Computer Science",
			institution: "[Your University]",
			date: "Expected May 202X",
			note: "Minor in [e.g., Business, Data Science]"
		},
		{
			degree: "Best 'Vibe' Hack",
			institution: "[Some Hackathon]",
			date: "Fall 202X",
			note: "Awarded for the project with the slickest UI and best pitch."
		}
	]
};

export default PORTFOLIO_DATA;
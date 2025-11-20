// Import the Portfolio type from the type definition file.
import type { Portfolio } from "@/lib/types";

// The main portfolio data object.
const PORTFOLIO_DATA: Portfolio = {
	// Your name.
	name: "Andy Tahmazyan",
	// Your headline.
	headline: "Student | Intermediate Programmer | AI Enthusiast",
	// A short bio about yourself.
	bio: "A results-driven Math of Computation student at UCLA with a passion for building disruptive, scalable, and user-centric applications. Eager to leverage modern technologies to solve real-world problems and drive impactful change. Currently seeking high-growth internship opportunities for Summer 2025.",

	// Your contact email.
	email: "rio4tahmazyan@gmail.com",

	// Your social media and other links.
	// Supported icons: 'GitHub', 'LinkedIn', 'Twitter', 'Blog'
	links: [
		{ name: "GitHub", url: "https://github.com/Earmarked-Rooster" },
		{ name: "LinkedIn", url: "https://www.linkedin.com/in/andy-tahmazyan-1a8904380/" },
		{ name: "Handshake", url: "https://app.joinhandshake.com/profiles/gvmvvh" },
		// { name: "Blog", url: "https://yourblog.com" },
	],

	// A list of your skills.
	skills: [
		"Node.js", "Python", "Go", "C++", "Java", "AWS", "Docker", "Gradle", "Maven"
	],

	// A list of your projects.
	projects: [
		{
			title: "Factions Plugin",
			description: "My own Minecraft plugin made utiizing Paper/Bukkit API made to faciliate player interaction within a populated Minecraft Server.",
			stack: ["Java", "Paper", "Bukkit", "Gradle", "Maven"],
			githubLink: "https://github.com/Earmarked-Rooster/My-Paper-Plugin",
			liveLink: "",
		},
	],

	// A list of your work experiences.
	experience: [
		{
			role: "Research Collaborator",
			company: "St. Francis High School/Harvard Medical School",
			date: "Spring 2024-Spring 2025",
			location: "La Canada Flintridge",
			description: "Worked in a group of ten peers to research the effect of bacteria in microgravity. Operations included following lab procedure and recording notes to send to the Harvard Medical Lab in Boston."
		},
		{
			role: "Cloud Server Administrator",
			company: "Self-employed",
			date: "June 2025 - Present",
			location: "Online",
			description: "Utilizing an Amazon AWS instance to host a populated Minecraft Java server."
		},
		{
			role: "NEHS Website Development Officer",
			company: "St. Francis High School",
			date: "Aug 2024 - May 2025",
			location: "La Canada Flintridge",
			description: "Mentored students, held office hours for foundational computer science concepts, and developed a website for my school's literary magazine using Sqaurespace."
		}
	],

	// A list of your education and awards.
	education: [
		{
			degree: "Machine Learning Specialization",
			institution: "Coursera (Deeplearning.ai)",
			date: "June 2025",
			note: "link to certificate: https://www.coursera.org/account/accomplishments/specialization/U2ERF887ORRW"
		},
		{
			degree: "High School Diploma",
			institution: "St. Francis High School",
			date: "May 2025",
			note: ""
		}
	],
	// A list of your professional connections.
	connections:
	[
		{
			name : "",
			company : "",
			quote : ""
		}
	]
};

// Export the portfolio data.
export default PORTFOLIO_DATA;
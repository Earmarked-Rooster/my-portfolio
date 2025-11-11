// Defines the structure of the main portfolio object.
export type Portfolio = {
	name: string;
	headline: string;
	bio: string;
	email: string;
	links: { name: string; url: string }[];
	skills: string[];
	projects: Project[];
	experience: Experience[];
	education: Education[];
	connections : Connections[];
};

// Defines the structure of a project object.
export type Project = {
	title: string;
	description: string;
	stack: string[];
	githubLink: string;
	liveLink: string;
};

// Defines the structure of a connection object.
export type Connections = 
{
	name : string;
	company : string;
	quote : string;
}

// Defines the structure of an experience object.
export type Experience = {
	role: string;
	company: string;
	date: string;
	location: string;
	description: string;
};

// Defines the structure of an education object.
export type Education = {
	degree: string;
	institution: string;
	date: string;
	note: string;
};
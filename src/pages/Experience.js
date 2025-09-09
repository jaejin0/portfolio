import { Container, Card, Box, Typography, Stack, Divider, Grid, Link } from "@mui/material";

import hpe from '../assets/hpe.jpeg'
import aimahead from '../assets/aimahead.jpeg'
import endeavr from '../assets/endeavr.jpeg'
import reu_intern from '../assets/reu_intern.jpeg'
import AggieResearch from '../assets/Aggie_Research_Program.jpeg'

import Standard from '../assets/Standard.jpeg'
import AggieCodingClub from '../assets/Aggie_Coding_Club.jpeg'

function Experience() {
    const exp = [
	{
	    title: 'Software Engineer Intern @ Hewlett Packard Enterprise',
	    period: 'May 2025 - Present',
	    tool: 'Oracle APEX, MCP',
	    link: 'https://www.hpe.com/us/en/home.html',
	    image: hpe,
	    description: 'I engineered a Retrieval-Augmented Generation (RAG) pipeline from the ground up in Pl/SQL, \
			building a custom vector database and vector search layer to extended Oracle 19c capabilities, integrated LLMs with RESTful APIs.\
			I developed an AI-powered user guide chatbot in Oracle APEX with chat log storage, session management, and seamless integration, improving user experience and knowledge accessibility.\
			I design and implement MCP (Model Context Protocol) server and client for internal business apps, enabling AI agents to analyze operational data, generate predictions, and provide actionable insights to improve productivity.'
	},
	{
	    title: 'Research Assistant @ NIH AIM-AHEAD (Texas A&M, Georgia Tech, Emory University)',
	    period: 'Feb 2025 - Present',
	    tool: 'Python, Jupyter Notebook, SQL',
	    link: 'https://www.aim-ahead.net/',
	    image: aimahead,
	    description: 'I conducted data processing and machine learning on large-scale cardiovascular datasets to develop AFT model.\
			I produced statistical analysis in a high-impact academic research setting involving cross-disciplinary collaboration.'
	},
	{
	    title: 'Software Engineer Intern @ Endeavr Institute',
	    period: 'Oct 2024 - Present',
	    tool: 'Python, PyTorch, ROS, CARLA',
	    link: 'https://endeavr.city/',
	    image: endeavr,
		description: 'I developed an end-to-end autonomous driving frameworks to future-proof underserved communities.'
	},
        {
            title: 'REU Research Intern @ University of Delaware',
            period: 'May 2023 - Aug 2023',
            tool: 'Python, PyTorch, PyGame',
            link: 'https://mrsec.udel.edu/undergraduate-education-and-outreach/reu/',
            image: reu_intern,
            description: 'As a research intern, I implemented autonomous driving simulations\
            focused on trajectory control and energy efficiency. I developed self-driving \
            AI models using advanced machine learning techniques, including Deep Q-Network\
            (DQN) and Deep Deterministic Policy Gradient (DDPG). This experience sparked \
            my interest in pursuing a master\'s degree to further research AI Robotics.'
        },
        {
            title: 'Undergraduate Research Assistant @ Texas A&M University',
            period: 'Aug 2022 - May 2023',
            tool: 'Python, Linux, Bash, Apache Spark',
            link: 'https://aggieresearch1.wpengine.com/undergraduates/',
            image: AggieResearch,
            description: 'As an undergraduate research assistant, I analyzed the performance\
            of Apache Spark concerning the memory overuse and underuse of Resilient Distributed\
            Datasets (RDD). I integrated Spark clusters with the Hadoop Distributed File System\
            on Linux clusters and evaluated the memory usage performance of the Apache Spark \
            Big Data framework. Additionally, I modified a graph mining program to convert data \
            graphs with multiple labels into a binary format.'
        }
    ]

    const org = [
        {
            title: 'CV Team Member @ TAMU RoboMasters',
            period: 'Aug 2023 - May 2024',
            tool: 'Python, OpenCV',
            link: 'https://tamurobomasters.com/',
            image: Standard,
            description: 'As a member of the computer vision (CV) team at TAMU RoboMasters, I was selected \
            among 10 individuals to join this student organization. I implemented a computer vision model\
            to draw contours on enemy targets for the RoboMaster University League. Additionally, I \
            actively participated in hackathons hosted by the organization, further enhancing my skills\
            and experience in the field.'
        },
        {
            title: 'Project Manager @ Aggie Coding Club',
            period: 'Jan 2022 - May 2022',
            tool: 'React, JavaScript',
            link: 'https://www.aggiecodingclub.com/',
            image: AggieCodingClub,
            description: 'As a project manager at the Aggie Coding Club, I managed over 20 project members,\
            guiding them in learning web development through weekly workshop meetings. I directed the team\
            to build front-end web pages, including a Pokédex, personal websites, and e-commerce sites, \
            ensuring they gained a thorough understanding and proficiency in web development.'
        }
    ]

    return (
        <Container maxWidth='md'>
            <Box>
                <Typography variant='h4' sx={{ margin: 2 }}>Experience</Typography>
                <Stack>
                    {exp.map((index) => (
                        <Card key={index.id} sx={{
                            padding: 4,
                            margin: 2,
                            marginBottom: 3
                        }}>
                            <Box component='img' src={index.image} sx={{ display: "flex", marginX: 'auto', maxHeight: '400px', maxWidth: '100%', padding: 1 }}></Box>
                            <Divider sx={{ padding: 1}}></Divider>
                            <Grid item sx={{ display: 'flex', justifyContent: 'space-between', marginY: 1}}>
                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    <Typography variant='h6'>{index.title}</Typography>
                                    {index.link !== '' && <Link variant='h6' href={index.link} underline='hover'>[link]</Link>}
                                </Box>
                                <Typography>{index.period}</Typography>
                            </Grid>
                            <Typography variant='p' sx={{ lineHeight: 1.6 }}>{index.description}</Typography>
                            <Typography sx={{ marginTop: 3 }}>{index.tool}</Typography>
                        </Card>
                    ))}
                </Stack>
            </Box>
            <Box sx={{ marginTop: 6 }}>
                <Typography variant='h4' sx={{ margin: 2 }}>Student Organization</Typography>
                <Stack>
                    {org.map((index) => (
                        <Card key={index.id} sx={{
                            padding: 4,
                            margin: 2
                        }}>
                            <Box component='img' src={index.image} sx={{ display: "flex", marginX: 'auto', maxHeight: '400px', maxWidth: '100%', padding: 1 }}></Box>
                            <Divider sx={{ padding: 1}}></Divider>
                            <Grid item sx={{ display: 'flex', justifyContent: 'space-between', marginY: 1}}>
                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    <Typography variant='h6'>{index.title}</Typography>
                                    {index.link !== '' && <Link variant='h6' href={index.link} underline='hover'>[link]</Link>}
                                </Box>
                                <Typography>{index.period}</Typography>
                            </Grid>
                            <Typography variant='p' sx={{ lineHeight: 1.6 }}>{index.description}</Typography>
                            <Typography sx={{ marginTop: 3 }}>{index.tool}</Typography>
                        </Card>
                    ))}
                </Stack>
            </Box>
        </Container>
    );
}

export default Experience;

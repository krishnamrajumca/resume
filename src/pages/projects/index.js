import { Grid, Typography } from "@mui/material"
import tech from '../../assets/videos/tech.mp4'
import projectsData from "../../constants/projectsData"
import { motion } from "framer-motion"
const Projects = () => {
    return (
        <Grid
            className="full-w full-h relative"
            id="projects"
            sx={{ paddingBottom: 2 }}
        >
            <video autoPlay loop muted id="skillVideo">
                <source src={tech} type="video/mp4" />
            </video>
            <Grid container
                className="over-video relative"
                sx={{ padding: "24px", paddingTop: '80px', display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'flex-start' }}
            >

                <Typography
                    sx={{
                        fontSize: {
                            xs: 25,
                            sm: 35,
                            md: 50,
                            lg: 60
                        },
                        // color: "black"
                        // color: "#b7eb3455"
                    }}
                >
                    Projects.
                </Typography>
                <Typography sx={{ maxWidth: 500, textAlign: 'left', fontFamily: 'cursive' }}>
                    Following projects showcases my skills and experience through
                    real-world examples of my work.
                </Typography>
                <Typography sx={{ maxWidth: 500, textAlign: 'left', fontFamily: 'cursive' }}>
                    It reflects my ability to solve complex problems, work with different technologies,
                    and manage projects effectively.
                </Typography>
            </Grid>
            <Grid
                container
                className="over-video relative"
                sx={{ gap: 2, marginTop: 4, justifyContent: 'center' }}
            >
                {
                    projectsData.map((project) => {
                        return (
                            <ProjectCard project={project} key={project.id} />
                        )
                    })
                }
            </Grid>

        </Grid>
    )
}
const ProjectCard = ({ project }) => {
    const bounceVariants = {
        initial: { opacity: 0.1, duration: 3 },
        animate: { transition: { yoyo: Infinity, duration: 3 }, opacity: 1 }
    };
    return (
        <motion.div
            initial="initial"
            // animate="animate"
            variants={bounceVariants}
            style={{
                display: 'flex',
                alignItems: 'stretch',
                backgroundColor: "rgba(0,0,0,0.7)",
                borderRadius: '10px'
            }}
            whileInView={{
                transition: { yoyo: Infinity, duration: 5 }, opacity: 1,
            }}
            whileHover={{
                scale: 1.3,
                x: 0
            }}
        >
            <Grid
                sx={{
                    padding: '5px',
                    minWidth: 300,
                    gap: 1,

                    border: '1px solid #c678c6', borderRadius: '10px'
                }}
            >
                <Grid container >
                    <motion.img
                        src={project.icon}
                        style={{ width: 300, height: 200, borderRadius: '10px' }}

                    />
                </Grid>
                <Grid container sx={{ padding: '10px' }}>
                    <Typography style={{ fontSize: 24, fontWeight: 'bold' }}>
                        {project.project}
                    </Typography>
                </Grid>
                <Grid container style={{ width: 300, padding: '10px' }}>
                    <Typography
                        sx={{ fontSize: 12, textAlign: 'left' }}
                    >
                        {project.desc}
                    </Typography>
                </Grid>
                <Grid container sx={{ gap: '5px', padding: '10px' }}>
                    {
                        project.techs.map((tech) => {
                            return (
                                <Typography sx={{ color: tech.color, fontSize: 10 }}>{tech.key}</Typography>
                            )
                        })
                    }
                </Grid>
            </Grid>
        </motion.div>
    )
}
export default Projects
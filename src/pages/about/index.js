import { Grid, Typography } from "@mui/material"
import sun from '../../assets/videos/skills.mp4'
import aboutData from '../../constants/about.json'

import { motion } from "framer-motion"
const About = () => {
    return (
        <Grid className="full-w full-h relative" id="about" sx>
            <video autoPlay loop muted id="skillVideo">
                <source src={sun} type="video/mp4" />
            </video>
            <Grid
                container
                className="over-video relative"
                sx={{
                    padding: {
                        xs: 2,
                        md: 4
                    },
                    flexDirection: 'column',
                    justifyContent: "flex-start",
                    alignItems: 'flex-start'
                }}
            >
                <Typography
                    sx={{
                        fontSize: {
                            xs: 20,
                            sm: 25,
                            md: 30,
                            lg: 35
                        },
                        color: "#03e9f4"
                    }}

                >
                    Introduction
                </Typography>
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
                    Overview.
                </Typography>
                <Grid container
                    sx={{
                        flexDirection: 'column',
                        gap: 5,
                        paddingTop: 2
                    }}
                >
                    <Typography
                        sx={{ maxWidth: 600, textAlign: 'left', color: "#c678c6", fontFamily: "Courgette" }}
                    >
                        I'm a Frontend developer with experience in  JavaScript, and expertise in frameworks like React, React Native, Redux and Redux toolkit.
                    </Typography>
                    <Typography
                        sx={{ maxWidth: 600, textAlign: 'left', color: "#c678c6", fontFamily: "Courgette" }}
                    >

                        I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
                    </Typography>
                    <Grid container
                        sx={{
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            gap: 3,
                            justifyContent: 'center'
                        }}
                    >
                        {
                            aboutData.map((about, index) => (
                                <AboutCard title={about.title} key={about.id} index={index} />
                            ))
                        }
                    </Grid>
                </Grid>

            </Grid>

        </Grid>
    )
}
const AboutCard = ({ title, index }) => {
    const bounceVariants = {
        initial: { y: -120 * Math.pow(-1, index), opacity: 0.1, duration: 3 },
        animate: { y: 0 * Math.pow(-1, index), transition: { yoyo: Infinity, duration: 3 }, opacity: 1 }
    };
    return (
        <motion.div
            initial="initial"
            // animate="animate"
            variants={bounceVariants}
            whileInView={{
                y: 0 * Math.pow(-1, index), transition: { yoyo: Infinity, duration: 3 }, opacity: 1,
            }}
            whileHover={{
                scale: 0.8,
                type: "spring",
                x: 20,
                rotate: -2,
                borderColor: "#c6c678",
                duration: 2,
                loop: Infinity

            }}
            style={{
                padding: 20,
                minHeight: 200,
                width: 150,
                borderWidth: 2,
                borderStyle: 'solid',
                borderColor: "#c678c6",
                margin: 2,
                borderRadius: 3,
                zIndex: 100,
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                backgroundColor: 'rgba(0,0,0,0.2)',
                boxShadow: 'rgba(255, 129, 178, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px'
            }}
        >
            <Typography
                sx={{
                    fontSize: {
                        xs: 18,
                        sm: 22
                    },
                    fontWeight: 'bold'
                }}
            >
                {title}
            </Typography>

        </motion.div>
    )
}
export default About;
import { Grid, Typography } from "@mui/material"
import sun from '../../assets/videos/sun.mp4'
import Krishna from '../../assets/images/krishna.jpg'
import { useEffect } from "react"
import { motion } from 'framer-motion'
const Landing = () => {
    const bounceVariants = {
        initial: { borderColor: "#03e94f", opacity: 0.1, duration: 3 },
        animate: { transition: { loop: Infinity, duration: 3 }, opacity: 1 }
    };
    useEffect(() => {
        let vid = document.getElementById("sunVideo");
        vid.playbackRate = 1.5;
    }, [])
    return (
        <Grid container sx={{}} className="full-w full-h relative" id="landing">
            <video autoPlay loop muted id="sunVideo">
                <source src={sun} type="video/mp4" />
            </video>
            <Grid
                container
                className="over-video"
                sx={{
                    padding: '40px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    alignItems: {
                        xs: "center",
                        md: 'flex-start'
                    },
                    marginTop: {
                        xs: "50px",
                        sm: 12
                    }
                }}

            >
                <motion.img
                    initial="initial"
                    // animate="animate"
                    variants={bounceVariants}
                    whileHover={{ scale: 1.2, borderColor: "#03e94f", }}
                    // initial={true}
                    whileInView={{
                        borderColor: "#03e9f4", transition: { yoyo: Infinity, duration: 13 }, opacity: 1,
                    }}
                    src={Krishna} className="image"
                />

                <Typography
                    sx={{
                        fontSize: {
                            xs: 30,
                            md: 40,
                            lg: 50
                        },
                        fontFamily: 'Rajdhani',
                        fontWeight: 900
                    }}
                >
                    <span style={{ color: "#03e9f4" }}>Hi,</span> I'm Krishnam Raju
                </Typography>
                <Typography
                    sx={{
                        maxWidth: 300,
                        textAlign: 'left',
                        fontFamily: "Courgette"
                    }}
                >
                    I developed web and mobile applications using React and React Native
                </Typography>

            </Grid>
        </Grid>
    )
}

export default Landing
import { Typography, Grid } from "@mui/material"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import exp from '../../constants/exp'
import 'react-vertical-timeline-component/style.min.css'
const Experience = () => {
    return (
        <Grid container className="full-h full-w relative" id="exp" sx={{
            padding: {
                xs: 1,
                sm: 2,
                md: 4
            }
        }}>
            <Grid container
                sx={{ padding: "24px", display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'flex-start' }}
            >
                <Typography
                    sx={{ fontSize: 20 }}
                >
                    What have i done so far
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
                    Work Experience.
                </Typography>
            </Grid>
            <VerticalTimeline>

                {
                    exp.map((e, i) => {
                        return (
                            <ExperienceCard experience={e} key={i} />
                        )
                    })
                }
                {/* Add more VerticalTimelineElement components here */}
            </VerticalTimeline>

        </Grid>
    )
}
const ExperienceCard = ({ experience }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "#00000045",
                color: "#fff",
                boxShadow: 'rgba(255, 129, 178, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px'
            }}
            contentArrowStyle={{ borderRight: "7px solid  #00000045" }}
            date={experience.date}
            dateClassName="timeline_date"
            iconStyle={{ background: "white" }}
            icon={
                <Grid sx={{
                    display: 'flex',
                    justifyContent: "center",
                    alignItems: 'center',
                    width: "100%",
                    height: "100%"
                }}
                >
                    <img
                        src={experience.icon}
                        alt={experience.company_name}
                        style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "100%",
                            objectFit: 'cover'
                        }}
                    />

                </Grid>

            }
        >
            <Grid
                sx={{
                    alignItems: 'flex-start',
                    display: "flex",
                    flexDirection: "column",

                }}
                className="comp"
            >
                <Typography
                    sx={{
                        color: "white",
                        fontSize: 24,
                        fontWeight: 'bold'
                    }}
                    component={"h3"}
                >
                    {experience.title}
                </Typography>
                <Typography
                    sx={{
                        color: "#d6d6d6",
                        fontSize: 16,
                        fontWeight: 600
                    }}
                    component={"p"}
                >
                    {experience.company_name}
                </Typography>
                <Grid component={"ul"}>
                    {
                        experience.points.map((point, index) => (
                            <Typography
                                component="li"
                                key={index}
                                sx={{
                                    textAlign: "left",
                                    padding: '5px 0px',
                                    fontFamily: 'cursive'
                                }}>
                                {point}
                            </Typography>
                        ))
                    }
                </Grid>
            </Grid>
        </VerticalTimelineElement >
    )
}
export default Experience
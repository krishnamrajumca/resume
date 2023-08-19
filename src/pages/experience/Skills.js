import { Typography, Grid, Paper } from "@mui/material"

import Ball from "../../components/Ball"
import tech from '../../constants/tech'
import Progressbar from "../../components/ProgressBar"
const Skills = () => {
    return (
        <Grid container
            className="full-w" id="skills"
            sx={{
                padding: {
                    xs: 1,
                    sm: 2,
                    md: 4
                },
                paddingTop: '80px !important'
            }}
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
                Skills.
            </Typography>
            <Grid container
                sx={{
                    justifyContent: 'center',
                    gap: 3,
                    // marginTop: '100px',
                    padding: {
                        xs: 2,
                        sm: 3,
                        md: 5
                    },
                    // flexDirection: 'column'
                    // backgroundColor: "black"
                }}
            >
                {
                    tech.map((t, i) => (
                        <Grid item sx={{ width: 350 }} key={t.id}>
                            <Progressbar value={t.per} label={t.title} icon={t.icon} />
                        </Grid>
                    ))
                }

            </Grid>
            {/* <Grid container
                sx={{
                    justifyContent: 'center',
                    gap: 3,
                    marginTop: '100px',
                    padding: {
                        xs: 2,
                        sm: 3,
                        md: 5
                    },
                    // backgroundColor: "black"
                }}
            >
                {
                    tech.map((t, i) => (
                        <Grid item sx={{ width: 150 }}>
                            <div style={{ width: 150, height: 150 }}>
                                <Ball icon={t.icon} id={t.id} />
                            </div>

                            <Typography>
                                {t.title}
                            </Typography>
                        </Grid>
                    ))
                }

            </Grid> */}

        </Grid >
    )
}
export default Skills;
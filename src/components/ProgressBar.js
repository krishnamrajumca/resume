
import { Grid, Typography } from '@mui/material'
import './pb.css'
import { motion } from 'framer-motion'
const Progressbar = ({ value = 0, label, icon }) => {
    const bounceVariants = {
        initial: { borderColor: "#03e94f", opacity: 0.1, duration: 3, width: 0 },
        animate: { width: `${value}%`, transition: { loop: Infinity, duration: 3 }, opacity: 1 }
    };
    return (
        <Grid sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Grid sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Grid sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1 }}>
                    <img src={icon} style={{ width: 20, height: 20, borderRadius: '100%' }} />
                    <Typography>

                        {label}
                    </Typography>
                </Grid>

                <Typography>
                    {value}%
                </Typography>
            </Grid>
            <Grid className="progress" >
                <motion.div
                    initial="initial"
                    // animate="animate"
                    variants={bounceVariants}
                    whileInView={{
                        width: `${value}%`, transition: { yoyo: Infinity, duration: 3 }, opacity: 1,
                    }}
                    className="progress-value" style={{ width: `${value}%` }}>
                    <Grid className="pv">

                    </Grid>
                </motion.div>

            </Grid>

        </Grid>
    )
}
export default Progressbar

import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material"
import logo from '../assets/logo.png'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from "react"
const links = [
    "about",
    "projects",
    "contact"
]

const NavBar = () => {
    const [active, setActive] = useState('')
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'));

    console.log("MA", matches)
    const onClick = (link) => {
        var scrollDiv = document.getElementById(link).offsetTop;
        window.scrollTo({ top: scrollDiv, behavior: 'smooth' });
    }
    return (
        <Grid
            container
            sx={{
                padding: '20px 20px',
                backgroundColor: "rgba(0,0,0,0.7)",
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 99
            }}
        >
            <Grid container
                sx={{
                    justifyContent: 'space-between'
                }}
            >
                <Grid
                    sx={{
                        alignItems: 'center',
                        gap: 1.5,
                        display: 'flex',
                        cursor: "pointer"
                    }}
                    onClick={() => onClick("landing")}
                >
                    <img src={logo} alt="" style={{ width: 50, height: 30 }} />
                    <Typography>
                        Krishnam Raju Jampana
                    </Typography>
                </Grid>
                {
                    matches ?
                        <Grid
                            sx={{ display: 'flex', gap: 2 }}
                        >
                            {
                                links.map((link) => (
                                    <Grid key={link}>
                                        <Typography
                                            onClick={() => onClick(link)}
                                            sx={{
                                                textTransform: 'capitalize',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            {link}
                                        </Typography>
                                    </Grid>
                                ))
                            }
                        </Grid>
                        :
                        <AccountMenu onClick={onClick} />
                }

            </Grid>
        </Grid>
    )
}
export default NavBar

const AccountMenu = ({ onClick }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLinkClick = (link) => {
        onClick(link);
        handleClose()
    }
    return (
        <React.Fragment>
            <MenuIcon onClick={handleClick} />

            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                {
                    links.map((link) => (
                        <MenuItem onClick={() => handleLinkClick(link)} sx={{ textTransform: 'capitalize', minHeight: '20px' }}>
                            {link}
                        </MenuItem>
                    ))
                }

            </Menu>
        </React.Fragment>
    );
}
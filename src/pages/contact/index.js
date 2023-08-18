import { Button, Grid, TextField, Typography } from "@mui/material"
import emailjs from '@emailjs/browser';
import Lottie from 'react-lottie';
import animation from '../../assets/data.json'
import * as yup from 'yup'
import { useState } from "react";
const templateId = "template_5znn1r9";
const publicKey = "uPeBHE0h75mul_nkP";
const service = "service_8ylx4rs"
const ContactUs = () => {
    return (
        <Grid
            container
            className="fill-w full-h relative"
            id="contact"
            sx={{
                padding: '24px',
                paddingTop: '80px !important'
            }}
        >

            <Grid container
                className="gh"
                sx={{
                    // flexDirection: {
                    //     xs: 'column-reverse',
                    //     md: 'row'
                    // },
                    display: 'flex'
                }}
            >
                <Grid item sm={12} md={6} xs={12}>
                    <ContactForm />

                </Grid>
                <Grid item sm={0} md={6} sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <LottileAnimaton />
                </Grid>
            </Grid>
        </Grid>
    )
}
const ContactForm = () => {
    const [sending, toggleSending] = useState(false)
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const send = async () => {
        try {
            toggleSending(true)
            let schema = yup.object({
                name: yup.string().required(),
                email: yup.string().email().required(),
                message: yup.string().required()
            });
            const user = await schema.validate(form);
            console.log(user)
            emailjs.send(
                service,
                templateId,
                {
                    from_name: form.name,
                    to_name: "krishnam",
                    from_email: form.email,
                    to_email: "krishanmraju@gmail.com",
                    message: form.message,
                },
                publicKey)
                .then((response) => {
                    toggleSending(false)
                    console.log('SUCCESS!', response.status, response.text);
                    setForm({
                        name: "",
                        email: "",
                        message: ""
                    })
                }, (err) => {
                    toggleSending(false)
                    console.log('FAILED...', err);
                });
        }
        catch (e) {
            toggleSending(false)
            console.log(e.message)
        }
    }
    return (
        <Grid container
            sx={{
                backgroundColor: "rgba(0,0,0,0.4)",
                borderRadius: 2.5,
                padding: 4,
                gap: 5,
                flexDirection: 'column'
            }}
        >
            <Typography
                sx={{
                    fontSize: 24,
                    fontWeight: 900,
                    textAlign: 'left'
                }}
            >
                Contact Me
            </Typography>
            <TextField
                required
                id="outlined-required"
                label="Your Name"
                className="input"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}

            />
            <TextField
                required
                id="outlined-required"
                label="Your Email"
                className="input"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}

            />
            <TextField
                required
                id="outlined-required"
                label="Your Message"
                className="input"
                multiline
                rows={4}
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
            />
            <Button
                variant="outlined"
                className="send"
                disabled={sending}
                onClick={send}
                sx={{
                    borderColor: "#c678c6",
                    width: 200,
                    textTransform: 'capitalize'
                }}
            >
                <Typography
                    sx={{
                        color: "white",
                        fontWeight: 'bold'
                    }}
                >
                    {!sending ? "Send" : "Sending..."}
                </Typography>
            </Button>
        </Grid>
    )
}
const LottileAnimaton = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <Grid container
            sx={{
                height: '100%',
                alignItems: 'center'
            }}
        >
            <Lottie options={defaultOptions}
                height={400}
                width={400}
            />
        </Grid>
    )
}
export default ContactUs
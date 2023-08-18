import spinov from '../assets/images/spinov.png';
import moneris from '../assets/images/moneris.png';
import portfolio from '../assets/images/portfolio.png'
const projectsData = [
    {
        id: 1,
        project: "Moneris Go Appetite",
        icon: moneris,
        desc: "Go Appetite is a Canada based cloud POS (SaaS). This includes seamless order-taking, KOT (Kitchen Order Ticket) printing, efficient menu management, inventory tracking, and feedback management.",
        techs: [
            {
                key: "#react",
                color: "#c678c6"
            },
            {
                key: "#react-native",
                color: "#c6c678"
            },
            {
                key: "#materialUI",
                color: "#78c6c6"
            }
        ]
    },
    {
        id: 2,
        project: "Spinov",
        icon: spinov,
        desc: "The game offers an interactive, enjoyable, and captivating way to elevate the sports-watching experience at bars. ",
        techs: [
            {
                key: "#react",
                color: "#c678c6"
            },
            {
                key: "#react-native",
                color: "#c6c678"
            },
            {
                key: "#materialUI",
                color: "#78c6c6"
            }
        ]
    },
    {
        id: 3,
        project: "Protfolio",
        icon: portfolio,
        desc: "My personal portfolio website using React, Framer motions and EmailJs",
        techs: [
            {
                key: "#react",
                color: "#c678c6"
            },
            {
                key: "#framer-motion",
                color: "#c6c678"
            },
            {
                key: "#materialUI",
                color: "#78c6c6"
            }
        ]
    }
]
export default projectsData
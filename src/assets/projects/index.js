import ClubSCIcon from './clubsc-icon.png';
import TrojanCheckIcon from './trojancheck-icon.png';

const DEVICES = {
    computer: "computer",
    phone: "phone"
};

const projects = [
    {
        name: "ClubSC",
        description: "A platform for find and join clubs at USC and monitor their latest announcements.",
        source: "",
        image: ClubSCIcon,
        demo: null,
        device: DEVICES.computer,
        finished: true,
    },
    {
        name: "TrojanCheck",
        description: "An application for monitoring building capacity to stop the spread of COVID-19.",
        source: "",
        image: TrojanCheckIcon,
        demo: null,
        device: DEVICES.phone,
        finished: true,
    },
    {
        name: "SLH Repository",
        description: "A repository for substance abuse and lived history accounts for the USC Annenberg School of Communications.",
        source: "",
        image: TrojanCheckIcon,
        demo: null,
        device: DEVICES.phone,
        finished: true,
    },
    {
        name: "UniLease",
        description: "An application to help university students sublease their property.",
        source: "",
        image: ClubSCIcon,
        demo: null,
        device: DEVICES.phone,
        finished: false,
    },
];

export default projects;
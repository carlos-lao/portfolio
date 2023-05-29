import clubSCDemo from './clubsc-demo.gif'
import trojanCheckDemo from './trojancheck-demo.gif'
import slhDemo from './slh-demo.gif'

const DEVICES = {
    computer: "computer",
    phone: "phone"
};

const projects = [
    {
        name: "ClubSC",
        description: "A platform to find and join clubs at USC and to monitor their latest announcements.",
        detailedDescription: "This project was my first large-scale React application with Spring Boot API Integration. In the process of creating this project, I spearheaded the design and implementation of the frontend, lead API integration, and performed UI/UX testing. In this undertaking I simultaneously spent time learning React and applied these learned concepts through implementation and assisting my partners. Additionally, I worked directly with the backend team and singlehandedly performed the majority of the backend integration.",
        source: "https://github.com/lrx0/CSCI201_ClubSC",
        demo: clubSCDemo,
        device: DEVICES.computer,
        finished: true,
    },
    {
        name: "TrojanCheck",
        description: "An application for monitoring building capacity at USC to stop the spread of COVID-19.",
        detailedDescription: "This project was my first large-scale iOS application coded natively in Swift and my first time working with Firebase. Programming this application gave me firsthand experience with Swift—and various modules within the language—as well as with Firebase Authentication, Storage, and Firestore. Additionally, due to an update to a Swift module that was released during the app's development, I also gained experience refactoring legacy code. Apart from this, because the application was created for a third-party client, applying principles of software engineering—such as requirements extraction, thorough documentation, and unit testing—were essential.",
        source: "https://github.com/ivanpeng-14/CSCI310-Group14",
        demo: trojanCheckDemo,
        device: DEVICES.phone,
        finished: true,
    },
    {
        name: "SLH Repository",
        description: "A repository for substance abuse and lived history accounts for the USC Annenberg School of Communications.",
        detailedDescription: "This project was created using plain HTML, CSS, JavaScript, PHP, and SQL. This marked my first time constructing a fully functional website with a vanilla-coded front and backend. It presented a very interesting challenge and also allowed me to gain some experience constructing a server and database from scratch. The project linked in the repository below is locally hosted; however, the finished product is kept by the Annenberg School for Communications and Journalism with restricted access.",
        source: "https://github.com/carlos-lao/slh-repository",
        demo: slhDemo,
        device: DEVICES.computer,
        finished: true,
    },
    {
        name: "UniLease",
        description: "An application to help university students sublease their property.",
        source: "",
        demo: null,
        device: DEVICES.phone,
        finished: false,
    },
];

export default projects;
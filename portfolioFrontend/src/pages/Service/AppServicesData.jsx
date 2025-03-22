import appService1 from "../../assets/mobileapp_native.jpg";
import appService2 from "../../assets/mobileapp_crossplatform.jpg";
import appService3 from "../../assets/mobileapp_customapp.jpg";
import appService4 from "../../assets/mobileapp_uiux.jpg";
import appService5 from "../../assets/mobileapp_testing.jpg";
import appService6 from "../../assets/mobileapp_maintenance.jpg";

import appBanner from "../../assets/appDev_Banner.jpg";
import appService from "../../assets/appDev_service.jpg";

export const AppServiceContent = [
  {
    title: "Mobile App Development",
    description:
      "We create intuitive and high-performance mobile applications tailored to your business needs, ensuring seamless user experiences.",
  },
  {
    title: "Overview",
    content1:
      "Each app we develop is designed to achieve tangible business results.",
    content2:
      "With proficiency in advanced native development, cross-platform solutions, and enterprise-level systems, our engineers transform ambitious concepts into engaging mobile experiences.",
  },
  {
    title: "What we are good at:",
    list: [
      {
        title: "Mobile-First Architecture",
        description:
          "Utilizing agile methodologies to create scalable, responsive solutions aligned with mobile-first strategies.",
      },
      {
        title: "Enterprise Mobility",
        description:
          "Crafting secure, high-performance applications to optimize business operations and boost productivity across various industries.",
      },
      {
        title: "Integration Expertise",
        description:
          "Seamlessly linking mobile applications with third-party services, APIs, and backend systems.",
      },
      {
        title: "Performance Optimization",
        description:
          "Guaranteeing fast, lightweight, and highly responsive apps, even under heavy user demand.",
      },
      {
        title: "Custom Mobile Solutions",
        description:
          "Designing tailored applications to solve unique business challenges and drive meaningful outcomes.",
      },
    ],
  },
  {
    src: appService,
    alt: "App Service Image",
  },
  {
    src: appBanner,
    alt: "App Banner Image",
  },
];

export const AppServices = [
  {
    id: 1,
    title: "Native Mobile App Development",
    image: appService1,
    description:
      "We develop high-performance native apps using Swift, Objective-C, Kotlin, and Java. Our apps seamlessly integrate with hardware and software for optimal reliability and functionality.",
  },
  {
    id: 2,
    title: "Cross-Platform App Development",
    image: appService2,
    description:
      "We build cost-effective cross-platform apps using Flutter, React Native, and Xamarin for seamless performance on multiple platforms. Our single codebase approach ensures faster development, scalability, and flexibility.",
  },
  {
    id: 3,
    title: "Custom Mobile App Development",
    image: appService3,
    description:
      "We develop custom mobile apps tailored to your business needs, integrating scalable architectures and advanced features like geolocation, real-time analytics, and payment systems. Our solutions ensure seamless performance and alignment with your goals.",
  },
  {
    id: 4,
    title: "UI/UX Design Service",
    image: appService4,
    description:
      "We design user-friendly, visually stunning mobile apps with seamless navigation using Figma, Adobe XD, and Sketch. Our UI/UX designs are based on user behavior analysis to enhance engagement and usability.",
  },
  {
    id: 5,
    title: "Mobile App Testing",
    image: appService5,
    description:
      "We ensure app quality with rigorous testing using tools like Appium, Selenium, and TestComplete. Our process covers functionality, performance, security, and usability for a flawless user experience.",
  },
  {
    id: 6,
    title: "Ongoing Maintenance",
    image: appService6,
    description:
      "Our support continues beyond launch with ongoing maintenance and updates for optimal app performance. We ensure compatibility, monitor issues, and enhance scalability to keep your app reliable and future-ready.",
  },
];

import {
    SiFlutter,
    SiSwift,
    SiKotlin,
    SiOpenjdk, 
    SiDart,
    SiFirebase,
    SiGraphql,
    SiMongodb,
    SiMysql,
    SiPostgresql,
    SiFastapi,
    SiExpress,
    SiRedux,
    SiTypescript,
    SiGooglecloud,
    SiAndroid,
    SiApple,
    SiDotnet,
  } from "react-icons/si";
  
  import { FaNodeJs, FaReact, FaWindows } from "react-icons/fa"; 
  
  export const AppallTechIcons = [
    { icon: <SiFlutter />, name: "Flutter" },
    { icon: <FaReact />, name: "React Native" }, 
    { icon: <SiSwift />, name: "Swift" },
    { icon: <SiKotlin />, name: "Kotlin" },
    { icon: <SiDart />, name: "Dart" },
    { icon: <SiOpenjdk />, name: "Java" }, 
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <SiFastapi />, name: "FastAPI" },
    { icon: <SiDotnet />, name: ".NET" },
    { icon: <SiGraphql />, name: "GraphQL" },
    { icon: <SiRedux />, name: "Redux" },
    { icon: <SiTypescript />, name: "Typescript" },
    { icon: <SiGooglecloud />, name: "Google Cloud" },
    { icon: <SiAndroid />, name: "Android" },
    { icon: <SiApple />, name: "iOS" },
    { icon: <FaWindows />, name: "Xamarin" }, 
  ];
  

export const AppFAQs = [
  {
    questions: [
      {
        question: "How long does it take to develop a mobile app?",
        answer:
          "The timeline for developing a mobile app depends on the complexity of the app and the number of features it requires. On average, it takes 2-6 months to develop a mobile app.",
      },
      {
        question:
          "Can you help with updating and maintaining my existing mobile app?",
        answer:
          "Yes, we provide maintenance and support services for existing mobile apps. Our team can help you with bug fixes, updates, and enhancements to keep your app running smoothly and efficiently.",
      },
      {
        question:
          "How do you ensure the security of the mobile apps you develop?",
        answer:
          "We prioritize app security by following the latest standards and secure coding practices to prevent potential threats.",
      },
    ],
  },
  {
    questions: [
      {
        question: "How do you ensure the quality of mobile apps you develop?",
        answer:
          "Quality assurance is our priority. Our QA team uses manual and automated testing to ensure bug-free, high-quality apps that meet client requirements.",
      },
      {
        question:
          "Do you have experience developing mobile apps for different industries?",
        answer:
          "Yes, we have extensive experience developing mobile apps across industries like gaming, healthcare, finance, logistics, and e-commerce, delivering tailored solutions.",
      },
      {
        question:
          "What are the latest technologies you use for mobile app development?",
        answer:
          "Our experts use the latest technologies like Kotlin, Java, Swift, and Objective-C for high-performance apps, along with React Native, Xamarin, and Flutter for cross-platform development.",
      },
    ],
  },
];

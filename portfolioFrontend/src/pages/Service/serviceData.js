import aboutService from '../../assets/service-bg-image.jpg';

export const projects = {
  frontend: {
    extra: [
        {
            name : "Front End Development",
            description : "Encompasses building and maintaining websites, including front-end (user interface) development."
        }
    ],
    service: [
      {
        id: 1, // Unique id for the first project
        title: "Mobile Application Project",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, soluta atque ipsam reiciendis adipisci.",
        technologies: ["Flutter", "React Native", "Dart"],
        images: [aboutService, aboutService, aboutService],
        alt: "Mobile Application Images",
      },
      {
        id: 2, // Unique id for the second project
        title: "Web Development Project",
        description:
          "Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        technologies: ["HTML", "CSS", "JavaScript"],
        images: [aboutService, aboutService, aboutService],
        alt: "Web Development Images",
      },
    ],
  },
};

// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: '#4484ce, #1ad7c0, #ff9b11, #9b59b6, #097915, #ecf0f1',
  firstName: 'Shaun',
  middleName: '',
  lastName: 'Valentine',
  // jobTitle: 'Software Engineer',
  message: ' Changing the world with technology by working smarter not harder.',
  icons: [
    {
      image: 'fa-github',
      url: 'https://github.com/valensh1',
    },
    // {
    //   image: "fa-facebook",
    //   url: "https://www.facebook.com/hashirshoaeb",
    // },
    // {
    //   image: "fa-instagram",
    //   url: "https://www.instagram.com/hashirshoaeb/",
    // },
    {
      image: 'fa-linkedin',
      url: 'https://www.linkedin.com/in/shaunvalentine/',
    },
    // {
    //   image: "fa-twitter",
    //   url: "https://www.twitter.com/hashirshoaeb/",
    // },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

//! git add -A
//! git commit -m"Commit message"
//! git push origin master - this will push to git
//! git push heroku master - it will ask for username and then password. Password is the API key which you can get by logging in to heroku and going to settings and then finding your API key and pasting it when VS Code asks for your password.

const about = {
  show: true,
  heading: 'About Me',
  imageLink: require('../editable-stuff/profile.png'),
  imageSize: 375,
  message:
    "My name is Shaun Valentine. I recently graduated from General Assembly's Software Engineering boot camp. I am a Software Engineer who enjoys getting greasy under the hood and thinking outside the box to tackle real-world problems with results that not only work today but well into the future. Through my ability to problem-solve and meticulous attention to detail combined with a creative mindset I am driven to enhance and create new products and features that drive business profitability.",
  resume: 'https://1drv.ms/w/s!Ar1gaMspqX1Cg9Q_joDIsuHvp2mXrA?e=J8aDAC',
};

// PROJECTS SECTION
// Setting up project length will automatically fetch your number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: 'Recent Projects',
  gitHubUsername: 'valensh1', //i.e."johnDoe12Gh"
  reposLength: 0, // This is a number
  specificRepos: ['Stock-Site', 'Wall-Street-Game', 'Mapty'], // This is blank if showing a number
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: 'Leadership',
  message:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.',
  images: [
    {
      img: require('../editable-stuff/hashirshoaeb.png'),
      label: 'First slide label',
      paragraph: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    },
    {
      img: require('../editable-stuff/hashirshoaeb.png'),
      label: 'Second slide label',
      paragraph: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    },
  ],
  imageSize: {
    width: '615',
    height: '450',
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: 'Skills',
  hardSkills: [
    { name: 'HTML/CSS', value: 80 },
    { name: 'Javascript', value: 80 },
    { name: 'React', value: 75 },
    { name: 'Express', value: 70 },
    { name: 'MongoDB', value: 90 },
    { name: 'SQL', value: 65 },
    { name: 'Bootstrap', value: 55 },
    { name: 'Ruby/Ruby on Rails', value: 80 },
  ],
  softSkills: [
    { name: 'Goal-Oriented', value: 80 },
    { name: 'Collaboration', value: 90 },
    { name: 'Positivity', value: 75 },
    { name: 'Adaptability', value: 85 },
    { name: 'Problem Solving', value: 75 },
    { name: 'Empathy', value: 90 },
    { name: 'Organization', value: 70 },
    { name: 'Creativity', value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: 'Contact',
  message:
    "I'm currently looking for full-time Software Engineering op unities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: 'valensh1@yahoo.com',
  phone: '562-417-2323',
  linkedIn: 'https://www.linkedin.com/in/shaunvalentine/',
};

const experiences = {
  show: true,
  heading: 'Experiences',
  data: [
    {
      role: 'Software Engineer - General Assembly',
      companylogo: require('../assets/img/generalassembly.jpeg'),
      date: 'Oct 2020 ??? Apr 2021',
    },
    {
      role: 'Accounting Manager',
      companylogo: require('../assets/img/auction.png'),
      date: 'Dec 2013 ??? Jul 2020',
    },
  ],
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  experiences,
};

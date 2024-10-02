import {
  linkedin, instagram, twitter, github, linkedin1, instagram1, twitter1, github1, braintumor,project1,project2,project3,project4, cloud, coding, devops,brain1,brain2
} from '../assets';

const social = [
  {
    id: 1,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/aryansingh1312/',
    icon: linkedin,
    icon1: linkedin1,
  },
  {
    id: 2,
    name: 'Instagram',
    url: 'https://www.instagram.com/aryansingh4894/',
    icon: instagram,
    icon1: instagram1,
  },
  {
    id: 3,
    name: 'Twitter',
    url: '',
    icon: twitter,
    icon1: twitter1,
  },
  {
    id: 4,
    name: 'Github',
    url: 'https://github.com/Aryansin1234/',
    icon: github,
    icon1: github1,
  },
];

const technologies = [

  {
    stack: ['Programming Languages and Databases', 'all'],
    name: 'Python',
    icon: 'https://img.icons8.com/?size=100&id=13441&format=png&color=000000',
  },
  {
    stack: ['Programming Languages and Databases', 'all'],
    name: 'Rust',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg',
  },
  {
    stack: ['Programming Languages and Databases', 'all'],
    name: 'Bash',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg',
  },
  {
    stack: ['Tools & Platforms', 'all'],
    name: 'Linux',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',
  },
  {
    stack: ['Devops & Cloud', 'all'],
    name: 'Docker',
    icon: 'https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000',
  },
  {
    stack: ['Devops & Cloud', 'all'],
    name: 'Kubernetes',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg',
  },
  {
    stack: ['Devops & Cloud', 'all'],
    name: 'Ansible',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansible/ansible-original.svg',
  },
  {
    stack: ['Devops & Cloud', 'all'],
    name: 'Terraform',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg',
  },
  {
    stack: ['Devops & Cloud', 'all'],
    name: 'Jenkins',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg',
  },
  {
    stack: ['Devops & Cloud', 'all'],
    name: 'Amazon Web Services',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  },
  {
    stack: ['Tools & Platforms', 'all'],
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg',
  },
  {
    stack: ['Tools & Platforms', 'all'],
    name: 'GitHub',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  },
  {
    stack: ['Tools & Platforms', 'all'],
    name: 'Grafana',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg',
  },
  {
    stack: ['Tools & Platforms', 'all'],
    name: 'VSCode',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
  },
  {
    stack: ['Programming Languages and Databases', 'all'],
    name: 'MySQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg',
  },
  {
    stack: ['Programming Languages and Databases', 'all'],
    name: 'Firebase',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg',
  },
  {
    stack: ['Programming Languages and Databases', 'all'],
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
  },
  // {
  //   stack: ['tools', 'all'],
  //   name: 'Postman',
  //   icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
  // },
];

const projects = [
  {
    id: 1,
    name: 'Brain Tumor Detection App',
    desc: 'Developed a Dockerized Flask application for brain tumor detection using EfficientNetB3 and deployed it on a cloud platform with Kubernetes for scalable container management. Automated infrastructure provisioning with Terraform and set up a Jenkins CI/CD pipeline for seamless deployment.',
    tech: ['Python', 'TensorFlow', 'Docker', 'Terraform', 'Jenkins','AWS'],
    img: braintumor,
    carousel: [brain1, brain2],
    source_link: 'https://github.com/Aryansin1234/Brain-Tumor-Detection-Application',
    live_link: '',
  },
  {
    id: 2,
    name: 'Thinking About it',
    desc: 'Finding something interesting to build and showcase',
    tech: [],
    img: project1,
    carousel: [],
    source_link: '',
    live_link: ''
  },
  {
    id: 3,
    name: 'Thinking About it',
    desc: 'Abhi Aisa Immediatly nhi soche h but sochenge',
    tech: [],
    img: project2,
    carousel: [],
     source_link: '',
    live_link: ''
  },
  {
    id: 4,
    name: 'Thinking About it',
    desc: 'Finding something interesting to build and showcase',
    tech: [],
    img: project4,
    carousel: [],
    source_link: '',
    live_link: ''
  },
  {
    id: 5,
    name: 'Thinking About it',
    desc: 'Finding something interesting to build and showcase',
    tech: [],
    img: project3,
    carousel: [],
    source_link: '',
    live_link: ''
  },
  {
    id: 6,
    name: 'Thinking About it',
    desc: 'Abhi Aisa Immediatly nhi soche h but sochenge',
    tech: [],
    img: project4,
    carousel: [],
    source_link: '',
    live_link: ''
  },
  {
    id: 7,
    name: 'Thinking About it',
    desc: 'Finding something interesting to build and showcase',
    tech: [],
    img: project1,
    carousel: [],
    source_link: '',
    live_link: ''
  },
  {
    id: 8,
    name: 'Thinking About it',
    desc: 'Abhi Aisa Immediatly nhi soche h but sochenge',
    tech: [],
    img: project2,
    carousel: [],
    source_link: '',
    live_link: ''
  },
  {
    id: 9,
    name: 'Thinking About it',
    desc: 'Finding something interesting to build and showcase',
    tech: [],
    img: project3,
    carousel: [],
    source_link: '',
    live_link: ''
  },
];

const testimonials = [
  {
    id: 1,
    name: 'Mohd Shuaib',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQF6apBqbRF4lg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726217045860?e=1733356800&v=beta&t=CZX9I2_CGWv_-p6xCbCaCh84JBRzm-nxAuub_BFoP48',
    text: 'Throughout the research project, Aryan displayed remarkable skill and dedication. Their innovative approach and technical proficiency in deep learning were impressive and significantly contributed to our work. I am confident in their future success and highly recommend them.',
    country: 'India',
    linkedIn: 'https://www.linkedin.com/in/mohd-shuaib6428/',
  },
  {
    id: 2,
    name: 'Aryan Chaudhary',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQGO_NSTm1osIw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1711988727837?e=1730937600&v=beta&t=hTqyZY74hpfG4cXrE8rkMqbhZvVtE4DSM6WBjh7IfF0',
    text: "Working with Aryan has been awesome! He was a big help on our mango leaf disease detection project, from Dockerizing to deploying it on the cloud. His skills are impressive, and I'm excited to work on more projects together!",
    country: 'India',
    linkedIn: 'https://www.linkedin.com/in/thegurjararyan/',
  },
  {
    id: 3,
    name: 'Aditya Joshi',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQG3R5b6enjmWQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1714320391808?e=1733356800&v=beta&t=_4RbnuoQUNDlAbt280A1_e0j9NABqBa0mwmKBZXqjaI', 
    text: 'Aryan is an enthusiastic and dedicated learner with a knack for exploring creative and innovative ideas. His research work showcases his curiosity and ability to tackle complex problems. I am confident in his potential to excel in whatever he sets his mind to.',
    country: 'India',
    linkedIn: 'https://www.linkedin.com/in/aditya-joshi-4b626a20'
  },
  {
    id: 4,
    name: 'Divyanshu Rajwar',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQE0Lmhw-nGQoA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1692676677805?e=1733356800&v=beta&t=tklrb_PFCQ3skl49xOVgj7y1ltGTAY0Vq7RDywSWhU0',
    text: "Working with Aryan on full-stack projects has been a pleasure. His cloud and DevOps expertise is invaluable for deploying complex applications. Aryan is always the go-to person for innovative solutions and smooth deployments, making collaboration effortless.",
    country: 'India',
    linkedIn: 'https://www.linkedin.com/in/divyanshurajwar',
  },
  {
    id: 5,
    name: 'Ashmit Singh',
    image: 'https://media.licdn.com/dms/image/D4E03AQHd0zi0BxFCgg/profile-displayphoto-shrink_800_800/0/1692287244105?e=1730937600&v=beta&t=6JG4GIpHpfJ_KaFFgW6Bbl37DFNrfi5JRMpDk17rh_k',
    text: 'Aryan has been an amazing partner on my skin cancer detection project! His innovative ideas and keen insights always take our discussions to the next level. I truly appreciate his support and creativity—he makes the process not just productive but also enjoyable!',
    country: 'India',
    linkedIn: 'https://www.linkedin.com/in/ashmit-singh-376799328',
  }
  
  
];

const services = [
  {
    id: 1,
    icon: devops,
    title: 'DevOps Solutions',
    text: 'I specialize in setting up and managing CI/CD pipelines to enhance development workflows. My DevOps expertise includes automating and scaling environments with tools like Terraform, Ansible, and Kubernetes. Additionally, I implement robust monitoring and performance tuning solutions using Prometheus and Grafana to ensure system reliability and efficiency. I also manage Docker containers and orchestrate them with Kubernetes to streamline application deployment.',
  },
  {
    id: 2,
    icon: cloud,
    title: 'Cloud Solutions',
    text: 'I design and manage cloud infrastructure, focusing on creating scalable and cost-effective solutions on AWS. My services include architecting cloud environments, optimizing resource usage, and ensuring security and performance. I leverage cloud technologies to build and maintain resilient systems that support modern applications and business needs.',
  },
  {
    id: 3,
    icon: coding,
    title: 'Coding & Problem Solving',
    text: 'I specialize in coding and problem-solving, creating efficient and scalable applications using Python and Rust. I manage databases like MongoDB, MySQL, and Firebase, ensuring data integrity and performance. My expertise extends to troubleshooting complex issues and delivering practical solutions through hands-on project work, demonstrating my abckle real-world challenges effectively.',
  },
];

const navLinks = [
  {
    id: 1,
    name: 'About',
    url: '/#about',
  },
  {
    id: 2,
    name: 'Service',
    url: '/#service',
  },
  {
    id: 3,
    name: 'Work',
    url: '/#work',
  },
  {
    id: 4,
    name: 'Testimonial',
    url: '/#testimonial',
  },
  {
    id: 5,
    name: 'Contact',
    url: '/#contact',
  },
];

export {
  technologies, projects, testimonials, social, services, navLinks,
};

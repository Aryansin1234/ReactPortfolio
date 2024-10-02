import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../hoc';
import style from './styles/about.module.css';
import { textVariant, fadeIn } from '../utils/motion';

const About = () => (
  <>
    <motion.h1 variants={textVariant()} className={style.title}>
      About Me
    </motion.h1>
    <div className={style.para}>
      <motion.p variants={fadeIn('', '', 0.5, 1)} className={style.text}>
        Hey there! I&apos;m
        {' '}
        <a
          href="https://www.linkedin.com/in/aryansingh1312/"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          Aryan Singh,
        </a>
        {' '}
        a DevOps enthusiast specializing in automation, cloud technologies, and CI/CD processes. With a strong foundation in Python and AWS, I excel at building and managing scalable, high-performance systems. My passion lies in leveraging DevOps practices to optimize workflows and drive innovation in fast-paced environments. 
      </motion.p>
      <motion.p variants={fadeIn('', '', 1, 1)} className={style.text}>
      I developed an interest in technology and coding in the 10th grade, sparking a passion that continues to drive me. Currently pursuing a Bachelor of Computer Applications (BCA) at Graphic Era University in Dehradun, I am focused on expanding my skills in DevOps and cloud technologies.
      </motion.p>
      <motion.p variants={fadeIn('', '', 1.25, 1)} className={style.text}>
        As a DevOps and Cloud enthusiast I thrive on tackling real-world projects that involve 
        {' '}
        <a
          href="https://leetcode.com/u/aryansin2468/"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          problem-solving
        </a>
        {' '} and optimizing processes. I am always eager to enhance my skill set by exploring the latest tools and technologies in the DevOps field. I am actively seeking job opportunities that allow me to apply my expertise, make a meaningful impact, and grow further in the dynamic realms of DevOps and cloud computing.
      </motion.p>
      <motion.p variants={fadeIn('', '', 1.25, 1)} className={style.text}>
      In addition to my technical skills in DevOps and Cloud Architecture, I pride myself on being an eager learner, problem solver, adaptable team player with excellent time management and attention to detail. I am committed to continuous learning and innovation in fast-paced tech environments. Outside of work, I enjoy listening to music, gaming, and reading about space and technology.
      </motion.p>

      <motion.p variants={fadeIn('', '', 1.5, 1)} className={style.text}>
        Ready to bring your project to life? Reach out—I&apos;m excited to collaborate!
        {' '}
        <a
          href="https://drive.google.com/file/d/15-uZZoI-qO34u5a1Xj6OUxj3V6uxNoTz/view?usp=sharing"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          Check out my resume
        </a>
        {' '}
        for more insights into my journey and qualifications.
      </motion.p>
    </div>
  </>
);

export default SectionWrapper(About, 'about', '');

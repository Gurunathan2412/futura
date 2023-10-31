import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { ModelsCanvas2 } from "./canvas";



const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>About Futura</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-12 text-secondary text-[17px] leading-[30px]'
      >
        The Department of Artificial Intelligence and Data Science at Sri Sairam Institute of Technology hosts the national techfest FUTURA<br/>A Festival filled with fascination and excitement comes to provide an oppurtunity to showcase your creative ideas and talents.<br/>Get ready to witness the most thrilling challenges.  </motion.p>
    
    {/* <ModelsCanvas2/> */}
    
    </>
  );
};

export default SectionWrapper(About, "about");

import ButtonLink from "@/components/common/buttons/ButtonLink/ButtonLink";
import { socials } from "@/consts/Socials/socials";
import { contentVariants } from "@/consts/animation/animation";
import { motion } from "motion/react";

import styles from "./footerSection.module.scss";

const FooterSection = () => {
  return (
    <motion.div
      className={styles.footerSection}
      variants={contentVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2 variants={contentVariants}>
        Join our community and harvest $SALT
      </motion.h2>
      <motion.footer variants={contentVariants}>
        <motion.div className={styles.buttons} variants={contentVariants}>
          <ButtonLink noBorder size="md">
            How It Works
          </ButtonLink>
          <ButtonLink noBorder size="md">
            Buy Salt AI
          </ButtonLink>
        </motion.div>
        <hr />
        <motion.footer className={styles.footer} variants={contentVariants}>
          <motion.div className={styles.socials} variants={contentVariants}>
            {socials.map((social) => (
              <img src={social} alt="Social" key={social} />
            ))}
          </motion.div>
          <motion.div className={styles.links} variants={contentVariants}>
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
          </motion.div>
        </motion.footer>
      </motion.footer>
    </motion.div>
  );
};

export default FooterSection;

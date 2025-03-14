import { card } from "../assets";
import styles, { layout } from "../styles";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Vision <br className="sm:block hidden" /> 
        
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      - Our vision is to empower businesses with innovative and cutting-edge technologies that drive growth and transformation.
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      - Our vision is to maintain a culture of excellence and integrity, where we continually strive to exceed expectations and uphold the highest ethical standards in everything we do..
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      - triving to be the preferred choice for businesses seeking reliable and customized IT solutions, by placing our customers' needs and satisfaction at the forefront of everything we do.      .
      </p>
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Mission
      <br className="sm:block hidden" /> 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      - To consistently deliver excellence in all our services and solutions, meeting and exceeding our clients' expectations while adhering to the highest industry standards
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      - Nurture a learning organization that encourages the professional growth and development of our team members, ensuring they remain up-to-date with the latest trends and technologies.
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      - Embrace an innovation-driven approach to R&D, product development, and service delivery, pushing the boundaries of what's possible and staying at the forefront of technological advancements.
      </p>
    </div>
  </section>
);

export default CardDeal;

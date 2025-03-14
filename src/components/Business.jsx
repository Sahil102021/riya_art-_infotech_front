import { features } from "../constants";
import styles, { layout } from "../styles";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Choose The Best IT <br className="sm:block hidden" /> Service, Company
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Riya art infotech one of the fastest-growing software development
        companies serving since 2021. We supply innovative and best-in-class
        consulting, IT solutions and outsourcing services. We have developed
        100+ unique products counting apps,and web based services. We
        have been outsourcing for 3 year. We're a team of techie engineers and
        graphics artists with experience covering most services of the mobile
        and web development process.
      </p>

      
      <Button styles={`mt-10`} />
     
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;

import styles, { layout } from "../style";
import Button from "./Button";
import datacamplogo from "../fdssresources/datacamplogo.png";

const Datacamp = () => (
  <section   className={layout.section}>
    

    <div  className={layout.sectionImg}>
      <img src={datacamplogo} alt="billing" className="w-[110%] h-[100%]" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Our Sponsor<br className="sm:block hidden" /> 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Data Camp seeks to empower individuals with the skills needed to make data-driven decisions and drive innovation in their respective fields. 
      </p>

      <Button styles={`mt-10`} />
    </div>

  </section>
);

export default Datacamp;

import styles from "./style";
import { Business, CardDeal, Clients, Footer, Navbar, Stats, Testimonials,Hero,Datacamp } from "./components";

const App = () => (
  
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
       
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
      <CardDeal />
        <Business />
        <Stats />
        <Datacamp />
         <Testimonials />
         <Footer />
      </div>
    </div>
  </div>
);

export default App;

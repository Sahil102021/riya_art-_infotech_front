import styles from "./styles";
import { Product, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero, Termandcondition } from "./components";
import Mainform from "./components/Mainform";

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
        <Stats />
        <Business />
        <Product />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Mainform />
        <Footer />
        <Termandcondition />
      </div>
    </div>
  </div>
);

export default App;
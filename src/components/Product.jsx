import {
  apple,
  google,
} from "../assets";
import styles, { layout } from "../styles";
import { industries } from "../constants";

const product = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <div className="w-full">
        <div class="grid grid-cols-2  sm:grid-cols-3  gap-5">
          {industries.map((el, i) => {
            return (
              <div className="relative flex flex-col justify-center items-center gap-3 p-5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl  hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br  to-purple-600 opacity-20 rounded-2xl blur-xl"></div>
                <div className="relative w-16 h-16 flex justify-center items-center rounded-full bg-gradient-to-br to-purple-700 shadow-lg p-2">
                  <img
                    src={el.icon}
                    className="w-full h-full object-contain"
                    alt=""
                  />
                </div>
                <p className="relative text-lg uppercase text-white text-center font-poppins" >
                  {el.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {/* <img
        src={bill}
        alt="product"
        className="w-[100%] h-[100%] relative z-[5]"
      /> */}

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        We’ve got a Rich Experience <br className="sm:block hidden" /> of
        Multiple Industries Worldwide
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We have a team of 20+ professionals who can code your ideas into
        excellent software.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img
          src={apple}
          alt="google_play"
          className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
        />
        <img
          src={google}
          alt="google_play"
          className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
        />
      </div>
    </div>
  </section>
);

export default product;

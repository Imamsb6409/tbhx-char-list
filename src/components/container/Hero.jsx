import heroImg from "../../assets/tbhx.webp";
import CardList from '../Perintilan/CardList';

function Hero() {
  return (
    <section className="">
      <img src={heroImg} className="fixed lg:top-[100px] xl:top-[200px] -z-10 opacity-20"  alt="" />
 <CardList />
    </section>
  );
}

export default Hero;



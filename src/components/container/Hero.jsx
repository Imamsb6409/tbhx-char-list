import heroImg from "../../assets/tbhx.webp";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <img
        src={heroImg}
        alt="Hero"
        className="
          w-[90vw] max-w-5xl 
          opacity-100
          select-none
        "
      />
    </section>
  );
}

export default Hero;



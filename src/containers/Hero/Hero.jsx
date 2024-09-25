import './Hero.scss'
import MobileButton from "../../components/buttons/MobileButton"
import spotLight from "../../assets/spot-light.svg"

const Hero = () => {
  return (
    <>
      <main>
        <div className="hero-container overflow-hidden relative w-full h-[100vh] flex flex-col items-center justify-center text-white">
          <img src={ spotLight } alt="spotlight" className='absolute top-[-130px] left-[-100px] rotate-[-25deg] opacity-[.30]'/>
          <h1 className="font-semibold text-[35px] text-center">
            <span className="font-thin">I am</span>
            <br /> Binnukrishna
          </h1>
          <h1 className='text-center text-[24px]'>
            <span className='font-thin'>a </span> <span className='text-[30px]'> Web Developer</span>
          </h1>

          <a href="#">
            <MobileButton/>
          </a>
        </div>
      </main>
    </>
  );
}

export default Hero
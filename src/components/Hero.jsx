import { logo } from "../assets";
import { DiGithubBadge } from "react-icons/di";
import { CiStar } from "react-icons/ci";
import { RainbowButton } from "./magicui/RainbowButton";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        <RainbowButton
          type='button'
          onClick={() =>
            window.open("https://github.com/AshishXGitHub", "_blank")
          }
          
        >
          <DiGithubBadge size={23} />
          Star on GitHub
          <CiStar size={15} />
        </RainbowButton>
      </nav>

      <h1 className='head_text'>
        <span className='animate-text-reveal'>
          Summarize Articles with <br className='max-md:hidden' />
          <span className='deep_gradient'>OpenAI GPT-4</span>
        </span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;

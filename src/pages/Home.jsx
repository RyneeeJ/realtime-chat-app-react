import Button from "../components/Button";
import { useSlider } from "../contexts/SliderContext";

function Home() {
  const { handleOpen } = useSlider();
  return (
    <div className="mt-44 text-center sm:mt-52">
      <h1 className="mb-6 text-4xl font-bold leading-[44px] sm:mb-10 sm:text-5xl">
        Welcome to <span className="text-blue-600">React</span>Talks
      </h1>
      <p className="mb-10 text-lg font-extralight text-gray-400 sm:mb-16 sm:text-2xl">
        <span className="md:hidden">Click to add/message a friend</span>
        <span className="hidden md:block">
          Select a conversation to start chatting
        </span>
      </p>
      <div className="md:hidden">
        <Button onClick={handleOpen} color="blue" size="large">
          <span className="sm:text-2xl">Open Dashboard</span>
        </Button>
      </div>
    </div>
  );
}

export default Home;

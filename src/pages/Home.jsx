import Button from "../components/Button";
import { useSlider } from "../contexts/SliderContext";

function Home() {
  const { handleOpen } = useSlider();
  return (
    <div className="mt-44 text-center">
      <h1 className="mb-6 text-4xl font-bold leading-[44px]">
        Welcome to <span className="text-blue-600">React</span>Talks
      </h1>
      <p className="mb-10 text-lg font-extralight text-gray-400">
        Click to add/message a friend
      </p>
      <Button onClick={handleOpen} color="blue" size="large">
        Open Dashboard
      </Button>
    </div>
  );
}

export default Home;

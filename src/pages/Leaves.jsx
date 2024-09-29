import Cards from "../components/Cards";
import Nav from "../components/Nav";

import FallingLeaves from "../assets/mp3/Falling Leaves.mp3";


function Leaves() {
  return (
    <div>
      <Cards
        backgroundImage="https://i.pinimg.com/originals/95/d0/6e/95d06ee0ac5a1bbc810ae3994dc85b81.gif"
        title="The sound of rustling leaves"
        pragraf="The rustling of leaves when the wind blows."
      />
      <Nav />
      <div className="hidden">
        <audio controls autoPlay loop>
          <source name="audio-player" src={FallingLeaves} type="audio/mp3" />
        </audio>
      </div>
    </div>
  );
}

export default Leaves;

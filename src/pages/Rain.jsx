import Cards from "../components/Cards";
import Nav from "../components/Nav";

import rain from "../assets/mp3/Rain.mp3";

function Rain() {
  return (
    <div>
      <Cards
        backgroundImage="https://i.pinimg.com/originals/e2/b2/38/e2b2381637002ed7a34601b6e1af5609.gif"
        title="The sound of rain"
        pragraf="The falling of raindrops on the ground or surfaces."
      />
      <Nav />
      <div className="hidden">
        <audio controls autoPlay loop>
          <source name="audio-player" src={rain} type="audio/mp3" />
        </audio>
      </div>
    </div>
  );
}

export default Rain;

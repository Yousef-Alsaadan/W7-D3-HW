import Cards from "../components/Cards";
import Nav from "../components/Nav";

function Home() {
  return (
    <div>
      <Cards
        backgroundImage="https://media.licdn.com/dms/image/v2/D4D12AQEeSJFpNp0y2w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1726269831119?e=2147483647&v=beta&t=9BUsMl7-jd76nqqlpK9ZvbErggmCEvgHXhTUtnCd5o0"
        title="Sound Effects"
        pragraf="Change your mood by listening to nature."
      />
      <Nav />
    </div>
  );
}

export default Home;

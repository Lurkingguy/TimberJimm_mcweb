import './Home.css';
import roadImage from '../../assets/pics/road.png';

function Home() {
  return (
    <div className="home">
      {/* Hero section */}
      <section className="hero">
        <h1>Welcome to My Art World</h1>
        <p>Explore, create, and connect through visual stories.</p>
      </section>

      {/* Picture and text section */}
      <section className="intro-section">
        <img
         src={roadImage}
         alt="road_art" 
         className="RoadArtImage"
        />
        <div className="intro-text">
          <h2>Express Your Inner World</h2>
          <p>
            Through photography and design, I captured moments that tell stories.
            Join me on this journey of creativity and emotion.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;

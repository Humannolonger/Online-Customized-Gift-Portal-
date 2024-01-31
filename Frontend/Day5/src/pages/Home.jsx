import { Link } from 'react-router-dom';
import "../assets/css/Home.css";

function Home() {
  return (
    <>
      <div className="showcase">
        <h1 className="he">Presents</h1>
        <div>
          
          <Link to="/Login">
            <button className="main-btn">Get started</button>
          </Link>
        </div>
      </div>

      <div className="cpyr">
        <p>&copy; Presents</p>
      </div>
    </>
  );
}

export default Home;

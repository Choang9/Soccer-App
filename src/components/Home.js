import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="main-body">
      <h1 className="team-content">Teams</h1>
      <div className="row row-cols-1 row-cols-md-5">
        <div className="col mb-4">
          <div className="card h-100">
            <img
              src="./images/Arsenal.svg"
              className="card-img-top"
              alt="Arsenal"
            />
            <div className="card-body">
              <h5 className="card-title">Arsenal</h5>
              <p className="card-text">Emirates Stadium, London</p>
              <Link to="/arsenal/overview" className="btn btn-primary">
                More information
              </Link>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card h-100">
            <img
              src="./images/AstonVilla.svg"
              className="card-img-top"
              alt="Aston Villa"
            />
            <div className="card-body">
              <h5 className="card-title">Aston Villa</h5>
              <p className="card-text">Villa Park, Birmingham</p>
              <Link to="/astonvilla/overview" className="btn btn-primary">
                More information
              </Link>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card h-100">
            <img
              src="./images/Brighton.svg"
              className="card-img-top"
              alt="Brighton"
            />
            <div className="card-body">
              <h5 className="card-title">Brighton</h5>
              <p className="card-text">Amex Stadium, Falmer</p>
              <Link to="/brighton/overview" className="btn btn-primary">
                More information
              </Link>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card h-100">
            <img
              src="./images/Burnley.svg"
              className="card-img-top"
              alt="Burnley"
            />
            <div className="card-body">
              <h5 className="card-title">Burnley</h5>
              <p className="card-text">Turf Moor, Burnley</p>
              <Link to="/burnley" className="btn btn-primary">
                More information
              </Link>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card h-100">
            <img
              src="./images/Chelsea.svg"
              className="card-img-top"
              alt="Chelsea"
            />
            <div className="card-body">
              <h5 className="card-title">Chelsea</h5>
              <p className="card-text">Stamford Bridge, London</p>
              <Link to="/chelsea" className="btn btn-primary">
                More information
              </Link>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card h-100">
            <img
              src="./images/CrystalPalace.svg"
              className="card-img-top"
              alt="Crystal Palace"
            />
            <div className="card-body">
              <h5 className="card-title">Crystal Palace</h5>
              <p className="card-text">Selhurst Park, London</p>
              <Link to="/crystalpalace" className="btn btn-primary">
                More information
              </Link>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card h-100">
            <img
              src="./images/Everton.svg"
              className="card-img-top"
              alt="Everton"
            />
            <div className="card-body">
              <h5 className="card-title">Everton</h5>
              <p className="card-text">Goodison Park, Liverpool</p>
              <Link to="/everton" className="btn btn-primary">
                More information
              </Link>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card h-100">
            <img
              src="./images/Fulham.svg"
              className="card-img-top"
              alt="Fulham"
            />
            <div className="card-body">
              <h5 className="card-title">Fulham</h5>
              <p className="card-text">Craven Cottage, London</p>
              <Link to="/fulham" className="btn btn-primary">
                More information
              </Link>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card h-100">
            <img
              src="./images/Leeds.svg"
              className="card-img-top"
              alt="Leeds"
            />
            <div className="card-body">
              <h5 className="card-title">Leeds</h5>
              <p className="card-text">Elland Road, Leeds</p>
              <Link to="/leeds" className="btn btn-primary">
                More information
              </Link>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card h-100">
            <img
              src="./images/Leicester.svg"
              className="card-img-top"
              alt="Leicester"
            />
            <div className="card-body">
              <h5 className="card-title">Leicester</h5>
              <p className="card-text">King Power Stadium, Leicester</p>
              <Link to="/leicester" className="btn btn-primary">
                More information
              </Link>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card h-100">
            <img
              src="./images/Liverpool.svg"
              className="card-img-top"
              alt="Liverpool"
            />
            <div className="card-body">
              <h5 className="card-title">Liverpool</h5>
              <p className="card-text">Anfield, Liverpool</p>
              <Link to="/liverpool" className="btn btn-primary">
                More information
              </Link>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card h-100">
            <img
              src="./images/ManCity.svg"
              className="card-img-top"
              alt="Man City"
            />
            <div className="card-body">
              <h5 className="card-title">Man City</h5>
              <p className="card-text">Etihad Stadium, Manchester</p>
              <Link to="/mancity" className="btn btn-primary">
                More information
              </Link>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card h-100">
            <img
              src="./images/ManUtd.svg"
              className="card-img-top"
              alt="Man Utd"
            />
            <div className="card-body">
              <h5 className="card-title">Man Utd</h5>
              <p className="card-text">Old Trafford, Manchester</p>
              <Link to="/manutd" className="btn btn-primary">
                More information
              </Link>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card h-100">
            <img src="./images/Newcastle.svg" id="newcastle" alt="Newcastle" />
            <div className="card-body">
              <h5 className="card-title">Newcastle</h5>
              <p className="card-text">St. James' Park, Newcastle</p>
              <Link to="/newcastle" className="btn btn-primary">
                More information
              </Link>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card h-100">
            <img
              src="./images/SheffieldUtd.svg"
              className="card-img-top"
              alt="Sheffield Utd"
            />
            <div className="card-body">
              <h5 className="card-title">Sheffield Utd</h5>
              <p className="card-text">Bramall Lane, Sheffield</p>
              <Link to="/sheffieldutd" className="btn btn-primary">
                More information
              </Link>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card h-100">
            <img
              src="./images/Southampton.svg"
              className="card-img-top"
              alt="Southampton"
            />
            <div className="card-body">
              <h5 className="card-title">Southampton</h5>
              <p className="card-text">St Mary's Stadium, Southampton</p>
              <Link to="/southampton" className="btn btn-primary">
                More information
              </Link>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card h-100">
            <img
              src="./images/Tottenham.svg"
              className="card-img-top"
              alt="Tottenham"
            />
            <div className="card-body">
              <h5 className="card-title">Tottenham</h5>
              <p className="card-text">Tottenham Hotspur Stadium, London</p>
              <Link to="/tottenham" className="btn btn-primary">
                More information
              </Link>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card h-100">
            <img
              src="./images/WestBrom.svg"
              className="card-img-top"
              alt="West Brom"
            />
            <div className="card-body">
              <h5 className="card-title">West Brom</h5>
              <p className="card-text">The Hawthorns, West Bromwich</p>
              <Link to="/westbrom" className="btn btn-primary">
                More information
              </Link>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card h-100">
            <img
              src="./images/WestHam.svg"
              className="card-img-top"
              alt="West Ham"
            />
            <div className="card-body">
              <h5 className="card-title">West Ham</h5>
              <p className="card-text">London Stadium, London</p>
              <Link to="/westham" className="btn btn-primary">
                More information
              </Link>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card h-100">
            <img
              src="./images/Wolves.svg"
              className="card-img-top"
              alt="Wolves"
            />
            <div className="card-body">
              <h5 className="card-title">Wolves</h5>
              <p className="card-text">Molineux Stadium, Wolverhampton</p>
              <Link to="/wolves" className="btn btn-primary">
                More information
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="main-footer">
        <a href="#top">
          <h5>Back to top</h5>
        </a>
      </div>
    </div>
  );
};

export default Home;

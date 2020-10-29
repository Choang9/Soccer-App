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
              src="Soccer-App/images/Arsenal.svg"
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
              src="Soccer-App/images/AstonVilla.svg"
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
              src="Soccer-App/images/Bournemouth.svg"
              className="card-img-top"
              alt="Bournemouth"
            />
            <div className="card-body">
              <h5 className="card-title">Bournemouth</h5>
              <p className="card-text">Vitality Stadium, Bournemouth</p>
              <Link to="/bournemouth/overview" className="btn btn-primary">
                More information
              </Link>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card h-100">
            <img
              src="Soccer-App/images/Brighton.svg"
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
              src="Soccer-App/images/Burnley.svg"
              className="card-img-top"
              alt="Burnley"
            />
            <div className="card-body">
              <h5 className="card-title">Burnley</h5>
              <p className="card-text">Turf Moor, Burnley</p>
              <Link to="/burnley/overview" className="btn btn-primary">
                More information
              </Link>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card h-100">
            <img
              src="Soccer-App/images/Chelsea.svg"
              className="card-img-top"
              alt="Chelsea"
            />
            <div className="card-body">
              <h5 className="card-title">Chelsea</h5>
              <p className="card-text">Stamford Bridge, London</p>
              <Link to="/chelsea/overview" className="btn btn-primary">
                More information
              </Link>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card h-100">
            <img
              src="Soccer-App/images/CrystalPalace.svg"
              className="card-img-top"
              alt="Crystal Palace"
            />
            <div className="card-body">
              <h5 className="card-title">Crystal Palace</h5>
              <p className="card-text">Selhurst Park, London</p>
              <Link to="/crystalpalace/overview" className="btn btn-primary">
                More information
              </Link>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card h-100">
            <img
              src="Soccer-App/images/Everton.svg"
              className="card-img-top"
              alt="Everton"
            />
            <div className="card-body">
              <h5 className="card-title">Everton</h5>
              <p className="card-text">Goodison Park, Liverpool</p>
              <Link to="/everton/overview" className="btn btn-primary">
                More information
              </Link>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card h-100">
            <img
              src="Soccer-App/images/Leicester.svg"
              className="card-img-top"
              alt="Leicester"
            />
            <div className="card-body">
              <h5 className="card-title">Leicester</h5>
              <p className="card-text">King Power Stadium, Leicester</p>
              <Link to="/leicester/overview" className="btn btn-primary">
                More information
              </Link>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card h-100">
            <img
              src="Soccer-App/images/Liverpool.svg"
              className="card-img-top"
              alt="Liverpool"
            />
            <div className="card-body">
              <h5 className="card-title">Liverpool</h5>
              <p className="card-text">Anfield, Liverpool</p>
              <Link to="/liverpool/overview" className="btn btn-primary">
                More information
              </Link>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card h-100">
            <img
              src="Soccer-App/images/ManCity.svg"
              className="card-img-top"
              alt="Man City"
            />
            <div className="card-body">
              <h5 className="card-title">Man City</h5>
              <p className="card-text">Etihad Stadium, Manchester</p>
              <Link to="/mancity/overview" className="btn btn-primary">
                More information
              </Link>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card h-100">
            <img
              src="Soccer-App/images/ManUtd.svg"
              className="card-img-top"
              alt="Man Utd"
            />
            <div className="card-body">
              <h5 className="card-title">Man Utd</h5>
              <p className="card-text">Old Trafford, Manchester</p>
              <Link to="/manutd/overview" className="btn btn-primary">
                More information
              </Link>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card h-100">
            <img src="Soccer-App/images/Newcastle.svg" id="newcastle" alt="Newcastle" />
            <div className="card-body">
              <h5 className="card-title">Newcastle</h5>
              <p className="card-text">St. James' Park, Newcastle</p>
              <Link to="/newcastle/overview" className="btn btn-primary">
                More information
              </Link>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card h-100">
            <img
              src="Soccer-App/images/Norwich.svg"
              className="card-img-top"
              alt="Norwich"
            />
            <div className="card-body">
              <h5 className="card-title">Norwich</h5>
              <p className="card-text">Carrow Road, Norwich</p>
              <Link to="/norwich/overview" className="btn btn-primary">
                More information
              </Link>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card h-100">
            <img
              src="Soccer-App/images/SheffieldUtd.svg"
              className="card-img-top"
              alt="Sheffield Utd"
            />
            <div className="card-body">
              <h5 className="card-title">Sheffield Utd</h5>
              <p className="card-text">Bramall Lane, Sheffield</p>
              <Link to="/sheffieldutd/overview" className="btn btn-primary">
                More information
              </Link>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card h-100">
            <img
              src="Soccer-App/images/Southampton.svg"
              className="card-img-top"
              alt="Southampton"
            />
            <div className="card-body">
              <h5 className="card-title">Southampton</h5>
              <p className="card-text">St Mary's Stadium, Southampton</p>
              <Link to="/southampton/overview" className="btn btn-primary">
                More information
              </Link>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card h-100">
            <img
              src="Soccer-App/images/Tottenham.svg"
              className="card-img-top"
              alt="Tottenham"
            />
            <div className="card-body">
              <h5 className="card-title">Tottenham</h5>
              <p className="card-text">Tottenham Hotspur Stadium, London</p>
              <Link to="/tottenham/overview" className="btn btn-primary">
                More information
              </Link>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card h-100">
            <img
              src="Soccer-App/images/Watford.svg"
              className="card-img-top"
              alt="Watford"
            />
            <div className="card-body">
              <h5 className="card-title">Watford</h5>
              <p className="card-text">Vicarage Road, Watford</p>
              <Link to="/watford/overview" className="btn btn-primary">
                More information
              </Link>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card h-100">
            <img
              src="Soccer-App/images/WestHam.svg"
              className="card-img-top"
              alt="West Ham"
            />
            <div className="card-body">
              <h5 className="card-title">West Ham</h5>
              <p className="card-text">London Stadium, London</p>
              <Link to="/westham/overview" className="btn btn-primary">
                More information
              </Link>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card h-100">
            <img
              src="Soccer-App/images/Wolves.svg"
              className="card-img-top"
              alt="Wolves"
            />
            <div className="card-body">
              <h5 className="card-title">Wolves</h5>
              <p className="card-text">Molineux Stadium, Wolverhampton</p>
              <Link to="/wolves/overview" className="btn btn-primary">
                More information
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

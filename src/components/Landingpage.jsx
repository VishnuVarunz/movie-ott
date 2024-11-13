import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container-fluid p-0">
      <div
        className="position-relative"
        style={{
          backgroundImage:
            'url("https://wallpapers.com/images/high/batman-in-bat-suit-arkham-city-4k-7t8kwavqkvwq1uei.webp")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <div
          className="position-absolute top-50 start-50 translate-middle text-center"
          style={{
            color: "white",
            fontSize: "2rem",
            textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
            width: "100%",
            zIndex: 1,
          }}
        >
          <h1>DARK NIGHT</h1>
          <p>
          The Dark Knight is a 2008 action-packed crime thriller and drama film about Batman's battle against the Joker to rid Gotham City of crime.
          </p>

          <Button
            size="lg"
            variant="primary"
            style={{ padding: "10px 20px", fontSize: "1.2rem" }}
            onClick={() => navigate("/register")}
          >
            Sign Up Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

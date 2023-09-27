import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Cont4sec5() {
  return (
    <div className="cont4sec3div">
      <div className="cont4sec5div">
        <h4>
          JOin EvolTech today and be a part of community that sparks innovation,
          empowers indivisiuals, imbraces fintech, and nurtures a culture of
          trust and transparency.
        </h4>
        <Button
          variant="outlined"
          sx={{
            color: "black",
            border: " 1px solid black",
            marginTop: "30px",
            p: 1.5,
            fontSize: "0.9rem",
            "@media (max-width: 990px)": {
              fontSize: "0.7rem",
              p: 1.3,
            },
            "@media (max-width: 850px)": {
              fontSize: "0.6rem",
              p: 0.9,
              marginTop: "25px",
            },
            "@media (max-width: 750px)": {
              fontSize: "0.5rem",
              p: 0.8,
            },
            "@media (max-width: 640px)": {
              fontSize: "0.4rem",
              p: 0.7,
              marginTop: "20px",
            },
            "@media (max-width: 550px)": {
              fontSize: "0.35rem",
              p: 0.6,
            },
          }}
          endIcon={
            <ArrowForwardIcon
              sx={{
                m: 0,
                fontSize: "20px",

                "@media (max-width: 850px)": {
                  fontSize: "17px !important",
                },
                "@media (max-width: 750px)": {
                  fontSize: "15px !important",
                },
                "@media (max-width: 650px)": {
                  fontSize: "12px !important",
                },
                "@media (max-width: 650px)": {
                  fontSize: "9px !important",
                },
              }}
            />
          }
        >
          View Open Positions
        </Button>
      </div>
    </div>
  );
}

export default Cont4sec5;

import { Box, Typography } from "@mui/material";

function Cont4sec2() {
  return (
    <Box
      sx={{
        bgcolor: "#6E8689",
        height: "700px",
        width: "100%",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        m: "0",
        p: "2%",
        "@media (max-width: 1200px)": {
          height: "600px",
        },
        "@media (max-width: 1115px)": {
          height: "510px",
        },
        "@media (max-width: 970px)": {
          height: "410px",
        },
        "@media (max-width: 810px)": {
          height: "350px",
        },
        "@media (max-width: 670px)": {
          height: "215px",
        },
        "@media (max-width: 500px)": {
          height: "155px",
        },
      }}
    >
      <div>
        <Typography
          variant="h2"
          sx={{
            fontweight: "bold",
            padding: "0 10% 2% 10%",
            fontSize: "4.45rem",
            "@media (max-width: 1200px)": {
              fontSize: "4rem",
            },
            "@media (max-width: 1115px)": {
              fontSize: "3.5rem",
            },
            "@media (max-width: 970px)": {
              fontSize: "2.9rem",
            },
            "@media (max-width: 810px)": {
              fontSize: "2.4rem",
            },
            "@media (max-width: 670px)": {
              fontSize: "1.8rem",
            },
            "@media (max-width: 500px)": {
              fontSize: "1.4rem",
            },
          }}
        >
          From dream to Reality: building a Startup community
        </Typography>
        <Typography
          variant="h5"
          sx={{
            padding: "1% 10%",
            fontSize: "1.9rem",
            "@media (max-width: 1200px)": {
              fontSize: "1.5rem",
            },
            "@media (max-width: 1115px)": {
              fontSize: "1.2rem",
            },
            "@media (max-width: 970px)": {
              fontSize: "1rem",
            },
            "@media (max-width: 810px)": {
              fontSize: "0.8rem",
            },
            "@media (max-width: 670px)": {
              fontSize: "0.5rem",
            },
            "@media (max-width: 500px)": {
              fontSize: "0.4rem",
            },
          }}
        >
          EvolTech was born out of a shared dream among young engineers.We
          breathed new life into a dormant company and welcomed talented
          individuals into our family. Our core focus is to make individuals
          Shine Brighter Than big companies, igniting a spark that turns into a
          Wildfire of innovation.
        </Typography>
      </div>
    </Box>
  );
}

export default Cont4sec2;

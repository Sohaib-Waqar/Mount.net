import React from "react";
// Material-UI components
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%",
    maxWidth: "400px",
    margin: "20px auto",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "translateY(-10px)",
      boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.2)",
    },
  },
  cardHeader: {
    backgroundColor: "#333", // dark gray instead of orange
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    padding: "10px 0",
    borderRadius: "10px 10px 0 0",
  },
  cardBody: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
  cardTitle: {
    fontSize: "1.5rem",
    fontWeight: "600",
    marginBottom: theme.spacing(1),
    color: "#333",
  },
  cardText: {
    fontSize: "1rem",
    color: "#666",
    marginBottom: theme.spacing(2),
  },
  button: {
    backgroundColor: "#333", // dark gray button
    color: "#fff",
    textTransform: "uppercase",
    padding: "10px 20px",
    "&:hover": {
      backgroundColor: "#555",
    },
  },
  cardActions: {
    justifyContent: "center",
  },
}));

export default function Cards() {
  const classes = useStyles();

  return (
    <div style={{ padding: "20px" }}>
      {/* Card 1 */}
      <Card className={classes.card}>
        <CardHeader title="Featured" className={classes.cardHeader} />
        <CardContent className={classes.cardBody}>
          <Typography variant="h4" className={classes.cardTitle}>
            Special title treatment
          </Typography>
          <Typography className={classes.cardText}>
            With supporting text below as a natural lead-in to additional
            content.
          </Typography>
          <CardActions className={classes.cardActions}>
            <Button variant="contained" className={classes.button}>
              Do something
            </Button>
          </CardActions>
        </CardContent>
      </Card>

      {/* Card 2 */}
      <Card className={classes.card}>
        <CardHeader title="Website Design 2024" className={classes.cardHeader} />
        <CardContent className={classes.cardBody}>
          <Typography variant="h4" className={classes.cardTitle}>
            Responsive Design
          </Typography>
          <Typography className={classes.cardText}>
            This card shows how we treat your website for responsiveness across
            all devices.
          </Typography>
          <CardActions className={classes.cardActions}>
            <Button variant="contained" className={classes.button}>
              Learn More
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
}

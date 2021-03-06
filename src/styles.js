import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "darkslateblue",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
    padding: "10px",
    fontSize: "30px",
    textTransform: "uppercase",
  },
  image: {
    marginLeft: "15px",
  },
  [theme.breakpoints.down("xs")]: {
    mainContainer: {
      flexDirection: "column-reverse",
    },
    heading: {
      fontSize: "20px",
      padding: "15px 0",
    },
  },
}));

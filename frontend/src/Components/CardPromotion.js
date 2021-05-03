import React from "react";

// import { useQuery } from "@apollo/client";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
// import { PRODUCTS_QUERY } from "../Graphql/productsQuery";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      height: "100%",
      marginBottom: 25,
    },
    media: {
      height: 140,
    },
  });

const CardPromotion = () => {
    const classes = useStyles();
    
  return (
    <React.Fragment>
      <section className="#">
        <div className="font-sans">
          <div className="relative mt-8 flex flex-col lg:justify-center items-center">
            <div className="mt-5 relative lg:max-w-screen-2xl w-full">
              <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-lg">
                <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-800">
                  <i className="fas fa-shopping-cart"></i> Promotion
                </h1>
                <hr></hr>
                <br></br>
                <Grid container alignItems="stretch" spacing={2}>
                      <Grid item style={{ display: "flex" }} xs={3}>
                        <Card
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            flexDirection: "column",
                          }}
                        >
                          <CardActionArea>
                          
                            <CardMedia
                              className={classes.media}
                              image="https://img.advice.co.th/images_nas/pic_product4/A0135185/A0135185_s.jpg"
                              title="Contemplative Reptile"
                            />
                            
                            <CardContent>
                              <Link to="promotion">
                                <Typography
                                  gutterBottom
                                  variant="h7"
                                  component="h3"
                                >
                                  sdghsdfgsdfe
                                </Typography>
                                <Typography
                                  variant="body2"
                                  color="textSecondary"
                                  component="p"
                                >
                                  17.0 inch / Intel i7-10750H / 16GB DDR4 / 1TB SSD / GeForce GTX 1650 Ti Max-Q 4GB GDDR6 / Win 10
                                </Typography>
                                <Typography
                                  variant="h6"
                                  color="textinfo"
                                  align="right"
                                  component="p"
                                >
                                  <i class="text-red-600 ">-30%</i> 
                                  
                                </Typography>
                                <Typography
                                  variant="h6"
                                  color="textinfo"
                                  align="right"
                                  component="p"
                                >
                                  <i class="text-gray-600 line-through">27,000$</i> 18,900$
                                </Typography>
                              </Link>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </Grid>
                      <Grid item style={{ display: "flex" }} xs={3}>
                        <Card
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            flexDirection: "column",
                          }}
                        >
                          <CardActionArea>
                          
                            <CardMedia
                              className={classes.media}
                              image="https://img.advice.co.th/images_nas/pic_product4/A0135185/A0135185_s.jpg"
                              title="Contemplative Reptile"
                            /> 
                            <CardContent>
                              <Link to="promotion">
                                <Typography
                                  gutterBottom
                                  variant="h7"
                                  component="h3"
                                >
                                  sdghsdfgsdfe
                                </Typography>
                                <Typography
                                  variant="body2"
                                  color="textSecondary"
                                  component="p"
                                >
                                  17.0 inch / Intel i7-10750H / 16GB DDR4 / 1TB SSD / GeForce GTX 1650 Ti Max-Q 4GB GDDR6 / Win 10
                                </Typography>
                                <Typography
                                  variant="h6"
                                  color="textinfo"
                                  align="right"
                                  component="p"
                                >
                                  <i class="text-red-600 ">-30%</i> 
                                  
                                </Typography>
                                <Typography
                                  variant="h6"
                                  color="textinfo"
                                  align="right"
                                  component="p"
                                >
                                  <i class="text-gray-600 line-through">27,000$</i> 18,900$
                                </Typography>
                              </Link>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                          



                      </Grid>
                </Grid>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
      </section>
    </React.Fragment>
  );
};

export default CardPromotion;

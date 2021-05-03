import React from "react";

import { useQuery } from "@apollo/client";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { PRODUCTS_QUERY } from "../Graphql/productsQuery";
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

const CardList = () => {
  const classes = useStyles();
  const { loading, error, data } = useQuery(PRODUCTS_QUERY);
  if (loading) {
    return "Loading ...";
  }
  if (error) {
    console.log(error);
    return "Error !!";
  }
  console.log(data);
  return (
    <React.Fragment>
      <section className="#">
        <div className="font-sans">
          <div className="relative mt-8 flex flex-col lg:justify-center items-center">
            <div className="mt-5 relative lg:max-w-screen-2xl w-full">
              <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-lg">
                <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-800">
                  <i className="fas fa-shopping-cart"></i> Products
                </h1>
                <hr></hr>
                <br></br>
                <Grid container alignItems="stretch" spacing={2}>
                  {data.products.map((product) => {
                    return (
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
                              image={product.url}
                              title="Contemplative Reptile"
                            />
                            <CardContent>
                              <Link to={`/product/detail/${product._id}`}>
                                <Typography
                                  gutterBottom
                                  variant="h7"
                                  component="h3"
                                >
                                  {product.name}
                                </Typography>
                                <Typography
                                  variant="body2"
                                  color="textSecondary"
                                  component="p"
                                >
                                  {product.detail.monitor} /{" "}
                                  {product.detail.cpu} / {product.detail.ram} /{" "}
                                  {product.detail.storage} /{" "}
                                  {product.detail.gpu} / {product.detail.os}
                                </Typography>
                                <Typography
                                  variant="h6"
                                  color="textinfo"
                                  align="right"
                                  component="p"
                                >
                                  $ {product.price}
                                </Typography>
                              </Link>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </Grid>
                    );
                  })}
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
export default CardList;

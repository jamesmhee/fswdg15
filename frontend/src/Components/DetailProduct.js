import React, { useCallback, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";
import { useMutation, useLazyQuery } from "@apollo/client";
import { PRODUCT_BYID_QUERY } from "../Graphql/productsQuery";
import { useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { UPDATE_CART_MUTATION } from "../Graphql/cartMutation";
// import { ME_DETAIL_QUERY } from "../Graphql/meDetailQuery";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

// const CREATE_CART_MUTATION = gql`
// mutation ($record: CreateOneCartInput!) {
//   createCart (record: $record) {
//     recordId
//   }
// }
// `

// .push(data?.me?.cart?._id)
const DetailProduct = () => {
  const { id_product } = useParams();
  const classes = useStyles();
  const [updateCart] = useMutation(UPDATE_CART_MUTATION);
  const [loadProduct, { loading, error, data }] = useLazyQuery(
    PRODUCT_BYID_QUERY,
    {
      variables: {
        id: id_product,
      },
    }
  );
  useEffect(() => {
    const loadData = async () => {
      loadProduct();
    };
    loadData();
  }, [loadProduct, data]);

  const handleUpdateCart = useCallback(
    async (e) => {
      e.preventDefault();
      // setId_cart(data?.me?.cart?._id)

      // id_cart.toString()
      // setValuet(data?.productById?.appearInCart)
      const exist = data?.productById?.appearInCart.find(
        (appearInCart) => appearInCart.cartOwner === data?.me?.cart?.ownerName
      );
      console.log(exist)
      if (exist) {
        const variables = {
          id: data.productById._id,      
          record: {
            appearInCart: [
              {
                cartOwner: data?.me?.username,
                quantity: exist.quantity+1,
              },
            ],
          },
        };
        console.log("++1");
        await updateCart({ variables });
        console.log(variables, "Increase Product 1 ea.");
        alert("Increase Product 1 ea. on Cart Successful!!")
      } else {
        const variables = {
          id: data.productById._id,
          record: {
            appearInCart: [
              {
                cartOwner: data?.me?.username,
                quantity: 1,
              },
            ],
          },
        };
        await updateCart({ variables });
        console.log(variables, "Add product 1 ea.");
        alert("Add Product 1 ea. on Cart Successful!!")
      }
    },
    [data, updateCart]
  );
  if (loading) {
    console.log("loading");
    return "Loading ...";
  }
  if (error) {
    console.log("error");
    return "Error !!";
  }
  console.log(data)
  console.log(data?.productById?.appearInCart)
  console.log(typeof id_cart)
  return (
    <React.Fragment>
      <section className="#">
        <div className="font-sans">
          <div className="relative mt-8 flex flex-col lg:justify-center items-center">
            <div className="mt-5 relative lg:max-w-screen-2xl w-full">
              <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-lg">
                <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-800">
                  <i className="fas fa-shopping-cart"></i> Detail Product
                </h1>
                <hr></hr>
                <br></br>
                <Grid container alignItems="stretch" spacing={2}>
                  <form onSubmit={handleUpdateCart}>
                    <Grid item xs={12} style={{ display: "flex" }}>
                      <Grid item xs={2}></Grid>
                      <Grid
                        item
                        style={{ display: "flex" }}
                        xs={3}
                        align="center"
                      >
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
                              image={data?.productById?.url}
                              title="Contemplative Reptile"
                            />
                            <CardContent>
                              <Typography
                                gutterBottom
                                variant="h7"
                                component="h3"
                              >
                                {data?.productById?.name}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                              >
                                {data?.productById?.detail.monitor} /{" "}
                                {data?.productById?.detail.cpu} /{" "}
                                {data?.productById?.detail.ram} /{" "}
                                {data?.productById?.detail.storage} /{" "}
                                {data?.productById?.detail.gpu} /{" "}
                                {data?.productById?.detail.os}
                              </Typography>
                              <Typography
                                variant="h6"
                                color="textinfo"
                                align="right"
                                component="p"
                              >
                                ${data?.productById?.price}
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </Grid>
                      <Grid item xs={4} style={{ marginLeft: "2%" }}>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                          {data?.productById?.name}
                        </h1>
                        <hr></hr>
                        <br></br>
                        <p className="leading-relaxed">
                          หน้าจอแสดงผลขนาด {data?.productById?.detail.monitor}
                        </p>
                        <p className="leading-relaxed">
                          หน่วยประมวลผล {data?.productById?.detail.cpu}
                        </p>
                        <p className="leading-relaxed">
                          หน่วยประมวลผลกราฟิก {data?.productById?.detail.gpu}
                        </p>
                        <p className="leading-relaxed">
                          หน่วยความจุ {data?.productById?.detail.storage} และ
                          RAM {data?.productById?.detail.ram}
                        </p>
                        <br></br>
                        <hr></hr>
                        <br></br>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                          }}
                        >
                          <h1
                            id="price3"
                            className="title-font font-medium text-2xl text-gray-900"
                            style={{ margin: "2%" }}
                          >
                            ${data?.productById?.price}
                          </h1>

                          <button
                            className=" text-white bg-red-500 border-0 py-2 px-6 
                               focus:outline-none hover:bg-red-600 rounded"
                          >
                            Add Cart{" "}
                          </button>
                        </div>
                      </Grid>
                      <Grid item xs={2}></Grid>
                    </Grid>
                  </form>
                </Grid>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default DetailProduct;

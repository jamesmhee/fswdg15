import { Link } from "react-router-dom";
import { useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import List from "../../Components/ListAdmin";
import { PRODUCTS_QUERY } from "../../Graphql/productsQuery";
import { useLazyQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";
const columns = [
  { field: "id", headerName: "ID", width: 250 },
  { field: "name", headerName: "Name", width: 350 },
  {
    field: "price",
    headerName: "price",
    type: "number",
    width: 150,
  },
];
const rows = [];
const ProductInfo = () => {
  const history = useHistory();
  const [loadProduct, { loading, error, data }] = useLazyQuery(PRODUCTS_QUERY);
  useEffect(() => {
    const loadData = async () => {
      loadProduct();
    };
    loadData();
  }, [loadProduct]);
  data?.products?.map((product, i) => {
    return rows.push({
      id: product._id,
      name: product.name,
      price: product.price,
    });
  });
  const handleRowClick = (event) => {
    history.push(`/admin/product/update/${event.id}`);
    console.log(event.id)
  };
  if (loading) {
    return "Loading ...";
  }
  if (error) {
    console.log(error);
    return "Error !!";
  }
  console.log(data);
  return (
    //form
    <section className="#">
      <div className="font-sans">
        <div className="relative mt-8 flex flex-col lg:justify-center items-center">
          <div className="mt-5 relative lg:max-w-screen-2xl w-full">
            <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-lg">
              <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-800">
                <i class="fas fa-user-cog"></i> Admin Dasboard
              </h1>
              <hr></hr>
              <div class="ml-2 mt-4 row text-left">
                <List />
                <div class="mt-1 col-md-8">
                  <div class="h2">
                    <i class="fas fa-archive"></i> Manage Product<br></br>
                  </div>
                  <div class="row">
                    <div class="col-11 px-6 py-4 border rounded bg-gray-100 shadow-md">
                      <div style={{ height: 400, width: "100%" }}>
                        <DataGrid
                          rows={rows}
                          columns={columns}
                          pageSize={5}
                          onRowDoubleClick={handleRowClick}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="mt-5 row">
                    <Link to="/admin/product/create">
                      <button
                        type="button"
                        class="col-11 px-6 py-4 btn button-admin"
                      >
                        <i class="fas fa-plus-circle"></i> Create Product
                      </button>
                    </Link>
                    <Link to="/admin/product/update">
                      <button
                        type="button"
                        class="mt-2 col-11 px-6 py-4 btn button-admin"
                      >
                        <i class="fas fa-sync-alt"></i> Click for update product
                        !!
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProductInfo;

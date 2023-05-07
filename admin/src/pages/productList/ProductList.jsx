import "./productList.css"
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { productRows } from "../../dummyData";
import {Link} from "react-router-dom";
import { useState } from "react";

const ProductList = () => {
    const [data, setData] = useState(productRows);

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Product', width: 200, renderCell: (params) => {
            return (
            <div className="productListItem">
                <img src={params.row.img} alt="" className="productListImg"/>
                {params.row.name}
            </div>
            )
        } },
        { field: 'stock', headerName: 'Stock', width: 200 },
        {
            field: 'status',
            headerName: 'Status',
            width: 90,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 130,
        },
        {
            field: 'action',
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
            return (
                <>
                <Link to={"/products/"+params.row.id}>
                    <button className="productListEdit">Edit</button>
                </Link>
                <DeleteOutlineIcon className="productListDelete" onClick={() => handleDelete(params.row.id)}/>
                </>
            )
            }
        }
    ];

  return (
    <div className="ProductList">
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  )
}

export default ProductList

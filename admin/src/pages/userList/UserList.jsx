import "./userList.css"
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { userRows } from "../../dummyData";
import {Link} from "react-router-dom";
import { useState } from "react";

const UserList = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id))
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'username', headerName: 'User', width: 200, renderCell: (params) => {
      return (
        <div className="userListUser">
          <img src={params.row.avatar} alt="" className="userListImg"/>
          {params.row.username}
        </div>
      )
    } },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 90,
    },
    {
      field: 'transaction',
      headerName: 'Transaction Value',
      width: 130,
    },
    {
      field: 'action',
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/users/"+params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon className="userListDelete" onClick={() => handleDelete(params.row.id)}/>
          </>
        )
      }
    }
  ];
  
  
  return (
    <div className="userList">
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

export default UserList

import React from 'react'
import "./datatable.scss"
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { DeleteForever, Edit } from '@mui/icons-material';
import { IconButton } from '@mui/material';

export default function DataTable({rows,title, columns}) {
    const handleDelete = (id)=>{

    }

    const action = {
        field:"action",
        headerName:"Actions",
        width:200,
        renderCell:(params)=>{
            return(
                <div className="action">
                    <Link to={`/admin/${title}/${params.row.id}`}>
                        <IconButton aria-label="edit" color="success" >
                            <Edit />
                        </IconButton> 
                    </Link>
                    <IconButton aria-label="delete" color="error" onClick={()=>{handleDelete(params.row.id)}}>
                        <DeleteForever />
                    </IconButton>
                </div>
            )
        }
    }
  return (
    <div className="datatable">
        <DataGrid
        className='dataGrid'
        rows={rows}
        columns={[...columns, action]}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        slots={{toolbar:GridToolbar}}
        slotProps={{
            toolbar:{
                showQuickFilter:true,
                quickFilterProps:{debounceMs:500}
            }
        }}
        disableColumnFilter
        disableRowSelectionOnClick
        disableDensitySelector
        disableColumnSelector

      />
    </div>
  )
}

import { DataGrid } from '@mui/x-data-grid';

function Table ({data}) {


    // "Transaction Amount": 120,
    // "Value": "90 points",
    // "Points": 90,
    // "Date": "Wed Aug 02 2023 14:29:50 GMT-0500 (Central Daylight Time)",
    // "id": 1

    const RenderedDate = (props) => {
        const { value } = props;
        const dt = new Date(value)
        const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
        return dt.toLocaleDateString('en-us', options)
      }
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'Name', headerName: 'Name', width: 130 },
        { field: 'Transaction Amount', headerName: 'Transaction Amount($)', type: 'number', width: 130 },
        {
          field: 'Points',
          headerName: 'Points',
          type: 'number',
          width: 90,
        },{
            field: 'Value',
            headerName: 'PointsValue',
            width: 130,
          },
          {
            field: 'Date',
            headerName: 'Date',
            renderCell: RenderedDate,
            width: 130,
          }
    ]
    return (
    <>
       {
        data && data !== [] ?
        <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10, 20]}
        checkboxSelection
      />
        : ("")
       }
    </> 
    )
}
export default Table
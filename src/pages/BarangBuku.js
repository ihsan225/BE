import { React, useEffect, useState } from 'react'
import { Button, Table, ButtonGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { API_URL, STORAGE_URL } from "../utility/Url";



export default function Barang() {
  const [data, setData] = useState([]);
  const history = useNavigate();
  useEffect(() => {
    fetchBarang();
  }, [])
  const fetchBarang = async (e) => {
    let token = sessionStorage.getItem("access_token");
    fetch("http://127.0.0.1:8000/api/get_barang", {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${token}`,
        "Content-Type": "application/json",
        "Accept": "application/json",
      }
    }).then((res) => res.json())
      .then((json) => {
        setData(json.barang);
      },
        (error) => {
          alert(error);
        }
      );
  }


  // const edit = (id) => {
  //   history('/useredit', { state: { id } });
  // }


  // const deletef = (id) => {
  //   Swal.fire({
  //     title: 'Apakah anda yakin ?',
  //     text: "Akan menghapus data ini",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Ya'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       let token = sessionStorage.getItem("access_token");
  //       fetch("http://127.0.0.1:8000/api/delete_user/" + id, {
  //         method: "GET",
  //         headers: {
  //           'Authorization': `Bearer ${token}`,
  //           "Content-Type": "application/json",
  //           "Accept": "application/json",
  //         }
  //       }).then((res) => res.json())
  //         .then((json) => {
  //           Swal.fire(
  //             'Deleted!',
  //             'Deleted Successfully.',
  //             'success'
  //           )
  //           fetchUsers()
  //         },
  //           (error) => {
  //             alert(error);
  //           }
  //         );
  //     }
  //   })
  // }

  return (
    <div>
      <Navbar />
      <div md={12}><Button onClick={() => history('/addbarang')}>Tambah</Button></div>
      {/* <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {data.map(data =>
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.created_at}</td>
              <td><Button onClick={(e) => edit(data.id)}>Edit</Button><Button onClick={(e) => deletef(data.id)} className='bg-danger'>Delete</Button></td>
            </tr>
          )}
        </tbody>
      </Table> */}

        {/* <TableComponent> */}
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Gambar</th>
              <th>Nama</th>
              <th>Deskripsi</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {/* {data.map( data => 
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>
                    yy
                    <img src= width="80" height="80" alt="gambar" />
                  </td>
                  <td>{data.nama}</td>
                  <td>{data.deskripsi}</td>
                  <td>
                    <ButtonGroup aria-label="Basic example">
                      <Button
                        size="sm"
                        onClick={() => getBarangId(barang.id)}
                        className="mx-2"
                        variant="primary"
                      >
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => showDelete(barang.id)}
                        variant="danger"
                      >
                        Hapus
                      </Button>
                    </ButtonGroup>
                  </td>
                </tr>
              )} */}

              {data.map(data => 
              <tr key={data.id}>
                <td>{data.id_barang}</td>
                <td>{data.nama_barang}</td>
                <td><img src={STORAGE_URL + data.gambar} width="80" height="80" alt="gambar" /></td>
                <td>{data.deskripsi}</td>
                <td>a</td>
              </tr>
              )}
          </tbody>          
        </table>
        {/* </TableComponent> */}
      
    </div>
  )
}

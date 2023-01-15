import { React, useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../styles/Book.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import axios from 'axios';
// import { API_URL, STORAGE_URL } from "../utility/Url";


export default function Book() {
  const [data, setData] = useState([]);
  const [barang, setBarang] = useState([]);
  const history = useNavigate();
  useEffect(() => {
    fetchBook();
  }, [])
  const fetchBook = async (e) => {
    let token = sessionStorage.getItem("access_token");
    fetch("http://127.0.0.1:8000/api/get_book", {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${token}`,
        "Content-Type": "application/json",
        "Accept": "application/json",
      }
    }).then((res) => res.json())
      .then((json) => {
        setData(json.book);
      },
        (error) => {
          alert(error);
        }
      );
  }


  const edit = (id_buku) => {
    history('/bookedit', { state: { id_buku } });
  }
  const deletef = (id_buku) => {
    Swal.fire({
      title: 'Apakah anda yakin ?',
      text: "Akan menghapus data ini",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya'
    }).then((result) => {
      if (result.isConfirmed) {
        let token = sessionStorage.getItem("access_token");
        fetch("http://127.0.0.1:8000/api/delete_book/" + id_buku, {
          method: "GET",
          headers: {
            'Authorization': `Bearer ${token}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
          }
        }).then((res) => res.json())
          .then((json) => {
            Swal.fire(
              'Deleted!',
              'Deleted Successfully.',
              'success'
            )
            fetchBook()
          },
            (error) => {
              alert(error);
            }
          );
      }
    })
  }

  return (
    <div>
      <Navbar />
      <div className='p-3'>
        <div md={12}><Button onClick={() => history('/addbook')}>Tambah</Button></div>
        <div className='d-flex justify-content-center'>
          <div className="list col-lg-10">
            <Table striped>
              <thead>
                <tr>
                  <th>No</th>
                  {/* <th>Sampul</th> */}
                  <th>Kode Buku</th>
                  <th>Judul Buku</th>
                  <th>Genre Buku</th>
                </tr>
              </thead>
              <tbody>
                {data.map(data => (
                  <tr key={data.id}>
                    <td>{data.id_buku}</td>
                    <td>{data.kode_buku}</td>
                    <td>{data.judul_buku}</td>
                    <td>{data.genre_buku}</td>
                    {/* <td> <img src={STORAGE_URL + data.gambar} width="80" height="80" /></td> */}
                    <td><Button onClick={(e) => edit(data.id)}>Edit</Button><Button onClick={(e) => deletef(data.id_buku)} className='bg-danger'>Delete</Button></td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

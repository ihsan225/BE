import React from 'react'
import { useState, useEffect } from "react";
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import Navbar from '../components/Navbar';

export default function BookEdit() {
    const [kode_buku, setKode] = useState('');
    const [judul_buku, setJudul] = useState('');
    const [genre_buku, setGenre] = useState('');
    // const [gambar, setGambar] = useState('');
    
    const history = useNavigate();
    const loc = useLocation();
    const BookId = loc.state.id;
    useEffect(() => {
        fetchBookEdit();
    }, [])
    const fetchBookEdit = async (e) => {
        let token = sessionStorage.getItem("access_token");
        fetch("http://127.0.0.1:8000/api/get_book_by_id/" + BookId, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${token}`,
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
        }).then((res) => res.json())
            .then((json) => {
                setKode(json.book[0].kode_buku)
                setJudul(json.book[0].judul_buku)
                setGenre(json.book[0].genre_buku)
                // setGambar(json.book[0].gambar)
            },
                (error) => {
                    alert(error);
                }
            );
    }
    const UpdateBook = async (e) => {
        let token = sessionStorage.getItem("access_token");
        e.preventDefault();
        // e.preventDefault();
        let result = await fetch("http://127.0.0.1:8000/api/update_book", {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${token}`,
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({
                kode_buku: kode_buku,
                judul_buku: judul_buku,
                genre_buku: genre_buku,
                // gambar: gambar,
                // id_buku : BookId
            }),
        }).then((res) => res.json())
            .then((json) => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Update Success',
                    showConfirmButton: false,
                    timer: 1500
                })
                history('/book')
            })
    };
    return (
        <>
        <Navbar />
        <div className='container mt-4 shadow-sm p-3 mb-5 bg-white rounded'>
            
            <Form onSubmit={UpdateBook}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Kode </Form.Label>
                    <Form.Control type="name" placeholder="Masukkan Kode Buku" value={kode_buku} onChange={(e) => setKode(e.target.value)} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Judul</Form.Label>
                    <Form.Control type="name" placeholder="Masukkan Judul Buku" value={judul_buku} onChange={(e) => setJudul(e.target.value)} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Genre</Form.Label>
                    <Form.Control type="name" placeholder="Masukkan Genre Buku" value={genre_buku} onChange={(e) => setGenre(e.target.value)} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Sampul Buku</Form.Label>
                    <Form.Control type="file" placeholder="Masukkan Sampul Buku" value={gambar} onChange={(e) => setGambar(e.target.value)} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group> */}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
        </>
    )
}

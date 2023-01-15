import React from 'react'
import { useState, useEffect } from "react";
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Navbar from '../components/Navbar';

export default function AddBook() {
    const [kode_buku, setKode] = useState('');
    const [judul_buku, setJudul] = useState('');
    const [genre_buku, setGenre] = useState('');
    // const [gambar, setGambar] = useState('');
    // const [data, setData] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    const history = useNavigate();

    const CreateBook = async (e) => {
        e.preventDefault();
        let token = sessionStorage.getItem("access_token");
        fetch("http://127.0.0.1:8000/api/create_book", {
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
            }),
        }).then((res) => res.json())
            .then((json) => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Add Book Success',
                    showConfirmButton: false,
                    timer: 1500
                })
                history('/book');
            })
    };
    return (
        <>
        <Navbar />
        <div className='container mt-4 shadow-sm p-3 mb-5 bg-white rounded'>
            <Form onSubmit={CreateBook}>
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
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Sampul</Form.Label>
                    <Form.Control type="file" value={gambar} onChange={(e) => setGambar(e.target.value)} />
                </Form.Group> */}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
        </>
    )
}

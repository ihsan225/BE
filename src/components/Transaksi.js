import { React, useState, Alert, Col, Row, Container } from "react";
import "../styles/Formpage.css";
import Navbar from "../components/Navbar";
// import Footer from '../components/Footer'
// import IntroImg from "../assets/intro-bg.jpg";
import { Form, Button } from "react-bootstrap";

export default function Transaksi() {
    const [nama, setName] = useState("");
    const [hari, sethari] = useState("");
    const [inputs, setInputs] = useState("");
    // const [total, settotal] = useState("");
    const [bayar, setBayar] = useState("");
    const [sisa, setSisa] = useState("");
    const [x, setjumlahbuku] = useState("");
    const [notelp, setnotelp] = useState("");

    const changehari = (newhari) => {
        sethari(newhari);
    };

    const jumlahbuku = (newjumlahbuku) => {
        setjumlahbuku(newjumlahbuku);
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    let harganya;
    if (hari == "1 Hari") {
        harganya = 3000;
    } else if (hari == "3 Hari") {
        harganya = 5000;
    } else if (hari == "7 Hari") {
        harganya = 10000;
    } else {
        harganya = 0;
    }

    let harga1 = harganya * x;
    let diskon;
    if (harga1 >= 30000) {
        diskon = (harga1 * 10) / 100;
    } else if (harga1 >= 25000) {
        diskon = (harga1 * 5) / 100;
    } else {
        diskon = 0;
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setBayar(inputs.bayar);
        let sisa = parseInt(inputs.bayar) - (harga1 - diskon);
        setSisa(sisa);
        setName(inputs.nama);
        setnotelp(inputs.notelp);
    };



    return (
        <div className="body">
            <Navbar />
            <div className="hero">
                {/* <div className="mask">
                    <img className="into-img" src={IntroImg} alt="IntroImg" />
                </div> */}
                <div className="about">
                    {/* <h4>ORDER</h4> */}
                    <Form onSubmit={handleSubmit}>
                        <table className="bg-white">
                            <tr>
                                <td>Nama Penyewa</td>
                                <td className="td">:</td>
                                <td>
                                    <Form.Control
                                        type="text"
                                        name="nama"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>No. Telepon</td>
                                <td className="td">:</td>
                                <td>
                                    <Form.Control
                                        type="number"
                                        name="notelp"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Waktu Sewa</td>
                                <td className="td">:</td>
                                <td>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Select
                                            onChange={(event) => changehari(event.target.value)}
                                            value={hari}
                                        >
                                            <option>Waktu Sewa</option>
                                            <option value="1 Hari">1 Hari</option>
                                            <option value="3 Hari">3 Hari</option>
                                            <option value="7 Hari">7 Hari</option>
                                        </Form.Select>
                                    </Form.Group>
                                </td>
                            </tr>
                            <tr>
                                <td>Harga</td>
                                <td className="td">:</td>
                                <td>Rp.{harganya}</td>
                            </tr>
                            <tr>
                                <td>Jumlah Buku yang diPinjam</td>
                                <td className="td">:</td>
                                <td>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control
                                            type="number"
                                            name="jumlah"
                                            onChange={(event) => jumlahbuku(event.target.value)}
                                            value={x}
                                        />
                                    </Form.Group>
                                </td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td className="td">:</td>
                                <td>Rp.{harga1}</td>
                            </tr>
                            <tr>
                                <td>Pay</td>
                                <td className="td">:</td>
                                <td>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control
                                            type="number"
                                            name="bayar"
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Button type="submit">Submit</Button>
                                </td>
                            </tr>
                        </table>
                    </Form>
                    <table className="bg-grey">
                        <tr>
                            <td>Nama Penyewa</td>
                            <td className="td">:</td>
                            <td>{inputs.nama}</td>
                        </tr>
                        <tr>
                            <td>No. Telepon</td>
                            <td className="td">:</td>
                            <td>{inputs.notelp}</td>
                        </tr>
                        <tr>
                            <td>Waktu Sewa</td>
                            <td className="td">:</td>
                            <td>{hari}</td>
                        </tr>
                        <tr>
                            <td>Jumlah Buku yang diPinjam</td>
                            <td className="td">:</td>
                            <td>{x}</td>
                        </tr>
                        <tr>
                            <td>Diskon</td>
                            <td className="td">:</td>
                            <td>Rp.{diskon}</td>
                        </tr>
                        <tr>
                            <td>Bayar</td>
                            <td className="td">:</td>
                            <td>Rp.{bayar}</td>
                        </tr>
                        <tr>
                            <td>Sisa/Kembali</td>
                            <td className="td">:</td>
                            <td>Rp.{sisa}</td>
                        </tr>
                    </table>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
}

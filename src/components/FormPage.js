import { React, useState } from 'react'
import "../styles/Formpage.css"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import IntroImg from "../assets/intro-bg.jpg";
import { Form, Button } from 'react-bootstrap';



export default function FormPage() {


    const [jumlah, setjumlah] = useState("");
    const [product, setproduct] = useState("");
    const [inputs, setInputs] = useState("");
    // const [total, settotal] = useState("");
    const [bayar, setBayar] = useState("");
    const [sisa, setSisa] = useState("");
    const [x, setquantity] = useState("");


    const changeProduct = (newProduct) => {
        setproduct(newProduct);
    };

    const Quantity = (newQuantity) => {
        setquantity(newQuantity)
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    let harganya;
    if (product == "ASUS Expertbook B1400CEAE") {
        harganya = 13559000
    }
    else if (product == "ASUS ExpertBook B3402FEA-EC7111T"){
        harganya = 20075000
    }
    else if (product == "ASUS VivoBook 15 A516EPO-VIPS554"){
        harganya = 10300980
    }
    else if (product == "ASUS Chromebook C204MA-BU1430"){
        harganya = 5865000
    } else {
    harganya = 0
    }

    let harga1 = harganya * x
    let diskon;
    if (harga1 >= 15000000){
        diskon = harga1 * 10/100
    } else if (harga1 >= 10000000){
        diskon = harga1 * 5/100
    } else{
        diskon = 0
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setBayar(inputs.bayar);
        let sisa = parseInt(inputs.bayar) - (harga1 - diskon);
        setSisa(sisa);
    };

    return (
        <div className="body">
            <Navbar />
            <div className="hero">
                <div className="mask">
                    <img className="into-img" src={IntroImg} alt="IntroImg" />
                </div>
                <div className="about">
                    <h1>ORDER</h1>
                    <Form onSubmit={handleSubmit}>
                    <table>
                        <tr>
                            <td>Choose The Product</td>
                            <td className="td">:</td>
                            <td>
                                
                                <Form.Group controlId="formBasicEmail">
                                <Form.Select onChange={(event) => changeProduct(event.target.value)} value={product}>
                                    <option>Select Prouct</option>
                                    <option value="ASUS Expertbook B1400CEAE">ASUS Expertbook B1400CEAE</option>
                                    <option value="ASUS ExpertBook B3402FEA-EC7111T">ASUS ExpertBook B3402FEA-EC7111T</option>
                                    <option value="ASUS VivoBook 15 A516EPO-VIPS554">ASUS VivoBook 15 A516EPO-VIPS554</option>
                                    <option value="ASUS Chromebook C204MA-BU1430">ASUS Chromebook C204MA-BU1430</option>
                                    <option value="ASUS Expertbook B1400CEAE">ASUS Expertbook B1400CEAE</option>
                                    <option value="ASUS ExpertBook B3402FEA-EC7111T">ASUS ExpertBook B3402FEA-EC7111T</option>
                                    <option value="ASUS VivoBook 15 A516EPO-VIPS554">ASUS VivoBook 15 A516EPO-VIPS554</option>
                                    <option value="ASUS Chromebook C204MA-BU1430">ASUS Chromebook C204MA-BU1430</option>
                                </Form.Select>
                                </Form.Group>
                                
                            </td>
                        </tr>
                        <tr>
                            <td>harga</td><td className="td">:</td><td>{harganya}</td>
                        </tr>
                        <tr>
                            <td>Quantity</td>
                            <td className="td">:</td>
                            <td>
                                
                                <Form.Group controlId="formBasicEmail">
                                <Form.Control
                                    type="number"
                                    name="jumlah"
                                    onChange={(event) => Quantity(event.target.value)} value={x}
                                />
                                </Form.Group>
                                
                            </td>
                        </tr>
                        <tr>
                            <td>Total</td><td className="td">:</td><td>{harga1}</td>
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
                                <Button type="submit" >
                                    Submit
                                </Button>
                            </td>
                        </tr>
                    </table>
                    </Form>
                    <br />
                    <table>
                        <tr>
                            <td>Name Product</td><td className="td">:</td><td>{product}</td>
                        </tr>
                        <tr>
                            <td>Quantity</td><td className="td">:</td><td>{x}</td>
                        </tr>
                        <tr>
                            <td>Diskon</td><td className="td">:</td><td>{diskon}</td>
                        </tr>
                        <tr>
                            <td>Bayar</td><td className="td">:</td><td>{bayar}</td>
                        </tr>
                        <tr>
                            <td>Sisa</td><td className="td">:</td><td>{sisa}</td>
                        </tr>
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    )
}

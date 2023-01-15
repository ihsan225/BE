import React from 'react'
import Navbar from '../components/Navbar';
import ListBook from './ListBuku'
import Footer from '../components/Footer'

function Dashboard() {
    return (
        <div>
            <Navbar />
            <ListBook />
            <Footer />
        </div>
    )
}

export default Dashboard
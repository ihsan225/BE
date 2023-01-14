import React from 'react';
import "../styles/Product.css";
import img1 from "../assets/product/1.jpg";
import img2 from "../assets/product/2.jpg";
import img3 from "../assets/product/3.jpg";
import img4 from "../assets/product/4.jpg";

const Product = () => {
  return (
    <div className="container">
      <div className="head-product">Product</div>
      <div className='main-product'>
        <div className="card-product">
          <div class="card">
            <img src={img1} />
            <h1>ASUS Expertbook B1400CEAE</h1>
            <p class="price">Rp. 13.559.000</p>
            <p>Processor : Intel Core i5-1135G7
            RAM: 8GB DDR4 Onboard
            SSD: 512GB
            VGA: Intel Iris Xe Graphics
            Ukuran Layar : 14 Inch FHD
            Konektivitas : Wifi + Bluetooth
            Sistem Operasi : Windows 11 Home
            Software Lain : Office Home Student
            ASUS Expertbook B1400CEAE-EB5851WS</p><br/>
            <a href="/form1"><button type="button" class="btn btn-lg">BUY</button></a>
          </div>
        </div>
        <div className="card-product">
          <div class="card">
            <img src={img2} />
            <h1>ASUS ExpertBook B3402FEA-EC7111T</h1>
            <p class="price">Rp. 20.075.000</p>
            <p>Processor: Intel Core i7-1165G7
            RAM: 16GB
            SSD: 1TB
            VGA: Intel Graphics
            Konektivitas: Wifi + Bluetooth
            Ukuran Layar: 14 Inch FHD Touchscreen
            Sistem Operasi: Windows 10 Home
            Unit Utama</p><br/>
            <a href="/form1"><button type="button" class="btn btn-lg">BUY</button></a>
          </div>
        </div>
        <div className="card-product">
          <div class="card">
            <img src={img3} />
            <h1>ASUS VivoBook 15 A516EPO-VIPS554</h1>
            <p class="price">Rp. 10.300.980</p>
            <p>Processor : Intel® Core™ i5-1135G7 Processor 2.4 GHz (8M Cache, up to 4.2 GHz, 4 cores)
            Graphics : NVIDIA® GeForce® MX330 2GB GDDR5
            Memory : 8GB DDR4 on board
            Storage : 512GB M.2 NVMe™ PCIe® 3.0 SSD
            Display : 15.6-inch FHD (1920 x 1080) 16:9 aspect ratio 45% NTSC color gamut IPS-level Panel
            OS : Windows 11 Home + Office Home and Student 2021 included</p><br/>
            <a href="/form1"><button type="button" class="btn btn-lg">BUY</button></a>
          </div>
        </div>
        <div className="card-product">
          <div class="card">
            <img src={img4} />
            <h1>ASUS Chromebook C204MA-BU1430</h1>
            <p class="price">Rp. 5.865.000</p>
            <p>Processor: Intel Celeron N4000
            RAM: 4GB LPDDR4
            Storage: 32GB eMMC
            VGA: Intel Graphics
            Konektivitas: Wifi + Bluetooth
            Ukuran Layar: 11.6 Inch Touchscreen
            Sistem Operasi: Chrome OS
            ASUS Chromebook C204MA-BU1430</p><br/>
            <a href="/form1"><button type="button" class="btn btn-lg">BUY</button></a>
          </div>
        </div>
        <div className="card-product">
          <div class="card">
            <img src={img1} />
            <h1>ASUS Expertbook B1400CEAE</h1>
            <p class="price">Rp. 13.559.000</p>
            <p>Processor : Intel Core i5-1135G7
            RAM: 8GB DDR4 Onboard
            SSD: 512GB
            VGA: Intel Iris Xe Graphics
            Ukuran Layar : 14 Inch FHD
            Konektivitas : Wifi + Bluetooth
            Sistem Operasi : Windows 11 Home
            Software Lain : Office Home Student
            ASUS Expertbook B1400CEAE-EB5851WS</p><br/>
            <a href="/form1"><button type="button" class="btn btn-lg">BUY</button></a>
          </div>
        </div>
        <div className="card-product">
          <div class="card">
            <img src={img2} />
            <h1>ASUS ExpertBook B3402FEA-EC7111T</h1>
            <p class="price">Rp. 20.075.000</p>
            <p>Processor: Intel Core i7-1165G7
            RAM: 16GB
            SSD: 1TB
            VGA: Intel Graphics
            Konektivitas: Wifi + Bluetooth
            Ukuran Layar: 14 Inch FHD Touchscreen
            Sistem Operasi: Windows 10 Home
            Unit Utama</p><br/>
            <a href="/form1"><button type="button" class="btn btn-lg">BUY</button></a>
          </div>
        </div>
        <div className="card-product">
          <div class="card">
            <img src={img3} />
            <h1>ASUS VivoBook 15 A516EPO-VIPS554</h1>
            <p class="price">Rp. 10.300.980</p>
            <p>Processor : Intel® Core™ i5-1135G7 Processor 2.4 GHz (8M Cache, up to 4.2 GHz, 4 cores)
            Graphics : NVIDIA® GeForce® MX330 2GB GDDR5
            Memory : 8GB DDR4 on board
            Storage : 512GB M.2 NVMe™ PCIe® 3.0 SSD
            Display : 15.6-inch FHD (1920 x 1080) 16:9 aspect ratio 45% NTSC color gamut IPS-level Panel
            OS : Windows 11 Home + Office Home and Student 2021 included</p><br/>
            <a href="/form1"><button type="button" class="btn btn-lg">BUY</button></a>
          </div>
        </div>
        <div className="card-product">
          <div class="card">
            <img src={img4} />
            <h1>ASUS Chromebook C204MA-BU1430</h1>
            <p class="price">Rp. 5.865.000</p>
            <p>Processor: Intel Celeron N4000
            RAM: 4GB LPDDR4
            Storage: 32GB eMMC
            VGA: Intel Graphics
            Konektivitas: Wifi + Bluetooth
            Ukuran Layar: 11.6 Inch Touchscreen
            Sistem Operasi: Chrome OS
            ASUS Chromebook C204MA-BU1430</p><br/>
            <a href="/form1"><button type="button" class="btn btn-lg">BUY</button></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
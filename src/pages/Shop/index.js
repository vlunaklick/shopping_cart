import './style.css';
import { Link } from "react-router-dom";
import Target from '../../components/Target'


export default function ShopMain(){
    let tarjetas = allComponents.map(function(a){
        return <Target key={a.id} image={a.image} nameU={a.nameU} price={a.price} />
    });
    return( 
        <>
            <main className="mainShop">
                <div className="total">
                    <div className="izqPanel">
                        <h4 className="titNavIzq">PRODUCTS</h4>
                        <ul className="downU">
                            <li className="liU">Memory</li>
                            <li className="liU">Motherboards</li>
                            <li className="liU">Video Card</li>
                            <li className="liU">Processors</li>
                        </ul>
                    </div>

                    <div className="derPanel">
                        {tarjetas}
                    </div>
                </div>
                
            </main>
        </>
    ) 
}

let allComponents = [
    {
        id: 1,
        nameU: "AMD Ryzen 5 3600",
        price: 299.00,
        category: "processor",
        image: "https://www.amd.com/system/files/2019-06/238593-ryzen-5-pib-left-facing-1260x709.png",
    },
    {
        id: 2,
        nameU: "GIGABYTE RX 570",
        price: 90,
        category: "video_card",
        image: "https://lh3.googleusercontent.com/proxy/FRpjLNPYt_ydFAPGknDVhars5yQqVLuuKMt2E6-eltJn_7qT3OD3eLB4reomhyKIbsrVOmOXmZXmr6RefCbXR_vYfMBwUisdk4kYFgWGmMYZwNC2MpcRPrPIYmfiMRI",
    },
    {
        id: 3,
        nameU: "Intel I5 10400F",
        price: 150,
        category: "processor",
        image: "https://www.venex.com.ar/products_images/1617202625_1019-producto-i5i5-system-linq-enumerabletakeiteratord-251system-char.png",
    },
    {
        id: 4,
        nameU: "MSI Fake City",
        price: 175,
        category: "motherboards",
        image: "https://i2.wp.com/www.pngmart.com/files/7/Computer-Motherboard-PNG-HD.png?resize=600%2C9999&ssl=1",
    },
    {
        id: 5,
        nameU: "GeForce GTX 1650",
        price: 200,
        category: "video_card",
        image: "https://www.pny.com/productimages/195603E1-C0F3-42D8-BF4D-D71770CBC53B/images/XLR8-Graphics-Cards-GTX-1650-OC-ra-2-.png",
    },
    {
        id: 6,
        nameU: "GTX 1060",
        price: 70,
        category: "video_card",
        image: "https://www.asus.com/us/site/graphics-cards/gpu-tweak-ii/img/download-module/graphics-card.png",
    },
    {
        id: 7,
        nameU: "Intel I5 8260U",
        price: 200.50,
        category: "processor",
        image: "https://cpufinder.com/images/intel-core-i5-8260u.jpg",
    },
    {
        id: 8,
        nameU: "ASUS DUAL RX580",
        price: 134.99,
        category: "video_card",
        image: "https://www.asus.com/media/global/products/42OLH5wFe3nzXV2H/P_setting_xxx_0_90_end_692.png",
    },
    {
        id: 9,
        nameU: "Crucial memory 8GB",
        price: 99.99,
        category: "memory",
        image: "https://topesdegama.com/app/uploads-topesdegama.com/2019/02/crucial-3.png",
    },
    {
        id: 10,
        nameU: "ROG STRIX Z490",
        price: 49.99,
        category: "motherboards",
        image: "https://dlcdnimgs.asus.com/websites/global/products/sqlhk1j3w9jgpcci/img/z490/kv/hero.png",
    },
    {
        id: 11,
        nameU: "GIGABYTE Z77X",
        price: 299.99,
        category: "motherboards",
        image: "https://lh3.googleusercontent.com/proxy/6onzIM_e3Y45yrdwb7C-W-Eq6UiRnw_wNTRAZp2-P5VUF0pmIvXaQcYNYe-6mIaRRTdXnAZg7EoVnyoyGOyXjXxL7ZNuglcyGDborahEIQ",
    },
    {
        id: 12,
        nameU: "GTX 1070",
        price: 149.99,
        category: "video_card",
        image: "https://images.evga.com/products/gallery/png/08G-P4-6170-RX_LG_1.png",
    },
    {
        id: 13,
        nameU: "AMD Ryzen 3 1200",
        price: 259.99,
        category: "processor",
        image: "https://www.amd.com/system/files/24301-ryzen-3-pib-right-facing-1260x709_1.png",
    }
]
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { PlatziCategory } from "../platzi-category/platzi-category";
import { PlatziDetails } from "../platzi-details/platzi-details";
import { PlatziCartItems } from "../platzi-cartItems/platzi-cartItems";
import { PlatziHome } from "../platzi-home/platzi-home";
import { useState } from "react";
import './platzi-index.css';

export function PlatziIndex() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div>
            <BrowserRouter>
                {/* <header className="bg-light text-dark p-2 d-flex justify-content-between position-fixed top-0 w-100 z-2" style={{fontSize:"1.5rem"}}>
                <div className="text-muted fw-bold" >VistaHive</div>
                <div>
                    <span className="bi bi-search me-3"></span>
                    <span className="bi bi-person me-3"></span>
                    <span className="bi bi-heart me-3"></span>
                    <span className="bi bi-cart me-3"></span>
                </div>
                <div>
                    <PlatziCartItems/>
                </div>

            </header> */}
                {/* <header className="bg-info text-white p-2 d-flex justify-content-between position-fixed w-100 z-1" style={{marginTop:"-47px"}}>
                    
                    <div><Link to="category/smartphones" className="btn">smartPhones</Link></div>
                    <div><Link to="category/laptops" className="btn">laptops</Link></div>
                    <div><Link to="category/fragrances"className="btn">fragrances</Link></div>
                    <div><Link to="category/groceries"className="btn">groceries</Link></div>
                    <div><Link to="category/skincare"className="btn">skincare</Link></div>
                    <div><Link to="category/home-decoration" className="btn">home-decoration</Link></div>
                    <div><Link to="category/furniture"className="btn">furniture</Link></div>
                    <div><Link to="category/tops"className="btn">tops</Link></div>
                    <div><Link to="category/womens-dresses"className="btn">womens-dresses</Link></div>
                    <div><Link to="category/womens-shoes"className="btn">womens-shoes</Link></div>
                    <div><Link to="category/mens-shirts"className="btn">mens-shirts</Link></div>
                    <div><Link to="category/mens-shoes"className="btn">mens-shoes</Link></div>
                    
                </header> */}


                {/* Top Header */}
                <header className="bg-light text-dark p-2 d-flex justify-content-between position-fixed top-0 w-100 mb-0 z-2" style={{ fontSize: "1.5rem" }}>
                    <div className="text-muted fw-bold">VistaHive</div>
                    <div className="d-flex align-items-center">
                        <span className="bi bi-search me-3 d-none d-md-inline"></span>
                        <span className="bi bi-person me-3 d-none d-md-inline"></span>
                        <span className="bi bi-heart me-3 d-none d-md-inline"></span>
                        <span className="bi bi-cart me-3 d-none d-md-inline"></span>
                    </div>
                    <div>
                        <div>
                            <PlatziCartItems />
                        </div>
                    </div>
                </header>

                {/* Bottom Header */}
                <header className="bg-info text-white p-2 d-flex justify-content-between position-fixed w-100 z-1"style={{marginTop:"-33px"}} >
                    {/* Toggle Button */}
                    <div className="d-md-none">
                        <button className="btn btn-light" onClick={toggleMenu}>
                            <span className="bi bi-list" style={{ fontSize: "1.5rem" }}></span>
                        </button>
                    </div>
                    {/* Links for larger screens */}
                    <div className={`d-none d-md-flex flex-wrap`}>
                        <Link to="category/smartphones" className="btn">smartPhones</Link>
                        <Link to="category/laptops" className="btn">laptops</Link>
                        <Link to="category/fragrances" className="btn">fragrances</Link>
                        <Link to="category/groceries" className="btn">groceries</Link>
                        <Link to="category/skincare" className="btn">skincare</Link>
                        <Link to="category/home-decoration" className="btn">home-decoration</Link>
                        <Link to="category/furniture" className="btn">furniture</Link>
                        <Link to="category/tops" className="btn">tops</Link>
                        <Link to="category/womens-dresses" className="btn">womens-dresses</Link>
                        <Link to="category/womens-shoes" className="btn">womens-shoes</Link>
                        <Link to="category/mens-shirts" className="btn">mens-shirts</Link>
                        <Link to="category/mens-shoes" className="btn">mens-shoes</Link>
                    </div>
                </header>

                 {/* Dropdown Menu for Smaller Screens */}
            <div className={`dropdown-links ${isMenuOpen ? "open" : ""}`}>
                <Link to="category/smartphones" className="d-block text-white py-1">smartPhones</Link>
                <Link to="category/laptops" className="d-block text-white py-1">laptops</Link>
                <Link to="category/fragrances" className="d-block text-white py-1">fragrances</Link>
                <Link to="category/groceries" className="d-block text-white py-1">groceries</Link>
                <Link to="category/skincare" className="d-block text-white py-1">skincare</Link>
                <Link to="category/home-decoration" className="d-block text-white py-1">home-decoration</Link>
                <Link to="category/furniture" className="d-block text-white py-1">furniture</Link>
                <Link to="category/tops" className="d-block text-white py-1">tops</Link>
                <Link to="category/womens-dresses" className="d-block text-white py-1">womens-dresses</Link>
                <Link to="category/womens-shoes" className="d-block text-white py-1">womens-shoes</Link>
                <Link to="category/mens-shirts" className="d-block text-white py-1">mens-shirts</Link>
                <Link to="category/mens-shoes" className="d-block text-white py-1">mens-shoes</Link>
            </div>




                <main className="prosition-relative" style={{ marginTop: "100px", zIndex: "0" }}>

                    <Routes>
                        <Route path="/" element={<PlatziHome />} />
                        <Route path="category/:catname" element={<PlatziCategory />} />
                        <Route path="details" element={<PlatziDetails />} />

                    </Routes>

                </main>




            </BrowserRouter>

        </div>
    )
}
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { PlatziCategory } from "../platzi-category/platzi-category";
import { PlatziDetails } from "../platzi-details/platzi-details";
import { PlatziCartItems } from "../platzi-cartItems/platzi-cartItems";
import { PlatziHome } from "../platzi-home/platzi-home";

export function PlatziIndex() {
    return (
        <div>
            <BrowserRouter>
            <header className="bg-light text-dark p-2 d-flex justify-content-between position-fixed top-0 w-100 z-2" style={{fontSize:"1.5rem"}}>
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

            </header>
                <header className="bg-info text-white p-2 d-flex justify-content-between position-fixed w-100 z-1" style={{marginTop:"-47px"}}>
                    
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
                    
                </header>

               <main className="prosition-relative" style={{marginTop:"100px",zIndex:"0"}}>
                   
                   <Routes>
                       <Route path="/" element={<PlatziHome />} />
                       <Route path="category/:catname" element={<PlatziCategory />} />
                       <Route path="details" element={<PlatziDetails/>}/>
                       
                   </Routes>
               
           </main>
               



            </BrowserRouter>

        </div>
    )
}
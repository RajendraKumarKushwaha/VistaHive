import axios from "axios";
import '../platzi-category/platzi-category.css';
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../slicers/cartSlicers";

export function PlatziCategory() {
    const [categories, setCategories] = useState([]);

    const params = useParams();
    const dispatch = useDispatch();
    
    function handleAddToCartClick(product){
        dispatch(addToCart(product));
        

    }

    useEffect(() => {
        axios({
            method: "get",
            url: `https://dummyjson.com/products/category/${params.catname}`
        }).then((response) => {

            setCategories(response.data.products);
        })

    }, [params.catname]);
    return (
        <div className="container-fluid d-inline">
            <h2></h2>
            <div className="d-flex flex-wrap justify-content-center" style={{paddingTop:"34px"}}>
                {
                    categories.map(product =>
                        <div className="card p-2 m-2" key={product.id} style={{ width: '300px' }}>
                            <img src={product.thumbnail} className="cart-img-top img-thumbnail img-fluid" height="200px" width="280px" alt="product" style={{ height: '200px' }} />
                            <div className="card-header" style={{ height: '100px' }}>
                                <p> <dt>Title</dt>
                                    <dd>{product.title}</dd>
                                </p>
                            </div>
                            <div className="card-body">
                                <dl>

                                    <dt>Description</dt>
                                    <dd>{product.description}</dd>
                                    <dt>Price</dt>
                                    <dd>{product.price}</dd>
                                    <dt>Rating</dt>
                                    <span className="bi bi-star-fill text-success"/>{product.rating}
                                </dl>
                            </div>
                            {/* <div className="card-footer">
                                <button className="btn btn-primary w-100"><Link to={`/details/`+ product.id} className="btn">Details</Link></button>
                            </div> */}
                            <div className="card-footer">
                                <button className="btn btn-danger w-100" onClick={()=>handleAddToCartClick(product)}>Add To Cart</button>
                            </div>

                        </div>
                    )
                }

            </div>

        </div>
    )
}
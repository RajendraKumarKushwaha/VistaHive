import axios from "axios";
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Store from "../stores/Store";

export function PlatziDetails() {

    var cartItem = useSelector((State) => {
        return Store.getState().store.cartItems;
    })

    const [items] = useState(cartItem);
    console.log(`data in cart`, items);

    useEffect(() => {

    }, [cartItem]);

    return (
        <div className="container-fluid">
            <h2>Yours Cart Item</h2>


            <div>


                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Brand</th>
                            <th>Category</th>
                            <th>Preview</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            items.map(item =>
                                <tr>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>
                                    <td>{item.brand}</td>
                                    <td>{item.category}</td>
                                    <td><img src={item.thumbnail} width="50px" height="50px" alt="item" /></td>
                                    <td>
                                    <Link to={`/category/` + item.category}>back to {item.category}</Link>
                                    </td>
                                </tr>
                            )

                        }
                        <div>
                           
                        </div>
                    </tbody>

                </table>
            </div>

        </div>
    )
}
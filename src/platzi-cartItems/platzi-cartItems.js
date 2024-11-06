import { useEffect } from "react"
import Store from "../stores/Store"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function PlatziCartItems() {
    var count = useSelector((state) => {
        return Store.getState().store.cartCount;
    })
    // var count= Store.getState().store.cartCount;
    useEffect(() => {


    }, [])
    return (
        <div>
            <button className="btn btn-danger position-relative">
                <span className="bi bi-cart4"><Link to="/details" className="btn">Your Cart Items</Link></span>
                <span className="badge rounded-circle bg-info position-absolute">{count}</span>
            </button>
</div>
    )}
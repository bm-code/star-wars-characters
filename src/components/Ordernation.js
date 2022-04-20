import './Ordenation.css'
export default function Ordernation({ orderType, setOrderType }) {

    return (
        <div className="order">
            <button onClick={() => setOrderType(0)} className={orderType === 0 ? "order-btn active" : "order-btn"}>
                <span></span>
                <span></span>
                <span></span>
                <span></span> Order by name</button>
            <button onClick={() => setOrderType(1)} className={orderType === 1 ? "order-btn active" : "order-btn"}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>Order by height</button>
        </div>
    )
}

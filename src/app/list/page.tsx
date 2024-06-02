import Image from "next/image";

export default function List(){

    let product = ['Tomatoes', 'Pasta', 'Coconut'];
    let price = ['3$', '12$', '5$'];

    return(
        <div className="container">
            <h4 className="title">Product List Page</h4>
            {
                product.map((list, index)=>{
                    return(
                        <div className="product" key={index}>
                            <img src={`/food${index}.png`} className="product-img" alt="" />
                        <h5>{ list } { price[index] }</h5>
                    </div>
                    )
                })
            }
        </div>
    )
}
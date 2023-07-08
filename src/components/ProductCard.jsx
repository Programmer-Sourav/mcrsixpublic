export default function ProductCard({data}){
    return(
        <div style={{border: "1px solid gray", width:"152px", height: "320px"}}> 
            <img src={data.imgSrc} alt="pic" height="152px" width="152px"/>
            <h3>{data.name}</h3>
            <p>{data.price} for {data.qty}</p>
            <p>{data.name}</p>
        </div>
    )
}
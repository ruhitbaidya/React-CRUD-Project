import { FaFacebookSquare, FaYoutube, FaLinkedin } from "react-icons/fa";

function Card(props){
    const {cardTitle, cardDesc, cardBtn} = props
    return <div className="card" style={{width: "20rem"}}>
        <h3 className="card-title">{cardTitle}</h3>
        <div className="card-body">
            <p>{cardDesc}</p>
            <button className="btn btn-block btn-primary">{cardBtn}</button>
        </div>
        <div className="card-footer">
            <ul className="desSign">
                <li><a href="#"><FaFacebookSquare /></a></li>
                <li><a href="#"><FaYoutube /></a></li>
                <li><a href="#"><FaLinkedin /></a></li>
            </ul>
        </div>
    </div>
}


export default Card;
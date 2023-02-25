import React from 'react'
import PropTypes from 'prop-types';


class Card extends React.Component {
    render() {
        return (
            <div className="card w-100" style={{ width: '18rem' }}>
                <img src={this.props.image} className="card-img-top" alt={this.props.alt} />
                <div className="card-body">
                    <h5 className="card-title">{this.props.cardTitle}</h5>
                    <p className="card-text">{this.props.cardText}</p>
                    <p className="card-text"><small className="text-muted">{this.props.lastUpdate}</small></p>

                    <a href="/home" className="btn btn-primary">{this.props.buttonText}</a>
                </div>
            </div>
        )
    }
}

Card.defaultProps = {
    // cardTitle: "Default Title Prop",
    image: "https://assets.justenergy.com/wp-content/uploads/2013/11/benefits-of-wave-energy-ocean-power-of-water.jpg",
    alt: "Default Alt Text",
    cardText: "Default Title Prop",
    lastUpdate: "100 years ago",
    buttonText: "Button Text"

}

Card.propTypes = {
    cardText: PropTypes.string,
    cardTitle: PropTypes.string.isRequired
};


// const Card = (/* {cardTitle} */ props ) => {

//     // console.log(props)

//     return (
//         <div className="card w-100" style={{ width: '18rem' }}>
//             <img src={props.image} className="card-img-top" alt={props.alt} />
//             <div className="card-body">
//                 <h5 className="card-title">{props.cardTitle}</h5>
//                 <p className="card-text">{props.cardText}</p>
//                 <p className="card-text"><small className="text-muted">{props.lastUpdate}</small></p>

//                 <a href="/home" className="btn btn-primary">{props.buttonText}</a>
//             </div>
//         </div>
//     );
// }

/* 
const Card2 = ({cardTitle}) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{cardTitle}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/home" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}
*/


export default Card;
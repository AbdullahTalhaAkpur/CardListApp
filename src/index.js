import React from 'react'
import ReactDOM from 'react-dom/client'
import Card from './components/Card'
import Collapse from './components/Collapse'


const App = () => {


    return (
        <div className='container'>

            <div className='row'>

                <div className='card-group w-100'>

                    <div className='col'>
                        <Collapse keyid={"image1"}>
                            <Card
                                // cardTitle={"Dynamic Card 1"}
                                // cardText="Lorem Ipsum I"
                                // buttonText="Card 1 Button"
                                // lastUpdate="3 min ago"
                                // image="https://picsum.photos/id/122/200/300"
                                // alt="texttttt"
                            />
                        </Collapse>
                    </div>

                    <div className='col'>
                        <Collapse keyid={"image2"}>
                            <Card
                                cardTitle={"Dynamic Card 2"}
                                cardText="Lorem Ipsum II"
                                buttonText="Card 2 Button"
                                lastUpdate="2 min ago"
                                image="https://picsum.photos/id/133/200/300"
                                alt="texttttt"
                            />
                        </Collapse>
                    </div>

                    <div className='col'>
                        <Collapse keyid={"image3"}>
                            <Card
                                cardTitle={"Dynamic Card 3"}
                                cardText="Lorem Ipsum III"
                                buttonText="Card 3 Button"
                                lastUpdate="1 min ago"
                                image="https://picsum.photos/id/121/200/300"
                                alt="texttttt"
                            />
                        </Collapse>
                    </div>

                    {/* <div className="card" style={{width: '18rem'}}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Static Card</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/home" className="btn btn-primary">Go somewhere</a>
                </div>
            </div> */}
                </div>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
        <App />,
    </>
)
import React from 'react';
import ReactDOM from 'react-dom/client';

const myList = ["Ali", "Veli", "Osman", "Hasan", "Hamza"]


function MyApp(){
    return (
        myList.map((name, index)=>(
            <h1 key={index}>{name}</h1>
        ))
    )
}


class MyApp2 extends React.Component{
    render(){
        return (
        <div>
            {
                myList.map((name, index)=>(
                    // <div>
                        <h1 key={index}>{name}</h1>
                    // </div>
                ))
            }
        </div>
        )
    }
}

class MyApp3 extends React.Component{



    render(){
        return (
            <div>
                {/* key value seklinde style yaziyorsun */}
                <button id='jsxButton' onClick={this.changeColor} type="button" style={{color: 'black', backgroundColor: 'aqua'}}>{this.returnStr()}</button>
                <br></br>
                <br></br>
                {/* normal class yeine className yazman gerekiyor */}
                <button className='jsxButtonClass' onClick={this.changeColor2} type="button" style={{color: 'black', backgroundColor: 'aqua'}}>JSX BUTTON</button>

            </div> 
        )
    }

    returnStr(){
        const str1 = "Click";
        const str2 = "Me"
        return `${str1} ${str2}`
    }

    changeColor(){
        document.getElementById('jsxButton').innerHTML = "You really clicked";
    }

    changeColor2(){
        document.getElementsByClassName('jsxButtonClass')[0].style.backgroundColor = 'orange';
    }
}


// const root = ReactDOM.createRoot(document.getElementById('root'))
const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
    <MyApp />,
    <MyApp2 />,
    <MyApp3 />,
    </>
)
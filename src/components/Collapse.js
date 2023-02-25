import React from 'react'

class Collapse extends React.Component {

    constructor() {
        super();
        this.state = {
            showContent: false
        }

        // this.changeState = this.changeState.bind(this)
    }

    // changeState(){
    //     this.setState({showContent: !this.state.showContent});
    // }

    changeState = () => {
        this.setState({showContent: !this.state.showContent});
    }


    componentDidMount () {
        console.log("Component Olusturuldu")
    }

    componentDidUpdate() {
        console.log("Component Guncellendi")
    }

    componentWillUnmount() {
        console.log("Component Unmount Edildi")
    }

    render() {

        console.log(this.state.showContent)
        
        return (
            <div>
                <button className="btn btn-primary w-100" onClick={this.changeState}> 
                    {/* {this.props.children.props.cardTitle} */}
                    {React.Children.map(this.props.children, children => children.props.cardTitle)}
                </button>
                {

                    this.state.showContent ? (
                        <div className="collapse show">
                            <div className="card card-body">
                                {/* {this.props.children} */}
                                {React.Children.map(this.props.children, children => children)}
                            </div>
                        </div>
                    ) : (
                        <div className="collapse">
                            <div className="card card-body">
                                {/* {this.props.children} */}
                                {React.Children.map(this.props.children, children => children)}

                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}



/* const Collapse = (props) => {

    // console.log(props)
    // console.log(props.children)

    return (
        <div>
            <a className="btn btn-primary w-100" data-bs-toggle="collapse" href={`#${props.keyid}`} role="button" aria-expanded="false" aria-controls="collapseExample">
                Link with href
            </a>

            <div className="collapse show" id={props.keyid}>
                <div className="card card-body">
                    {props.children}
                </div>
            </div>
        </div>
    );
} */

export default Collapse;
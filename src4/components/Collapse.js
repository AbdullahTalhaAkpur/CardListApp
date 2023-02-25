import React from 'react'

class Collapse extends React.Component {
    render() {
        return (
            <div>
                <a className="btn btn-primary w-100" data-bs-toggle="collapse" href={`#${this.props.keyid}`} role="button" aria-expanded="false" aria-controls="collapseExample">
                    Link with href
                </a>

                <div className="collapse show" id={this.props.keyid}>
                    <div className="card card-body">
                        {this.props.children}
                    </div>
                </div>
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
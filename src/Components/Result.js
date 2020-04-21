import React, { Component } from 'react'
import Image from "./Image";
import "./scss/results.scss";
import Pagination from './Pagination';
export default class Result extends Component {

    showImages = () => {
        let { images } = this.props;
        if (images.length === 0) return null;
        // console.log(images);

        return (
            <div className="container">
                <div className="results-grid">
                    {
                        images.map((image, index) =>
                            <Image key={index} image={image} />)
                    }
                </div>
                <Pagination
                    nextPage={this.props.nextPage}
                    prevPage={this.props.prevPage}
                />
            </div>
        )
    }

    render() {
        return (
            <React.Fragment>{this.showImages()}</React.Fragment>
        )
    }
}

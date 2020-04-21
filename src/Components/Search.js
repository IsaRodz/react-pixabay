import React, { Component } from 'react';

class Search extends Component {

    searchRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        const term = this.searchRef.current.value;
        this.props.searchData(term);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="input-field">
                    <input
                        ref={this.searchRef}
                        type="text"
                        placeholder="Type to search..."
                    />
                </div>
            </form>
        )
    }
}

export default Search;
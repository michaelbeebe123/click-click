import React from 'react';
import PropTypes from 'prop-types';

export default class Draggable extends React.Component {

    drag = (event) => {
        event.dataTransfer.setData('tansfer', event.target.id);
    }

    noAllowDrop = (event) => {
        event.stopPropogation();
    }

    render() {
        return(
            <div id={this.props.id} draggable='true' onDragStart={this.drag} onDragOver={this.noAllowDrop} style={this.props.style}>
                {this.props.children}
            </div>
        )
    }
}

Draggable.propTypes = {
    id: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node
}
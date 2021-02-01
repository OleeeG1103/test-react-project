import { Component } from 'react';
import ReactDom from 'react-dom';

class Portal extends Component {
     domEl = document.createElement('div');

    componentDidMount() {
        document.body.appendChild(this.domEl);
}
    componentWillUnmount() {
        document.body.removeChild(this.domEl);
    }

    render() {
        const { children } = this.props;
        return ReactDom.createPortal(children, this.domEl);
    }
}

export default Portal;
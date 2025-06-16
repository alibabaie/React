import React from 'react';
import {createRoot} from 'react-dom/client';


class Salam extends React.Component {
render () {
return (
<h1>{this.props.title}</h1>
)
}
}

export default Salam;
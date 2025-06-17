import React from 'react';
import {createRoot} from 'react-dom/client';


class Salam extends React.Component {
render () {
return (
<h1>{this.props.a}</h1>
)
}
}

export default Salam;
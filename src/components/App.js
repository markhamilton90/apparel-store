import React from 'react';
import Sidebar from './Sidebar';
import Results from './Results';
import items from '../sample-items.js'

class App extends React.Component {

    state = {
        inventory: items
    }

    doThing = () => {
        alert('hiiiiiiii')
    }

    render() {
        return (
            <div className="store">
                <Sidebar />
                <Results inventory={ this.state.inventory } />
            </div>
        )
    }
}

export default App;

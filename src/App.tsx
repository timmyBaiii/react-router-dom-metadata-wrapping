import React from 'react';

// css
import './App.sass';

const App = () => {
    return (
        <div className='App'>
            {process.env.NODE_ENV}
        </div>
    )
}

export default App;
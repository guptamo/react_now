import ReactDOM from 'react-dom'
import React from 'react'

import styles from './styles/app.css'

const App = () => {
    const working = true

    return (
        <div className={styles.test}>
            <h2>This should look about right{working ? '...right?' : '...psyche!'}</h2>
            <p>...but if the background to this div isn't blue something might be wrong with the css modules configuration.</p>
            <p>Try toggling the "working" constant to test Hot Module Reloading. Neat eh?</p>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('.container'))

import React from 'react';


function Home(props) {
    return (
        <div className="App">
            <div>
                <h1>Virtual White Board</h1>
            </div>
            <button class="button" onClick={() => { props.history.push('./signin') }}>Sing In</button>
            <button class="button" onClick={() => { props.history.push('./signup') }}>Sing Up</button>
        </div>
    );
}

export default Home;

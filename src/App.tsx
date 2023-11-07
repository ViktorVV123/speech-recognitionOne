import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Main} from "./Component/Main";
import {Audio} from "./Component/audio";
import {PushAndTalkOne} from "./Component/pushAndTalkOne";
import {AudioTwo} from "./Component/audioTwo";
import Counter from "./Component/Counter";

function App() {
    return (
        <div className="App">
            <Main/>
            <Audio/>
            <AudioTwo/>
            <PushAndTalkOne/>

            {/*<Counter/>*/}
        </div>
    );
}

export default App;

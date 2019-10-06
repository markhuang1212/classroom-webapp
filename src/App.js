import React, { useState, useRef, useEffect } from 'react';
import { HashRouter, Route, Switch, Link } from 'react-router-dom'

import MainPage from './MainPage.js'
import DetailPage from './DetailPage.js'

import './App.css';

function App() {
    const [detailRoom, setDetailRoom] = useState({})


    return (
        <HashRouter>
            <Switch>
                <Route path="/detail">
                    <DetailPage detailRoom={detailRoom}/>
                </Route>
                <Route path="/">
                    <MainPage onDetail={i=>setDetailRoom(i)}/>
                </Route>
            </Switch>
        </HashRouter>
    )
}

export default App;

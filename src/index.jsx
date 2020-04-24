import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Main from './common/main.component.jsx'
import Home from './common/home.component.jsx'
import About from './common/about.component.jsx'
import Car from './car/car.component.jsx'
import CarDetail from './car/car-detail.component.jsx'

const data = [
    {
        id: 1,
        name: 'iPhone 11 Pro.',
        year: '4GB',
        model: '2019, September 20',
        make: '12 Mega Pixel',
        media: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11.jpg',
        price: '$659.99'

    },
    {
        id: 2,
        name: 'Samsung Galaxy S20/S20 Plus',
        year: '8GB',
        model: '2020, March 6',
        make: '64 Mega Pixel',
        media: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s20-plus.jpg',
        price: '$789.91'

    },
    {
        id: 3,
        name: 'OnePlus 8 Pro',
        year: '12GB',
        model: '2020, April 21',
        make: '48 Mega Pixel',
        media: 'https://fdn2.gsmarena.com/vv/bigpic/oneplus-8-pro.jpg',
        price: '$869,999'
    },
    {
        id: 4,
        name: 'Oppo Find X2 Pro',
        year: '12GB',
        model: '2020, March 6',
        make: '48 Mega Pixel',
        media: 'https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x2-pro.jpg',
        price: '$1239.99'
    },
    {
        id: 5,
        name: 'Samsung Galaxy S20 Ultra',
        year: '16GB',
        model: '2020, March 6',
        make: '108 Mega Pixel',
        media: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s20-ultra-.jpg',
        price: '$1140.00'
    }
];


render(
    <Router history={browserHistory}>
        <Route component={Main}>
            <Route path="/" component={Home}/>
            <Route path="/cars" component={Car} data={data}/>
            {/* Parameter route*/}
            <Route path="/cars/:id" component={CarDetail} data={data}/>
            <Route path="/about" component={About}/>
        </Route>
    </Router>,
    document.getElementById('container')
);

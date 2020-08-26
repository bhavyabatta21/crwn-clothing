import React from 'react';
import './hompage.styles.scss'
import '../components/directory/directory.component'
import Directory from '../components/directory/directory.component';


const HomePage = () =>(
    <div className='homepage'>
       <Directory/>
    </div>
);

export default HomePage;
import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';

const Root = () => {
    

    const navigation =  useNavigation();
   

    return (
        <div>
            <Header></Header>
            <main>

            {navigation.state === 'loading'? (<div aria-label="status" className="status status-xl"></div>): <Outlet></Outlet>}

           
            
            </main>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;
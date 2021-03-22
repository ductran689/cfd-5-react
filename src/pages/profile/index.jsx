import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import Mainlayout from '../../layout/Mainlayout';
import Tab from './tab/Tab';
import Tab1 from './tab/Tab1';
import Tab2 from './tab/Tab2';
import Tab3 from './tab/Tab3';
import Tab4 from './tab/Tab4';
import Tab_title from './tab/Tab_title';
import Top_info from './Top_info';

function Profile(props) {
    let { url } = useRouteMatch()
    console.log(url);
    return (
        <Mainlayout>
            <main className="profile" id="main">
            <section>
                <Top_info name='' desc='' />
                <div className="container">
                    <div className="tab">
                        <Tab_title url={url} />
                        <Tab url={url}/>
                    </div>

                </div>
            </section>
        </main>
    
        </Mainlayout>
        );
}

export default Profile;
import React from 'react';
import Tab from './tab/Tab';
import Top_info from './Top_info';

function Profile(props) {
    return (
        <main className="profile" id="main">
        <section>
            <Top_info name='' desc=''  />
         <div className="container">
            <Tab/>
            </div>
        </section>
      </main>
    );
}

export default Profile;
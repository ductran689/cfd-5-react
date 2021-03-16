import React from 'react';
import Coin_his from './Coin_his';
import Coin_info from './Coin_info';

function Tab5(props) {
    return (
        <div className="tab5 cointab" style={{ display: 'block' }}>
          <Coin_info/>
          <Coin_his/>
        </div>
      
    );
}

export default Tab5;
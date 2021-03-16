import React from 'react';
import Item_his from './Item_his';

function Coin_his(props) {
    return (
        <div className="coinhistory">
            <h3><strong>Lịch sử COIN</strong></h3>
            {/* <p>Chưa sử dụng COIN</p> */}
            <Item_his coin='' time='' content='' status='' />
            <Item_his coin='' time='' content='' status='' />
            <Item_his coin='' time='' content='' status='' />
            <Item_his coin='' time='' content='' status='' />
            </div>
    );
}

export default Coin_his;
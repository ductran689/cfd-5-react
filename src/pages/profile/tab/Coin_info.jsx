import React from 'react';

function Coin_info(props) {
    return (
        <div className="coininfo">
            <div className="coininfo__box">
              <h3><strong>Thông tin COIN</strong></h3>
              <div className="coininfo__box-ct">
                <div>
                  <img src="/img/cfd-coin.png" alt="" />
                  <p>Bạn có <strong>300</strong> COIN</p>
                </div>
              </div>
            </div>
            <div className="coininfo__box">
              <h3><strong>Đổi COIN</strong></h3>
              <div className="coininfo__box-ct">
                <label className="checkcontainer">
                  Voucher Tiki 100k
                    <input type="radio" name="radio" />
                  <span className="checkmarkradio" />
                </label>
                <label className="checkcontainer">
                  Voucher Tiki 200k
                    <input type="radio" name="radio" />
                  <span className="checkmarkradio" />
                </label>
                <label className="checkcontainer">
                  Voucher Tiki 500k
                    <input type="radio" name="radio" />
                  <span className="checkmarkradio" />
                </label>
                <label className="checkcontainer">
                  Thẻ nạp điện thoại 100k
                    <input type="radio" name="radio" />
                  <span className="checkmarkradio" />
                </label>
                <label className="checkcontainer">
                  Thẻ nạp điện thoại 200k
                    <input type="radio" name="radio" />
                  <span className="checkmarkradio" />
                </label>
                <label className="checkcontainer">
                  Thẻ nạp điện thoại 500k
                    <input type="radio" name="radio" />
                  <span className="checkmarkradio" />
                </label>
                <small><i>*Bạn có thể đổi COIN 1 lần</i></small>
              </div>
              <a href="javascript:void(0)" className="btn main">Đổi COIN</a>
            </div>
          </div>
    );
}

export default Coin_info;
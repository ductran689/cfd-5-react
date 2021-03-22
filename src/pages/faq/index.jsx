import React from 'react';
import Accordion_wrap from './Accordion_wrap'
function Faq(props) {
    return (
        <main className="faqpage" id="main">
        <div className="container">
          <section>
            <h2 className="main-title">Câu hỏi thường gặp</h2>
            <div className="row">
                <Accordion_wrap/>
                <Accordion_wrap/>
             </div>
          </section>
        </div>
      </main>
    );
}

export default Faq;
import React from 'react';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Tab4 from './Tab4';
import Tab5 from './Tab5';
import Tab_title from './Tab_title';

function Tab(props) {
  return (
    <div className="tab">
      <Tab_title acc='' course='' pro=' his=' manage='' />
      <div className="tab-content">
        <Tab1 />
        <Tab2 />
        <Tab3 />
        <Tab4 />
        <Tab5 />
      </div>
    </div>

  );
}

export default Tab;
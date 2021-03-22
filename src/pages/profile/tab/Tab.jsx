import React from 'react';
import { Route, Switch } from 'react-router';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Tab4 from './Tab4';
import Tab5 from './Tab5';
import Tab_title from './Tab_title';

function Tab({url}) {
  return (

    <div className="tab-content">
      <Switch>

        <Route path={url+'/course'} component={Tab2} />
        <Route path={url+'/project'} component={Tab3} />
        <Route path={url+'/history-payment'} component={Tab4} />
        <Route path={url+'/coin'} component={Tab5} />
        <Route exact path="" component={Tab1} />
      </Switch>


    </div>

  );
}

export default Tab;
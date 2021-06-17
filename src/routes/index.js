import React from 'react';

import { Switch, Route } from 'react-router-dom';

import EducationPage from '../pages/Education';


function Routes()
{
    return(
        <div>
            <Switch>
    {/* <Route path="/" exact component={Dashboard} />   */}
    <Route path="/education"  component={EducationPage} />
    
  </Switch>
        </div>
    )
}
export default Routes;
import React from 'react';

import { Switch, Route } from 'react-router-dom';

import EducationPage from '../pages/Education';
import About from '../pages/About';
import Skills from '../pages/Skills';

function Routes()
{
    return(
        <div>
            <Switch>
    <Route path="/" exact component={About} />  
    <Route path="/education"  component={EducationPage} />
    <Route path="/about"  component={About} />
    <Route path="/skills"  component={Skills} />
    
  </Switch>
        </div>
    )
}
export default Routes;
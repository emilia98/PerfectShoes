import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import Admin from '../components/admin/Admin';

import Main from '../components/user/Main';
import NewBrand from './admin/Brand/NewBrand';
class Index extends Component
{
    render() {
        return (
            <React.Fragment>
  <NotificationContainer />
            <BrowserRouter>
            
            <Switch>
                <Route path="/admin" component={Admin} />
                <Route path="/" component={Main}/>
               
            </Switch>
            </BrowserRouter>
            </React.Fragment>
          
        )
    }
}

export default Index;

/*


<Link to="/admin" className="btn btn-danger">Admin</Link>
<Link to="/" className="btn btn-primary">User Area</Link> 
*/
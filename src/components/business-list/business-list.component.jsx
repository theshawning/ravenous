import React from 'react';
import './business-list.scss';

import Business from '../business/business.component';

class BusinessList extends React.Component {
    render () {
        return (
            <div className="BusinessList">
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
            </div>            
        )
    }
};

export default BusinessList;

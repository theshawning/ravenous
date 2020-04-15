import React from 'react';
import './business-list.scss';

import Business from '../business/business.component';

class BusinessList extends React.Component {
    render () {
        return (
            <div className="BusinessList">
                {this.props.businesses.map((business) => <Business business={business} /> )}
            </div>            
        )
    }
};

export default BusinessList;

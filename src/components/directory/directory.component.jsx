import React from 'react';
import {connect} from "react-redux";
import './directory.styles.scss'

import MenuItem from "../menu-item/menu-item.component";
import directoriesSelector from "../../redux/directory/directory.selector";

class Directory extends React.Component{
    render() {
        return <div className='directory-menu'>
            {this.props.directories.map(({id, ...otherProps}) => <MenuItem key={id} {...otherProps}/>)}
        </div>
    }
}

const mapStateToProps = state => ({
    directories: directoriesSelector(state)
});

export default connect(mapStateToProps)(Directory);
import React from 'react'
import SideMenuUserComponent from "../users/side-menu-user"
import SideMenuAdminComponent from "../admin/side-menu-admin"
import { regularUser, adminUser } from '../session-managment/utils';

const SideMenuComponent = (props) => {
    if (props.userType == regularUser) return <SideMenuUserComponent />
    else return <SideMenuAdminComponent />
}

export default SideMenuComponent;

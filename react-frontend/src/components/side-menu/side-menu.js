import React from 'react'
import SideMenuUserComponent from "../users/side-menu-user"
import SideMenuAdminComponent from "../admin/side-menu-admin"

const SideMenuComponent = (props) => {
    if (props.isAnUser) return <SideMenuUserComponent />
    else return <SideMenuAdminComponent />
}

export default SideMenuComponent;
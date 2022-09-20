import React from 'react'
import CIcon from '@coreui/icons-react'
import { cibBuffer, cibElasticStack, cilCart, cilFile, cilPeople, cilSettings } from '@coreui/icons'
import { CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cibElasticStack} style={{ color: '#811434' }} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Inventory',
    to: 'Inventory',
    icon: <CIcon icon={cibBuffer} style={{ color: '#485572' }} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Orders',
    to: 'orders',
    icon: <CIcon icon={cilCart} style={{ color: '#485572' }} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Customers',
    to: 'customers',
    icon: <CIcon icon={cilPeople} style={{ color: '#485572' }} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Reports',
    to: 'reports',
    icon: <CIcon icon={cilFile} style={{ color: '#485572' }} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Settings',
    to: 'settings',
    icon: <CIcon icon={cilSettings} style={{ color: '#485572' }} customClassName="nav-icon" />,
  },
]

export default _nav

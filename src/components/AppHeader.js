import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  CAvatar,
  CButton,
  CInputGroup,
  CFormInput,
  CInputGroupText,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBell, cilEnvelopeOpen, cilList, cilMenu } from '@coreui/icons'

import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'
import { logo } from 'src/assets/brand/logo'
import avatar8 from '../assets/images/avatars/8.jpg'

const vars = {
  fontFamily: 'Open Sans',
  fontSize: '20px',
  color: '#8C8CA1',
  lineHeight: '24px',
  fontWeight: '700',
  fontStyle: 'normal',
}

const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <>
      <CHeader
        position="sticky"
        style={{ height: '56px', background: '#811434', color: '#FBE1D0' }}
      >
        <CContainer fluid>
          <CHeaderToggler
            className="ps-1"
            onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
          >
            <CIcon icon={cilMenu} size="lg" />
          </CHeaderToggler>
          <CHeaderNav className="d-none d-md-flex me-auto">
            <div style={{ left: '8%', right: '89%', fontSize: '26px' }}>CORKOWL</div>

            <CNavItem>
              <CInputGroup style={{ height: '36px', width: '354px', left: '285px' }}>
                <CInputGroupText id="basic-addon2">
                  <CIcon icon={cilBell} style={{ color: 'white', width: '18px' }} />
                  <i className="cid-accessible"></i>
                </CInputGroupText>
                <CFormInput
                  placeholder="Seach wines, customers here..."
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
              </CInputGroup>
            </CNavItem>
          </CHeaderNav>
          <CHeaderNav>
            <CNavItem>
              <CNavLink href="#">
                <CIcon icon={cilBell} style={{ color: 'white', width: '18px' }} />
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="#">
                <div
                  style={{
                    font: 'Open Sans',
                    fontWeight: '700',
                    size: '16px',
                    lineHeight: '24px',
                    color: 'white',
                    width: '90px',
                    height: '24px',
                  }}
                >
                  Nicholas D.
                </div>
              </CNavLink>
            </CNavItem>

            <CAvatar style={{ height: '32px', width: '32px' }} src={avatar8} />
          </CHeaderNav>
        </CContainer>
      </CHeader>

      <CHeaderNav className="d-none d-md-flex me-auto" style={{ height: '80px' }}>
        <div style={{ paddingLeft: '35px', right: '89%', paddingTop: '24px' }}>
          <p style={vars}>Overview </p>
        </div>
        <div style={{ paddingLeft: '850px', right: '89%', paddingTop: '24px', textColor: 'white' }}>
          <CButton color="danger" shape="rounded-0" size="md">
            + Add New Wine
          </CButton>
        </div>
      </CHeaderNav>
    </>
  )
}

export default AppHeader

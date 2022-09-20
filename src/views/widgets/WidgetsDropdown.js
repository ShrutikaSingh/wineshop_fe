import React from 'react'
import {
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetStatsA,
  CWidgetStatsC,
  CCard,
  CCardBody,
  CCardText,
  CCardTitle,
  CButton,
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import { cilArrowBottom, cilArrowTop, cilOptions } from '@coreui/icons'

const textStyle = {
  fontFamily: 'Open Sans',
  fontSize: '16px',
  weight: '600',
  color: '#8C8CA1',
  paddingLeft: '16px',
  paddingTop: '16px',
}

const numberStyle = {
  fontFamily: 'Open Sans',
  fontSize: '24px',
  fontWeight: '700',
  color: 'black',
  paddingLeft: '16px',
  paddingBottom: '40px',
  lineHeight: '32px',
}

const WidgetsDropdown = () => {
  return (
    <>
      <CRow>
        <CCol sm={6} lg={3}>
          <CCard style={{ width: '258px', height: '88px' }}>
            <div style={textStyle}>Open orders</div>
            <div style={numberStyle}>239</div>
            {/* <CCardText>
                With supporting text below as a natural lead-in to additional content.
              </CCardText>
              <CButton href="#">Go somewhere</CButton> */}
          </CCard>
        </CCol>
        <CCol sm={6} lg={3}>
          <CCard style={{ width: '258px', height: '88px' }}>
            <div style={textStyle}>Orders in transit</div>
            <div style={numberStyle}>126</div>
            {/* <CCardText>
                With supporting text below as a natural lead-in to additional content.
              </CCardText>
              <CButton href="#">Go somewhere</CButton> */}
          </CCard>
        </CCol>
        <CCol sm={6} lg={3}>
          <CCard style={{ width: '258px', height: '88px' }}>
            <div style={textStyle}>Fulfilled Orders</div>
            <div style={numberStyle}>1254</div>
            {/* <CCardText>
                With supporting text below as a natural lead-in to additional content.
              </CCardText>
              <CButton href="#">Go somewhere</CButton> */}
          </CCard>
        </CCol>
        <CCol sm={6} lg={3}>
          <CCard style={{ width: '258px', height: '88px' }}>
            <div style={textStyle}>Cancelled orders</div>
            <div style={numberStyle}>35</div>
            {/* <CCardText>
                With supporting text below as a natural lead-in to additional content.
              </CCardText>
              <CButton href="#">Go somewhere</CButton> */}
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default WidgetsDropdown

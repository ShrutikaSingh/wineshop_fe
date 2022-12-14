import React from 'react'

import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CContainer,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CHeaderNav,
  CImage,
} from '@coreui/react'
import { CChart } from '@coreui/react-chartjs'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'
import WidgetsDropdown from '../widgets/WidgetsDropdown'

const vars = {
  fontFamily: 'Open Sans',
  fontSize: '16px',
  color: '#262730',
  lineHeight: '24px',
  fontWeight: '700',
  fontStyle: 'normal',
}

const Dashboard = () => {
  const tableExample = [
    {
      avatar: { src: avatar1, status: 'success' },
      user: {
        name: 'Staglin Family Vineyard',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'USA', flag: cifUs },
      usage: {
        value: 50,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      payment: { name: 'Mastercard', icon: cibCcMastercard },
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar2, status: 'danger' },
      user: {
        name: 'Avram Tarasios',
        new: false,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Brazil', flag: cifBr },
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'info',
      },
      payment: { name: 'Visa', icon: cibCcVisa },
      activity: '5 minutes ago',
    },
    {
      avatar: { src: avatar3, status: 'warning' },
      user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2021' },
      country: { name: 'India', flag: cifIn },
      usage: {
        value: 74,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'warning',
      },
      payment: { name: 'Stripe', icon: cibCcStripe },
      activity: '1 hour ago',
    },
    {
      avatar: { src: avatar4, status: 'secondary' },
      user: { name: 'En??as Kwadwo', new: true, registered: 'Jan 1, 2021' },
      country: { name: 'France', flag: cifFr },
      usage: {
        value: 98,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'danger',
      },
      payment: { name: 'PayPal', icon: cibCcPaypal },
      activity: 'Last month',
    },
    {
      avatar: { src: avatar5, status: 'success' },
      user: {
        name: 'Agapetus Tade????',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Spain', flag: cifEs },
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'primary',
      },
      payment: { name: 'Google Wallet', icon: cibCcApplePay },
      activity: 'Last week',
    },
    {
      avatar: { src: avatar6, status: 'danger' },
      user: {
        name: 'Friderik D??vid',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Poland', flag: cifPl },
      usage: {
        value: 43,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      payment: { name: 'Amex', icon: cibCcAmex },
      activity: 'Last week',
    },
  ]

  return (
    <>
      <WidgetsDropdown />
      <CContainer fluid>
        <CHeaderNav className="d-none d-md-flex me-auto" style={{ height: '64px' }}>
          <div style={{ paddingTop: '24px' }}>
            <p style={vars}>Sales Detail</p>
          </div>
        </CHeaderNav>
      </CContainer>

      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" style={{ color: 'black' }} className="card-title mb-0">
                Total Sales Overview
              </h4>
              <div className="small text-medium-emphasis">7-13 Aug 2020</div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block"></CCol>
          </CRow>
          <br />
          <CRow>
            <CCol sm={8}>
              <CRow>
                <CCol sm={6}>
                  <h1 id="traffic" style={{ color: 'black' }} className="card-title mb-0">
                    $74,729
                  </h1>
                  <div style={{ color: '#2FCA72' }}>+21% from last week</div>
                </CCol>
                <CCol sm={6}>
                  <div style={{ color: 'black', fontWeight: '600' }}>
                    <span style={{ color: '#2FCA72' }}>+</span>Highest Revenue Since 2 Weeks Aga
                  </div>
                </CCol>
              </CRow>
            </CCol>

            <CCol sm={4} className="d-none d-md-block">
              <div
                className="small "
                style={{ color: '#8C8CA1', fontWeight: '700', paddingBottom: '16px' }}
              >
                Total Profit
              </div>
              <h2 id="traffic" style={{ color: '#811434' }} className="card-title mb-0">
                $12,545.00
              </h2>
              <div style={{ color: '#2FCA72' }}>+21% from last week</div>
            </CCol>
          </CRow>
          <CRow>
            <CCol lg={8}>
              <CChart
                // style={{ height: '300px', marginTop: '40px' }}
                type="line"
                data={{
                  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                  datasets: [
                    {
                      label: '',
                      backgroundColor: 'rgba(220, 220, 220, 0.2)',
                      borderColor: '#2FCA72',
                      pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                      pointBorderColor: '#fff',
                      data: [1, 5, 7, 5, 9, 6, 10, 50],
                    },
                  ],
                }}
              />
            </CCol>
            <CCol lg={4}>
              <br></br>
              <br></br>
              <div
                className="small "
                style={{ color: '#8C8CA1', fontWeight: '700', paddingBottom: '16px' }}
              >
                Total Product Sold
              </div>
              <h2 id="traffic" style={{ color: 'black' }} className="card-title mb-0">
                329
              </h2>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader style={{ color: 'black' }}>Inventory </CCardHeader>
            <CCardBody>
              <CTable align="middle" className=" " hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckIndeterminate"
                      ></input>
                    </CTableHeaderCell>
                    <CTableHeaderCell>Product</CTableHeaderCell>
                    <CTableHeaderCell></CTableHeaderCell>
                    <CTableHeaderCell>Rating</CTableHeaderCell>
                    <CTableHeaderCell>Vintage</CTableHeaderCell>
                    <CTableHeaderCell>Qty</CTableHeaderCell>
                    <CTableHeaderCell>Volume</CTableHeaderCell>
                    <CTableHeaderCell>Cost</CTableHeaderCell>
                    <CTableHeaderCell>Price</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody className="border-primary">
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckIndeterminate"
                        ></input>
                      </CTableDataCell>
                      <CTableDataCell>
                        <CImage
                          src={`https://source.unsplash.com/random/200x200?sig=${index}`}
                          width={48}
                          height={48}
                        />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div style={{ color: 'black' }}>{item.user.name}</div>
                        <div className="small text-medium-emphasis">
                          <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                          {item.user.registered}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div style={{ color: 'gray' }}>
                          RP 95 &nbsp; <span>+3</span>
                        </div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="clearfix">
                          <div className="float-start" style={{ color: 'gray' }}>
                            <strong>1950</strong>
                          </div>
                        </div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div style={{ color: 'gray' }}>
                          <span>03</span>
                        </div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div style={{ color: 'gray' }}>
                          <span>standard 750ml</span>
                        </div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div style={{ color: 'gray' }}>
                          <span>$56.75</span>
                        </div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div style={{ color: 'gray' }}>
                          <span>$59.95 </span>
                        </div>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard

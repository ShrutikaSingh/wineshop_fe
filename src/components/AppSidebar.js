import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CSidebar, CSidebarNav } from '@coreui/react'
import { AppSidebarNav } from './AppSidebarNav'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import navigation from '../_nav'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <>
      <CSidebar
        position="fixed"
        unfoldable={unfoldable}
        visible={sidebarShow}
        onVisibleChange={(visible) => {
          dispatch({ type: 'set', sidebarShow: visible })
        }}
        style={{ background: 'white', borderRight: '1px solid #ECF1F4' }}
      >
        <CSidebarNav style={{ color: 'red' }}>
          <SimpleBar style={{ color: 'red' }}>
            <AppSidebarNav items={navigation} />
          </SimpleBar>
        </CSidebarNav>
      </CSidebar>
    </>
  )
}

export default React.memo(AppSidebar)

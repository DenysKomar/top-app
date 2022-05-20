import React, { FunctionComponent } from 'react'
import { LayoutProps } from './Layout.props'
import styles from './Layout.module.css'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
import Footer from './Footer/Footer'

const Layout = ({children}:LayoutProps):JSX.Element => {
  return (
    <div>
        <Header />
        <div>
            <Sidebar />
            <div>
                {children}
            </div>
        </div>
        <Footer />
    </div>
  )
}

export const withLayout = <T extends Record<string,unknown>>(Component:FunctionComponent<T>) => {
  return function withLayoutComponent(props: T):JSX.Element {
      return (
        <Layout>
            <Component {...props} />
        </Layout>
      )
  }
}
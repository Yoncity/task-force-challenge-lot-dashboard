import React from 'react';
import { useState } from 'react';
import Header from '../Header';
import Rightbar from '../Rightbar';
import Sidebar from '../Sidebar';
import './index.scss';

type Props = {
  activeMenu: string;
  headerTitle: string;
};

const Layout: React.FC<Props> = ({ activeMenu, headerTitle, children }) => {
  const [collapse, setCollapse] = useState(false);

  return (
    <div className="layout_container">
      <Sidebar
        active={activeMenu}
        setCollapse={setCollapse}
        collapse={collapse}
      />
      <div className={`layout_container__body  ${collapse && 'full_layout'}`}>
        <Header title={headerTitle} />
        <div className="layout_container__body__section">
          <div
            className={`layout_container__body__section__left  ${
              collapse && 'increase_width'
            }`}
          >
            {children}
          </div>
          <div className="layout_container__body__section__right">
            <Rightbar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;

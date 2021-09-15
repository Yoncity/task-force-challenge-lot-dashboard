import Header from "../Header";
import Rightbar from "../Rightbar";
import Sidebar from "../Sidebar";
import "./index.scss";

type Props = {
  activeMenu: string;
  headerTitle: string;
};

const Layout: React.FC<Props> = ({ activeMenu, headerTitle, children }) => {
  return (
    <div className="layout_container">
      <Sidebar active={activeMenu} />
      <div className="layout_container__body">
        <Header title={headerTitle} />
        <div className="layout_container__body__section">
          <div className="layout_container__body__section__left">
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

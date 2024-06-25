import "./sidebar.css";
import Logo from "../component/1.jpeg";
function Sidebar() {
    return(
        <div className="sidebar">
            {/* <div className="sidebarLogo" align="Top"> */}
            {/*     <img src={Logo} height={10} width={80} alt="Logo" className="logo" /> */}
            {/* </div> */}
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            Home
                        </li>
                        <li className="sidebarListItem">
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            Users
                        </li>
                        <li className="sidebarListItem">
                            Products
                        </li>
                        <li className="sidebarListItem">
                            Transactions
                        </li>
                        <li className="sidebarListItem">
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Sidebar;
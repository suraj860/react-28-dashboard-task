
import { Link } from "react-router-dom";
import {Bar, Doughnut , Line} from "react-chartjs-2"

function Chart (){
    return(
        <div id="page-top">
        <div id="wrapper">

        {/* Sidebar */}
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* Sidebar - Brand */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>

            {/* Divider */}
            <hr className="sidebar-divider my-0"/>

            {/* Nav Item - Dashboard */}
            <li className="nav-item">
            {
            <Link to = "/" className="nav-link"> <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span></Link>
            }
            </li>

            {/* Divider */}
            <hr className="sidebar-divider"/>

            {/* Heading */}
            <div className="sidebar-heading">
                Interface
            </div>

            {/* Nav Item - Pages Collapse Menu */}
            <li className="nav-item">
                <a className="nav-link collapsed" href ="abcd" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Components</span>
                </a>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Components:</h6>
                        {<Link to="/buttons" className="collapse-item">Buttons</Link>}
                         
                        {<Link to="/cards" className="collapse-item active">Cards</Link>}
                    </div>
                </div>
            </li>

            {/* Nav Item - Utilities Collapse Menu */}
            <li className="nav-item">
                <a className="nav-link collapsed" href ="abcd" data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities">
                    <i className="fas fa-fw fa-wrench"></i>
                    <span>Utilities</span>
                </a>
                <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                    data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Utilities:</h6>
                          {<Link to="/utilities-color"  className="collapse-item">Colors</Link>}
                          {<Link to="/utilities-border"  className="collapse-item">Borders</Link>}
                          {<Link to="/utilities-animation"  className="collapse-item">Animations</Link>}
                          {<Link to="/utilities-other"  className="collapse-item">Other</Link>}
                    </div>
                </div>
            </li>

            {/* Divider */}
            <hr className="sidebar-divider"/>

            {/* Heading */}
            <div className="sidebar-heading">
                Addons
            </div>

            {/* Nav Item - Pages Collapse Menu */}
            <li className="nav-item">
                <a className="nav-link collapsed" href ="abcd" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Pages</span>
                </a>
                <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Login Screens:</h6>
                        <Link to="/login" className="collapse-item" >Login</Link>
                        <Link to="/register" className="collapse-item" >Register</Link>
                        <Link to="/forget" className="collapse-item" >Forgot Password</Link>
                        <div className="collapse-divider"></div>
                        <h6 className="collapse-header">Other Pages:</h6>
                        <Link to="/error" className="collapse-item">404 Page</Link>
                        <Link to="/blank" className="collapse-item active">Blank Page</Link>
                    </div>
                </div>
            </li>

            {/* Nav Item - Charts */}
            <li className="nav-item active">
            <Link to ="/charts" className="nav-link"><i className="fas fa-fw fa-chart-area"></i><span>Charts</span></Link>
            </li>

            {/* Nav Item - Tables */}
            <li className="nav-item">
                <Link to="/table" className="nav-link"> <i className="fas fa-fw fa-table"></i><span>Tables</span></Link>
            </li>

            {/* Divider */}
            <hr className="sidebar-divider d-none d-md-block"/>

            {/* Sidebar Toggler (Sidebar) */}
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

        </ul>
        {/* End of Sidebar */}

        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">

            {/* Main Content */}
            <div id="content">

                {/* Topbar */}
                <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                    {/* Sidebar Toggle (Topbar) */}
                    <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                        <i className="fa fa-bars"></i>
                    </button>

                    {/* Topbar Search */}
                    <form
                        className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                        <div className="input-group">
                            <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                                aria-label="Search" aria-describedby="basic-addon2"/>
                            <div className="input-group-append">
                                <button className="btn btn-primary" type="button">
                                    <i className="fas fa-search fa-sm"></i>
                                </button>
                            </div>
                        </div>
                    </form>

                    {/* Topbar Navbar */}
                    <ul className="navbar-nav ml-auto">

                        {/* Nav Item - Search Dropdown (Visible Only XS) */}
                        <li className="nav-item dropdown no-arrow d-sm-none">
                            <a className="nav-link dropdown-toggle" href ="abcd" id="searchDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-search fa-fw"></i>
                            </a>
                            {/* Dropdown - Messages */}
                            <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                aria-labelledby="searchDropdown">
                                <form className="form-inline mr-auto w-100 navbar-search">
                                    <div className="input-group">
                                        <input type="text" className="form-control bg-light border-0 small"
                                            placeholder="Search for..." aria-label="Search"
                                            aria-describedby="basic-addon2"/>
                                        <div className="input-group-append">
                                            <button className="btn btn-primary" type="button">
                                                <i className="fas fa-search fa-sm"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </li>

                        {/* Nav Item - Alerts */}
                        <li className="nav-item dropdown no-arrow mx-1">
                            <a className="nav-link dropdown-toggle" href ="abcd" id="alertsDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-bell fa-fw"></i>
                                {/* Counter - Alerts */}
                                <span className="badge badge-danger badge-counter">3+</span>
                            </a>
                            {/* Dropdown - Alerts */}
                            <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="alertsDropdown">
                                <h6 className="dropdown-header">
                                    Alerts Center
                                </h6>
                                <a className="dropdown-item d-flex align-items-center" href ="abcd">
                                    <div className="mr-3">
                                        <div className="icon-circle bg-primary">
                                            <i className="fas fa-file-alt text-white"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="small text-gray-500">December 12, 2019</div>
                                        <span className="font-weight-bold">A new monthly report is ready to download!</span>
                                    </div>
                                </a>
                                <a className="dropdown-item d-flex align-items-center" href ="abcd">
                                    <div className="mr-3">
                                        <div className="icon-circle bg-success">
                                            <i className="fas fa-donate text-white"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="small text-gray-500">December 7, 2019</div>
                                        $290.29 has been deposited into your account!
                                    </div>
                                </a>
                                <a className="dropdown-item d-flex align-items-center" href ="abcd">
                                    <div className="mr-3">
                                        <div className="icon-circle bg-warning">
                                            <i className="fas fa-exclamation-triangle text-white"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="small text-gray-500">December 2, 2019</div>
                                        Spending Alert: We've noticed unusually high spending for your account.
                                    </div>
                                </a>
                                <a className="dropdown-item text-center small text-gray-500" href ="abcd">Show All Alerts</a>
                            </div>
                        </li>

                        {/* Nav Item - Messages */}
                        <li className="nav-item dropdown no-arrow mx-1">
                            <a className="nav-link dropdown-toggle" href ="abcd" id="messagesDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-envelope fa-fw"></i>
                                {/* Counter - Messages */}
                                <span className="badge badge-danger badge-counter">7</span>
                            </a>
                            {/* Dropdown - Messages */}
                            <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="messagesDropdown">
                                <h6 className="dropdown-header">
                                    Message Center
                                </h6>
                                <a className="dropdown-item d-flex align-items-center" href ="abcd">
                                    <div className="dropdown-list-image mr-3">
                                        <img className="rounded-circle" src="img/undraw_profile_1.svg"
                                            alt="chart"/>
                                        <div className="status-indicator bg-success"></div>
                                    </div>
                                    <div className="font-weight-bold">
                                        <div className="text-truncate">Hi there! I am wondering if you can help me with a
                                            problem I've been having.</div>
                                        <div className="small text-gray-500">Emily Fowler · 58m</div>
                                    </div>
                                </a>
                                <a className="dropdown-item d-flex align-items-center" href ="abcd">
                                    <div className="dropdown-list-image mr-3">
                                        <img className="rounded-circle" src="img/undraw_profile_2.svg"
                                            alt="chart"/>
                                        <div className="status-indicator"></div>
                                    </div>
                                    <div>
                                        <div className="text-truncate">I have the photos that you ordered last month, how
                                            would you like them sent to you?</div>
                                        <div className="small text-gray-500">Jae Chun · 1d</div>
                                    </div>
                                </a>
                                <a className="dropdown-item d-flex align-items-center" href ="abcd">
                                    <div className="dropdown-list-image mr-3">
                                        <img className="rounded-circle" src="img/undraw_profile_3.svg"
                                            alt="chart"/>
                                        <div className="status-indicator bg-warning"></div>
                                    </div>
                                    <div>
                                        <div className="text-truncate">Last month's report looks great, I am very happy with
                                            the progress so far, keep up the good work!</div>
                                        <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                                    </div>
                                </a>
                                <a className="dropdown-item d-flex align-items-center" href ="abcd">
                                    <div className="dropdown-list-image mr-3">
                                        <img className="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                                            alt="chart"/>
                                        <div className="status-indicator bg-success"></div>
                                    </div>
                                    <div>
                                        <div className="text-truncate">Am I a good boy? The reason I ask is because someone
                                            told me that people say this to all dogs, even if they aren't good...</div>
                                        <div className="small text-gray-500">Chicken the Dog · 2w</div>
                                    </div>
                                </a>
                                <a className="dropdown-item text-center small text-gray-500" href ="abcd">Read More Messages</a>
                            </div>
                        </li>

                        <div className="topbar-divider d-none d-sm-block"></div>

                        {/* Nav Item - User Information */}
                        <li className="nav-item dropdown no-arrow">
                            <a className="nav-link dropdown-toggle" href ="abcd" id="userDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                                <img className="img-profile rounded-circle"
                                    src="img/undraw_profile.svg" alt="chart"/>
                            </a>
                            {/* Dropdown - User Information */}
                            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="userDropdown">
                                <a className="dropdown-item" href ="abcd">
                                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Profile
                                </a>
                                <a className="dropdown-item" href ="abcd">
                                    <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Settings
                                </a>
                                <a className="dropdown-item" href ="abcd">
                                    <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Activity Log
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href ="abcd" data-toggle="modal" data-target="#logoutModal">
                                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Logout
                                </a>
                            </div>
                        </li>

                    </ul>

                </nav>
                {/* End of Topbar */}

                {/* Begin Page Content */}
                <div className="container-fluid">

                    {/* Page Heading */}
                    <h1 className="h3 mb-2 text-gray-800">Charts</h1>
                    <p className="mb-4">Chart.js is a third party plugin that is used to generate the charts in this theme.
                        The charts below have been customized - for further customization options, please visit the <a
                            target="_blank" rel="noreferrer" href="https://www.chartjs.org/docs/latest/">official Chart.js
                            documentation</a>.</p>

                    {/* Content Row */}
                    <div className="row">

                        <div className="col-xl-8 col-lg-7">

                            {/* Area Chart */}
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Area Chart</h6>
                                </div>
                                <div className="card-body">
                                    <div className="chart-area">
                                        <Line
                                        data={{
                                            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                                            datasets: [{
                                              label: "Earnings",
                                              lineTension: 0.3,
                                              backgroundColor: "rgba(78, 115, 223, 0.05)",
                                              borderColor: "rgba(78, 115, 223, 1)",
                                              pointRadius: 3,
                                              pointBackgroundColor: "rgba(78, 115, 223, 1)",
                                              pointBorderColor: "rgba(78, 115, 223, 1)",
                                              pointHoverRadius: 3,
                                              pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
                                              pointHoverBorderColor: "rgba(78, 115, 223, 1)",
                                              pointHitRadius: 10,
                                              pointBorderWidth: 2,
                                              data: [0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000, 40000],
                                            }],
                                          }}
                                          options={ {
                                            maintainAspectRatio: false,
                                            layout: {
                                              padding: {
                                                left: 10,
                                                right: 25,
                                                top: 25,
                                                bottom: 0
                                              }
                                            },
                                            scales: {
                                              xAxes: [{
                                                time: {
                                                  unit: 'date'
                                                },
                                                gridLines: {
                                                  display: false,
                                                  drawBorder: false
                                                },
                                                ticks: {
                                                  maxTicksLimit: 7
                                                }
                                              }],
                                              yAxes: [{
                                                ticks: {
                                                  maxTicksLimit: 5,
                                                  padding: 10,
                                                  // Include a dollar sign in the ticks
                                            
                                                },
                                                gridLines: {
                                                  color: "rgb(234, 236, 244)",
                                                  zeroLineColor: "rgb(234, 236, 244)",
                                                  drawBorder: false,
                                                  borderDash: [2],
                                                  zeroLineBorderDash: [2]
                                                }
                                              }],
                                            },
                                            legend: {
                                              display: false
                                            },
                                            tooltips: {
                                              backgroundColor: "rgb(255,255,255)",
                                              bodyFontColor: "#858796",
                                              titleMarginBottom: 10,
                                              titleFontColor: '#6e707e',
                                              titleFontSize: 14,
                                              borderColor: '#dddfeb',
                                              borderWidth: 1,
                                              xPadding: 15,
                                              yPadding: 15,
                                              displayColors: false,
                                              intersect: false,
                                              mode: 'index',
                                              caretPadding: 10,
                                             
                                            }
                                          }}
                                        />
                                        {/* <canvas id="myAreaChart"></canvas> */}
                                    </div>
                                    <hr/>
                                    Styling for the area chart can be found in the
                                    <code>/js/demo/chart-area-demo.js</code> file.
                                </div>
                            </div>

                            {/* Bar Chart */}
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Bar Chart</h6>
                                </div>
                                <div className="card-body">
                                    <div className="chart-bar">
                                        <Bar
                                         data= {{
                                            labels: ["January", "February", "March", "April", "May", "June"],
                                            datasets: [{
                                              label: "Revenue",
                                              backgroundColor: "#4e73df",
                                              hoverBackgroundColor: "#2e59d9",
                                              borderColor: "#4e73df",
                                              data: [4215, 5312, 6251, 7841, 9821, 14984],
                                            }],
                                          }}
                                          options={ {
                                            maintainAspectRatio: false,
                                            layout: {
                                              padding: {
                                                left: 10,
                                                right: 25,
                                                top: 25,
                                                bottom: 0
                                              }
                                            },
                                            scales: {
                                              xAxes: [{
                                                time: {
                                                  unit: 'month'
                                                },
                                                gridLines: {
                                                  display: false,
                                                  drawBorder: false
                                                },
                                                ticks: {
                                                  maxTicksLimit: 6
                                                },
                                                maxBarThickness: 25,
                                              }],
                                              yAxes: [{
                                                ticks: {
                                                  min: 0,
                                                  max: 15000,
                                                  maxTicksLimit: 5,
                                                  padding: 10,
                                                  // Include a dollar sign in the ticks
                                                 
                                                },
                                                gridLines: {
                                                  color: "rgb(234, 236, 244)",
                                                  zeroLineColor: "rgb(234, 236, 244)",
                                                  drawBorder: false,
                                                  borderDash: [2],
                                                  zeroLineBorderDash: [2]
                                                }
                                              }],
                                            },
                                            legend: {
                                              display: false
                                            },
                                            tooltips: {
                                              titleMarginBottom: 10,
                                              titleFontColor: '#6e707e',
                                              titleFontSize: 14,
                                              backgroundColor: "rgb(255,255,255)",
                                              bodyFontColor: "#858796",
                                              borderColor: '#dddfeb',
                                              borderWidth: 1,
                                              xPadding: 15,
                                              yPadding: 15,
                                              displayColors: false,
                                              caretPadding: 10,
                                             
                                            }
                                          }}/>
                                        {/* <canvas id="myBarChart"></canvas> */}
                                    </div>
                                    <hr/>
                                    Styling for the bar chart can be found in the
                                    <code>/js/demo/chart-bar-demo.js</code> file.
                                </div>
                            </div>

                        </div>

                        {/* Donut Chart */}
                        <div className="col-xl-4 col-lg-5">
                            <div className="card shadow mb-4">
                                {/* Card Header - Dropdown */}
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Donut Chart</h6>
                                </div>
                                {/* Card Body */}
                                <div className="card-body">
                                    <div className="chart-pie pt-4">
                                        <Doughnut
                                        data={ {
                                            labels: ["Direct", "Referral", "Social"],
                                            datasets: [{
                                              data: [55, 30, 15],
                                              backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
                                              hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
                                              hoverBorderColor: "rgba(234, 236, 244, 1)",
                                            }],
                                          }}
                                          options={ {
                                            maintainAspectRatio: false,
                                            tooltips: {
                                              backgroundColor: "rgb(255,255,255)",
                                              bodyFontColor: "#858796",
                                              borderColor: '#dddfeb',
                                              borderWidth: 1,
                                              xPadding: 15,
                                              yPadding: 15,
                                              displayColors: false,
                                              caretPadding: 10,
                                            },
                                            legend: {
                                              display: false
                                            },
                                            cutoutPercentage: 80,
                                          }} />
                                        {/* <canvas id="myPieChart">   </canvas> */}
                                    </div>
                                    <hr/>
                                    Styling for the donut chart can be found in the
                                    <code>/js/demo/chart-pie-demo.js</code> file.
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* /.container-fluid */}

            </div>
            {/* End of Main Content */}

            {/* Footer */}
            <footer className="sticky-footer bg-white">
                <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                        <span>Copyright &copy; Your Website 2020</span>
                    </div>
                </div>
            </footer>
            {/* End of Footer */}

        </div>
        {/* End of Content Wrapper */}

    </div>
    {/* End of Page Wrapper */}

    {/* Scroll to Top Button*/}
    <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
    </a>

    {/* Logout Modal*/}
    <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                    <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                <div className="modal-footer">
                    <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                    <a className="btn btn-primary" href="login.html">Logout</a>
                </div>
            </div>
        </div>
    </div>
  
 </div>
    )
}

export default Chart;
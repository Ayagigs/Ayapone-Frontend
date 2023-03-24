import DashboardNavBar from '../../components/DashboardNavBar'
import DashboardSideBar from '../../components/DashboardSideBar'

const Dashboard = () => {
  return (
    <main className="container bg-ayaNeutral-100 h-auto font-nunito flex">
        <DashboardSideBar />
        <div>
        <DashboardNavBar pagename={'Dashboard'}/>

      <main>
        dashboard page<br/><br/><br/><br/><br/>
        dashboard page<br/><br/><br/><br/><br/>
        dashboard page<br/><br/><br/><br/><br/>
        dashboard page<br/><br/><br/><br/><br/>
        dashboard page<br/><br/><br/><br/><br/>
        dashboard page<br/><br/><br/><br/><br/>
        dashboard page<br/><br/><br/><br/><br/>
        dashboard page<br/><br/><br/><br/><br/>

      </main></div>
    </main>
  );
};

export default Dashboard;

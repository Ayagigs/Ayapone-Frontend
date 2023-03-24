import DashboardNavBar from '../../components/DashboardNavBar'
import DashboardSideBar from '../../components/DashboardSideBar'

const Dashboard = () => {
  return (
    <main className="container bg-ayaNeutral-100 h-auto font-nunito flex">
        <DashboardSideBar />
        <DashboardNavBar pagename={'Dashboard'}/>

        <main className='p-12'>
          dashboard page<br/><br/><br/><br/><br/>
          dashboard page<br/><br/><br/><br/><br/>
          dashboard page<br/><br/><br/><br/><br/>
          dashboard page<br/><br/><br/><br/><br/>
          dashboard page<br/><br/><br/><br/><br/>
          dashboard page<br/><br/><br/><br/><br/>
          dashboard page<br/><br/><br/><br/><br/>
          dashboard page<br/><br/><br/><br/><br/>

        </main>
    </main>
  );
};

export default Dashboard;

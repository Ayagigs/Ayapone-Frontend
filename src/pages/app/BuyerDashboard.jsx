import DashboardNavBar from '../../components/DashboardNavBar'
import BuyerSideBarMenu from './components/BuyerSideBarMenu'

const BuyerDashboard = () => {
  return (
    <main className="container bg-ayaNeutral-100 h-auto flex">
        <BuyerSideBarMenu />
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

export default BuyerDashboard;

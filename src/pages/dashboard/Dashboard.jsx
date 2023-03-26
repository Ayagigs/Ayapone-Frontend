import DashboardNavBar from '../../components/DashboardNavBar'
import BuyerSideBarMenu from './components/BuyerSideBarMenu'
import MerchantSideBarMenu from './components/MerchantSideBarMenu'

const Dashboard = () => {
  return (
    <main className="container bg-ayaNeutral-100 h-auto flex">
        {/* <BuyerSideBarMenu /> */}
        <MerchantSideBarMenu />
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

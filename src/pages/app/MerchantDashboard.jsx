import DashboardNavBar from '../../components/DashboardNavBar'
import MerchantSideBarMenu from './components/MerchantSideBarMenu'

const MerchantDashboard = () => {
  return (
    <main className="container bg-ayaNeutral-100 h-auto flex">
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

export default MerchantDashboard;

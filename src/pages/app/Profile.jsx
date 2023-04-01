import UserProfileCard from './components/profile/UserProfileCard'
import BusinessWalletCard from './components/profile/BusinessWalletCard'
import MerchantBusinessCard from './components/profile/MerchantBusinessCard'
import { useCurrentUserStore } from '../../store/currentUserStore'

const Profile = () => {
  const { user } = useCurrentUserStore()
  return (
    <main className='p-11 mt-12 space-y-5'>
      <div className='flex flex-wrap gap-5 mt-6'>
        <UserProfileCard />
        { user.user_role == 'merchant' && <MerchantBusinessCard /> }
      </div>
      <div className='flex flex-wrap gap-5 mt-6'>
        { user.user_role == 'merchant' && <BusinessWalletCard /> }
      </div>
    </main>
  );
};

export default Profile;

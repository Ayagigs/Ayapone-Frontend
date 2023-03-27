import AypActivityItem from './components/wallet/AypActivityItem'
import NotificationItem from './components/notification/NotificationItem'
import React, {useState} from 'react'

const Notification = () => {
  const [modalIsOpen, setIsOpen] = useState(false)

  return (
    <>
      <main className='p-11 mt-12'>
        <div className='flex flex-wrap gap-3 mt-6'>
          <div className='w-[624px] flex-wrap'>
            <div className='bg-white shadow-8 rounded-lg h-auto p-6 flex flex-col'>
              <div className='w-full flex flex-wrap'>
                <ul className='w-full'>
                  <NotificationItem statusColor={'bg-ayaSuccess-200'} title={'Order delivered successfully'} time={'02:24'} />
                  <NotificationItem statusColor={'bg-ayaSuccess-200'} title={'Order delivered successfully'} time={'02:24'} />
                  <NotificationItem statusColor={'bg-ayaNeutral-500'} title={'Order delivered successfully'} time={'02:24'} style={'text-ayaNeutral-500'} />
                  <NotificationItem statusColor={'bg-ayaNeutral-500'} title={'Order delivered successfully'} time={'02:24'} style={'text-ayaNeutral-500'} />
                  <NotificationItem statusColor={'bg-ayaNeutral-500'} title={'Order delivered successfully'} time={'02:24'} style={'text-ayaNeutral-500'} />
                  <NotificationItem statusColor={'bg-ayaNeutral-500'} title={'Order delivered successfully'} time={'02:24'} style={'text-ayaNeutral-500'} />
                </ul>
              </div>
            </div>
          </div>
          <div className='bg-white shadow-8 rounded-lg h-auto w-[440px] p-6'>
            <div className={`border-b border-b-ayaNeutral-200 font-normal text-base flex item-center py-4 justify-between`}>
              <p>{`Order delivered successfully`}</p>
              <span>{`02:24`}</span>
            </div>

            <div className='w-full flex flex-wrap text-sm mt-6 mb-8'>
              <p>Lorem ipsum dolor sit amet consectetur. Purus aliquet bibendum malesuada est aliquam adipiscing nisl. Purus est felis purus in tortor et praesent sed. Cras nunc imperdiet faucibus sollicitudin sit justo turpis pulvinar. Egestas est in massa integer integer est vitae. Adipiscing faucibus quis bibendum consequat integer.</p>
              <p>Suscipit sapien metus magna morbi. Ultrices eleifend vel amet neque convallis facilisi suspendisse. Viverra neque aliquam vestibulum feugiat feugiat cum. Ultrices leo turpis vitae interdum venenatis. Ut laoreet varius aenean massa convallis pellentesque et eleifend lobortis. Semper mi diam venenatis lorem phasellus sit natoque et.</p>
              <p>At laoreet et aliquet lobortis dis. Cursus mauris ac in velit arcu. Ipsum enim tellus lectus amet sem vestibulum at donec. Facilisis ut venenatis sollicitudin blandit. Egestas venenatis et et congue feugiat tincidunt nisi adipiscing. Ut at non amet in gravida. Consequat aliquam nibh congue et at. Mauris at nullam id arcu quam.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Notification;

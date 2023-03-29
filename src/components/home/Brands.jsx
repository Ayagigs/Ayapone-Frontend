import { Link } from 'react-router-dom'
import routes from '../../navigation/routes'
import apple from '../../assets/images/brands/apple.svg'
import lenovo from '../../assets/images/brands/lenovo.svg'
import samsung from '../../assets/images/brands/samsung.svg'
import hp from '../../assets/images/brands/hp.svg'
import oraimo from '../../assets/images/brands/oraimo.svg'
import nnnn from '../../assets/images/brands/nnnn.svg'

const Brands = () => {
  return (
    <div className='flex justify-center space-x-6'>
      <div className={`item-center rounded-lg h-[188px] w-[176px] shadow flex justify-center items-center`}>
        <img
          className={``}
          draggable={false}
          src={apple}
          alt=''
        />
      </div>
      <div className={`rounded-lg h-[188px] w-[176px] shadow flex justify-center items-center`}>
        <img
          className={`place-self-center`}
          draggable={false}
          src={lenovo}
          alt=''
        />
      </div>
      <div className={`rounded-lg h-[188px] w-[176px] shadow flex justify-center items-center`}>
        <img
          className={`place-self-center`}
          draggable={false}
          src={samsung}
          alt=''
        />
      </div>
      <div className={`rounded-lg h-[188px] w-[176px] shadow flex justify-center items-center`}>
        <img
          className={`place-self-center`}
          draggable={false}
          src={oraimo}
          alt=''
        />
      </div>
      <div className={`rounded-lg h-[188px] w-[176px] p-14 shadow`}>
        <img
          className={`place-self-center`}
          draggable={false}
          src={hp}
          alt=''
        />
      </div>
      <div className={`rounded-lg h-[188px] w-[176px] p-14 shadow`}>
        <img
          className={`place-self-center`}
          draggable={false}
          src={nnnn}
          alt=''
        />
      </div>
    </div>
  );
};

export default Brands;

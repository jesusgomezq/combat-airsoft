
import Layout from '../../../components/Layout/Layout'
import { CiViewList } from 'react-icons/ci'
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2'
import { FaUserCheck } from 'react-icons/fa'
import DashboardTabs from './DashboardTabs'

const Dashboard = () => {
  return (
    <Layout>
      <section className='text-gray-600 mt-10 mb-10'>
        <div className='container px-5 mb-10 mx-auto'>
          <div className='flex flex-wrap -mt-4 text-center'>
            <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
              <div className='bg-gray-300 border-gray-400 border-2 px-4 py-3 rounded-2xl hover:shadow-xl duration-300 transition-all cursor-pointer'>
                <div className='inline-block mb-3 w-12 h-12 text-gray-800'>
                  <CiViewList size={50}/>
                </div>
                <h2 className='text-3xl text-gray-700 font-medium font-titleFont'>10</h2>
                <p className='font-bold text-gray-800 first-letter:uppercase'>productos</p>
              </div>
            </div>

            <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
              <div className='bg-gray-300 border-gray-400 border-2 px-4 py-3 rounded-2xl hover:shadow-xl duration-300 transition-all cursor-pointer'>
                <div className='inline-block mb-3 w-12 h-12 text-gray-800'>
                  <HiOutlineClipboardDocumentList size={50}/>
                </div>
                <h2 className='text-3xl text-gray-700 font-medium font-titleFont'>10</h2>
                <p className='font-bold text-gray-800 first-letter:uppercase'>ordenes</p>
              </div>
            </div>

            <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
              <div className='bg-gray-300 border-gray-400 border-2 px-4 py-3 rounded-2xl hover:shadow-xl duration-300 transition-all cursor-pointer'>
                <div className='inline-block mb-3 w-12 h-12 text-gray-800'>
                  <FaUserCheck size={50}/>
                </div>
                <h2 className='text-3xl text-gray-700 font-medium font-titleFont'>10</h2>
                <p className='font-bold text-gray-800 first-letter:uppercase'>usuarios</p>
              </div>
            </div>

            <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
              <div className='bg-gray-300 border-gray-400 border-2 px-4 py-3 rounded-2xl hover:shadow-xl duration-300 transition-all cursor-pointer'>
                <div className='inline-block mb-3 w-12 h-12 text-gray-800'>
                  <CiViewList size={50}/>
                </div>
                <h2 className='text-3xl text-gray-700 font-medium font-titleFont'>10</h2>
                <p className='font-bold text-gray-800 first-letter:uppercase'>productos</p>
              </div>
            </div>
          </div>
        </div>
        <DashboardTabs/>
      </section>
    </Layout>
  )
}

export default Dashboard
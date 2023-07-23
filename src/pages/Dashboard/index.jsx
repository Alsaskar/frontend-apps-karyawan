import Helmet from 'react-helmet';
import Layout from './Layout';

const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard | Aplikasi Karyawan</title>
      </Helmet>

      <Layout />
    </>
  );
};

export default Dashboard;

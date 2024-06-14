import Header from '@components/Header/Header.jsx';
import RightContainer from '@components/RightContainer/RightContainer.jsx';
import Sidebar from '@components/Sidebar/Sidebar.jsx';

const MainLayout = () => {
  return (
    <>
      <Sidebar />
      <RightContainer />
    </>
  );
};
export default MainLayout;

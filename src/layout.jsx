import SideBar from "./Components/SideBar";

const Layout = ({ children }) => {
  return (
    <div className=" flex">
      <SideBar />
      <div className=" w-5/6 bg-[#FEFAE0] h-screen overflow-y-scroll">
        {children}
      </div>
    </div>
  );
};
export default Layout;
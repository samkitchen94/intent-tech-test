import Header from "@components/Header";
import TabContainer from "@components/TabGroup/TabContainer";

const Home = () => {
  return (
    <div className="max-w-[1140px] w-full px-8 mx-auto py-[50px]">
      <Header />
      <TabContainer />
    </div>
  );
}

export default Home;

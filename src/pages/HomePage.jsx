import BlogList from "../components/BlogList";
import ImageSwitcher from "../components/ImageSwitcher";

function HomePage() {
  return (
    <div className="main-screen-container">
      <div className="left-panel">
        <BlogList />
      </div>
      <div className="right-panel">
        <div className="right-panel-top">
          <h3>Under construction!</h3>
          <ImageSwitcher />
        </div>
        <div className="right-panel-bottom">
          <h3>Under construction!</h3>
          <ImageSwitcher />
        </div>
      </div>
    </div>
  );
}

export default HomePage;

import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";

import PageNotFoundAnimation from "assets/page-not-found.json";
import { useNavigationHistoryStore } from "store/navigationHistoryStore";
import routes from "navigation/routes";

const PageNotFound = () => {
  const { history } = useNavigationHistoryStore();
  const navigate = useNavigate();

  const handleNavigation = () => {
    if (history.length > 1) {
      navigate(-1);
    } else {
      window.location.replace(routes.HOME_PAGE);
    }
  };

  return (
    <main className="">
      <h1 className="">Sorry page not found</h1>
      <Lottie
        className=""
        animationData={PageNotFoundAnimation}
        loop={true}
      />
      <span className="">
        You might have wandered off track, let's get you back
        <button
          onClick={handleNavigation}
          className=""
          type="button"
        >
          Home
        </button>
      </span>
    </main>
  );
};

export default PageNotFound;

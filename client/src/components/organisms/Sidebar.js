import "styles/sidebar.scss";
import Sticky from "react-sticky-el";
import UserProfile from "./UserProfile";
import Suggestions from "./Suggestions";
import image from "images/profile.png";

function Sidebar() {
  return (
    <Sticky topOffset={-80}>
      <div className="sidebar">
        <UserProfile
          username="Collin"
          caption="Collin Morikawa"
          urlText="Switch"
          iconSize="big"
          image={image}
        />
        <Suggestions />
       </div>
    </Sticky>
  );
}

export default Sidebar;
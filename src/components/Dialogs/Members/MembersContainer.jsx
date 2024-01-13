import { connect } from "react-redux";
import Members from "./Members.jsx";

let mapStateToProps = (state) => {
  return {
    members: state.dialogPage.members,
  };
};
const MembersContainer = connect(mapStateToProps)(Members);

export default MembersContainer;

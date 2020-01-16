import {connect} from "react-redux";
import App from "./App";
let mapStateToProps = (state) => {
    return {
        retries: state.retries
    }
};

let AppContainer = connect(mapStateToProps, null) (App);
export default AppContainer;
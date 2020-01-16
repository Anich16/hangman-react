import {connect} from "react-redux";
import SelectBlock from "./SelectBlock";
import {changeKeyboardAC, changeTopicAC} from "../../redux/HangmanReducer";

let mapStateToProps = (state) => {
    return {
        topic: state.topic
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        changeTopic: (value) => {
            return dispatch(changeTopicAC(value));
        },
        changeKeyboard: (value, status) => {
            return dispatch(changeKeyboardAC(value, status))
        }
    }
};

let SelectBlockContainer = connect(mapStateToProps, mapDispatchToProps)(SelectBlock);
export default SelectBlockContainer;
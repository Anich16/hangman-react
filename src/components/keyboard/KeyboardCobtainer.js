import Keyboard from "./Keyboard";
import {connect} from "react-redux";
import {changeKeyboardAC, checkStatusGameAC, findLetterAC} from "../../redux/HangmanReducer";

let mapStateToProps = (state) => {
    return {
        keyboard: state.keyboardData
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        findLetter: (value) => {
            return dispatch(findLetterAC(value))
        },
        changeKeyboard: (value, status) => {
            return dispatch(changeKeyboardAC(value, status))
        },
        checkStatusGame: () => {
            return dispatch(checkStatusGameAC())
        }
    }
};

let KeyboardContainer = connect(mapStateToProps, mapDispatchToProps)(Keyboard);
export default KeyboardContainer;
import {connect} from "react-redux";
import GameBlock from "./GameBlock";
import {changeKeyboardAC, changeTopicAC, startNewGameAC} from "../../redux/HangmanReducer";

let mapStateToProps = (state) => {
    return {
        viewWord: state.viewWord,
        retries: state.retries,
        statusGame: state.statusGame
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        changeKeyboard: (value, status) => {
            return dispatch(changeKeyboardAC(value, status))
        },
        startNewGame: () => {
            return dispatch(startNewGameAC())
        },
        changeTopic: (value) => {
            return dispatch(changeTopicAC(value));
        }
    }
};

let GameBlockContainer = connect(mapStateToProps, mapDispatchToProps)(GameBlock);
export default GameBlockContainer;
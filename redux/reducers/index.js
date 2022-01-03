import { combineReducers } from "redux";
import { userDataReducer } from "./UserDataReducer";
import { AddProblemReducer } from "./AddProblemReducer";
import { SignupErrorReducer } from "./SignupErrors";
import { ProblemListReducer } from "./ProblemList";
import { EditorValueReducer } from "./EditorValueReducer";
import { ThemeReducer } from "./ThemeReducer";
import { EditorLanguageReducer } from "./EditorLanguageReducer";

export default combineReducers({
  userData: userDataReducer,
  addProblemData: AddProblemReducer,
  signupErrors: SignupErrorReducer,
  problemList: ProblemListReducer,
  editorValue: EditorValueReducer,
  themeValue: ThemeReducer,
  editorLanguage: EditorLanguageReducer,
});

import {
  UpdateSubmissionsList,
  UpdateGetSubmissionsState,
  AppendSubmissionList,
} from "../../types";
import cloneDeep from "lodash/cloneDeep";
import { submissionsListI } from "../../interfaces";

type Action = {
  type: string;
  payload: any;
};

const initial: null | submissionsListI[] = null;

const getSubmissionsState_initial: boolean = true;

export const SubmissionsListReducer = (
  state: null | submissionsListI[] = initial,
  action: Action
): null | submissionsListI[] => {
  switch (action.type) {
    case UpdateSubmissionsList:
      return action.payload;
    case AppendSubmissionList:
      if (state === null) {
        return [action.payload];
      }
      let oldState = cloneDeep(state);
      oldState.unshift(action.payload);
      return oldState;
    default:
      return state;
  }
};

export const GetSubmissionsStateReducer = (
  state: boolean = getSubmissionsState_initial,
  action: { type: string; payload: boolean }
): boolean => {
  switch (action.type) {
    case UpdateGetSubmissionsState:
      return action.payload;
    default:
      return state;
  }
};

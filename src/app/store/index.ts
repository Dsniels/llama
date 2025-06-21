/** @format */

import {ActionReducerMap} from "@ngrx/store";
import {ChatState, Reducer} from "./chat/chat.reducer";

export interface AppState {
	chat: ChatState;
}

export const reducers: ActionReducerMap<AppState> = {
	chat: Reducer,
};

/** @format */

import {createReducer, on} from "@ngrx/store";
import {ChatActions} from "./chat.actions";
import {Message} from "../../interfaces/message";

export type ChatState = {
	Messages: Message[];
	Connected: boolean;
};

export const InitialState: ChatState = {
	Connected: false,
	Messages: [],
};

export const Reducer = createReducer(
	InitialState,
	on(ChatActions.receive_message_success, (state, {payload}) => ({
		...state,
		Messages: [...state.Messages, payload],
	})),
);

/** @format */

import {createActionGroup, props} from "@ngrx/store";
import {Message} from "../../interfaces/message";

export const ChatActions = createActionGroup({
	source: "CHAT",
	events: {
		receive_message: props<{payload: Message}>(),
		receive_message_success: props<{payload: Message}>(),
		delete_message: props<{payload: Message}>(),
	},
});

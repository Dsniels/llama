/** @format */

import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ChatState} from "./chat/chat.reducer";

export const ChatSelector = createFeatureSelector<ChatState>("chat");

export const SelectMessages = createSelector(
	ChatSelector,
	(state) => state.Messages,
);

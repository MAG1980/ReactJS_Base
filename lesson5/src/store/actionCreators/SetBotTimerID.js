import { MESSAGES_SET_BOT_TIMER_ID } from "../messages/action";

export const SetBotTimerId = (timerID) => {
  return {
    type: MESSAGES_SET_BOT_TIMER_ID,
    timerID,
  };
};

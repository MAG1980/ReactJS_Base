import { createApiReducer } from "../../helpers/createApiReducer";
import { TEST_API_URL } from "../../helpers/API";

export const newData = createApiReducer("NEW_DATA", TEST_API_URL);

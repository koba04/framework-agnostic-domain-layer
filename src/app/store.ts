import { createStore } from "redux";

import { initialData, updateBody, updateTitle } from "../domains/blog";

type State = ReturnType<typeof initialData>;

type Action =
  | {
      type: "updateTitle";
      payload: string;
    }
  | {
      type: "updateBody";
      payload: string;
    };

// eslint-disable-next-line default-param-last
const reducer = (state = initialData(), action: Action) => {
  switch (action.type) {
    case "updateTitle": {
      return updateTitle(state, action.payload);
    }
    case "updateBody": {
      return updateBody(state, action.payload);
    }
    default: {
      return state;
    }
  }
};

declare module "react-redux" {
  export interface DefaultRootState extends State {}
}

export const store = createStore(reducer);

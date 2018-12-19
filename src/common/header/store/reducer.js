const defaultState = {
  focused: false
};

export default (state = defaultState, action) => {
  let { type } = action;
  switch (type) {
    case "search_focus":
      return {
        focused: true
      };
    case "search_blur":
      return {
        focused: false
	  };
	default:
	  return {
		  focused: false
	  }
  }
};

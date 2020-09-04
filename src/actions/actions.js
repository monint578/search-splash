export const ADD_QUERY = "ADD_QUERY";
export const DELETE_QUERY = "DELETE_QUERY";

export const deleteQuery = (queryText) => {
  return {
    type: "DELETE_QUERY",
    payload: queryText
  };
};

export const addQuery = (title) => {
  return {
    type: "ADD_QUERY",
    title
  };
};

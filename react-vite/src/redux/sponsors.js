const GET_ALL_SPONSORS = "sponsors/getAllSponsors";

const getAllSponsors = (sponsors) => ({
  type: GET_ALL_SPONSORS,
  payload: sponsors,
});

export const getAllSponsorsThunk = () => async (dispatch) => {
  const response = await fetch("/api/sponsors/");
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
    dispatch(getAllSponsors(data));
  }
};

const initialState = {
  sponsors: [],
  new_sponsor: [],
}; // Initialize sponsors as an empty array

function sponsorReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_SPONSORS:
      return { ...state, sponsors: action.payload };
    // case ADD_SPONSOR:
    //   return {
    //     ...state,
    //     sponsors: [...state.sponsors, action.payload],
    //     new_sponsor: [...state.new_sponsor, action.payload],
    //   };
    // case DELETE_SPONSOR:
    //   return {
    //     ...state,
    //     sponsors: state.sponsors.filter(
    //       (sponsor) => sponsor.id !== action.payload
    //     ),
    //   };
    // case EDIT_SPONSOR:
    //   return {
    //     ...state,
    //     sponsors: state.sponsors.map((sponsor) =>
    //       sponsor.id === action.payload.id ? action.payload : sponsor
    //     ),
    //   };
    default:
      return state;
  }
}

export default sponsorReducer;

const GET_ALL_SPONSORS = "sponsors/getAllSponsors";
const DELETE_SPONSOR = "sponsors/deleteSponsor";
const ADD_SPONSOR = "sponsor/addSponsor";
const EDIT_SPONSOR = "sponsor/editSponsor";

const editSponsor = (sponsor) => ({
  type: EDIT_SPONSOR,
  payload: sponsor,
});

export const editSponsorThunk = (sponsorId, editedData) => async (dispatch) => {
  const response = await fetch(`/api/sponsors/${sponsorId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(editedData),
  });

  if (response.ok) {
    const editingSponsor = await response.json();
    dispatch(editSponsor(editingSponsor));
    return editingSponsor;
  } else {
    throw new Error("Error editing sponsor");
  }
};

const addSponsor = (sponsor) => ({
  type: ADD_SPONSOR,
  payload: sponsor,
});

export const addNewSponsorThunk = (sponsorData) => async (dispatch) => {
  const response = await fetch("/api/sponsors/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(sponsorData),
  });

  if (response.ok) {
    const newSponsor = await response.json();
    dispatch(addSponsor(newSponsor));
    return newSponsor;
  } else {
    throw new Error("Error adding sponsor");
  }
};

const getAllSponsors = (sponsors) => ({
  type: GET_ALL_SPONSORS,
  payload: sponsors,
});

const deleteSponsor = (sponsor) => ({
  type: DELETE_SPONSOR,
  payload: sponsor,
});

export const deleteSponsorThunk = (sponsorId) => async (dispatch) => {
  const response = await fetch(`/api/sponsors/${sponsorId}`, {
    method: "DELETE",
  });
  if (response.ok) {
    dispatch(deleteSponsor(sponsorId));
    return sponsorId;
  } else {
    throw new Error("Error Deleting Sponsor");
  }
};

export const getAllSponsorsThunk = () => async (dispatch) => {
  const response = await fetch("/api/sponsors/");
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
    dispatch(getAllSponsors(data));
  } else {
    throw new Error("Error Getting Sponsors");
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
    case ADD_SPONSOR:
      return {
        ...state,
        sponsors: [...state.sponsors, action.payload],
        new_sponsor: [...state.new_sponsor, action.payload],
      };
    case DELETE_SPONSOR:
      return {
        ...state,
        sponsors: state.sponsors.filter(
          (sponsor) => sponsor.id !== action.payload
        ),
      };
    case EDIT_SPONSOR:
      return {
        ...state,
        sponsors: state.sponsors.map((sponsor) =>
          sponsor.id === action.payload.id ? action.payload : sponsor
        ),
      };
    default:
      return state;
  }
}

export default sponsorReducer;

const GET_ALL_EVENTS = "events/getAllEvents";
const ADD_EVENT = "events/addEvent";
const DELETE_EVENT = "events/deleteEvent";
const EDIT_EVENT = "events/editEvent";

const getAllEvents = (events) => ({
  type: GET_ALL_EVENTS,
  payload: events,
});

export const getAllEventsThunks = () => async (dispatch) => {
  const response = await fetch("/api/events/");
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
    dispatch(getAllEvents(data));
  }
};

const initialState = {
  events: [],
  new_event: [],
}; // Initialize animals as an empty array

function eventsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_EVENTS:
      return { ...state, events: action.payload };
    case ADD_EVENT:
      return {
        ...state,
        events: [...state.events, action.payload],
        new_event: [...state.new_event, action.payload],
      };
    case DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter((event) => event.id !== action.payload),
      };
    case EDIT_EVENT:
      return {
        ...state,
        events: state.events.map((event) =>
          event.id === action.payload.id ? action.payload : event
        ),
      };
    default:
      return state;
  }
}

export default eventsReducer;

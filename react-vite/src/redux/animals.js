// redux/animals.js
const GET_ALL_ANIMALS = "animals/getAll";

const getAllAnimals = (animals) => ({
  type: GET_ALL_ANIMALS,
  payload: animals,
});

export const getAllAnimalsThunk = () => async (dispatch) => {
  const response = await fetch("/api/animals/");
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
    dispatch(getAllAnimals(data));
  }
};

const initialState = { animals: null };

function animalReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_ANIMALS:
      return { ...state, animals: action.payload };
    default:
      return state;
  }
}

export default animalReducer;

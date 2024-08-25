// redux/animals.js
const GET_ALL_ANIMALS = "animals/getAll";
const ADD_ANIMAL = "animals/addAnimal";
const DELETE_ANIMAL = "animals/deleteAnimal";

const deleteAnimal = (animalId) => ({
  type: DELETE_ANIMAL,
  payload: animalId,
});

export const deleteAnimalThunk = (animalId) => async (dispatch) => {
  // console.log("Animal ID from DeleteTHunk", animalId);
  const response = await fetch(`/api/animals/${animalId}`, {
    method: "DELETE",
  });
  if (response.ok) {
    dispatch(deleteAnimal(animalId)); // Dispatch the animalId directly
    return animalId;
  } else {
    throw new Error("Error Deleting Animal");
  }
};

const addNewAnimal = (animal) => ({
  type: ADD_ANIMAL,
  payload: animal,
});

export const addAnimalThunk = (animalData) => async (dispatch) => {
  // console.log(animalData, "DATA IN THUNK");
  const response = await fetch("/api/animals/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(animalData),
  });

  if (response.ok) {
    const newAnimalAdded = await response.json();
    dispatch(addNewAnimal(newAnimalAdded));
    return newAnimalAdded;
  } else {
    throw new Error("Error adding new rescue.");
  }
};

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

const initialState = {
  animals: [],
  new_animal: [],
}; // Initialize animals as an empty array

function animalReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_ANIMALS:
      return { ...state, animals: action.payload };
    case ADD_ANIMAL:
      return {
        ...state,
        animals: [...state.animals, action.payload],
        new_animal: [...state.new_animal, action.payload],
      };
    case DELETE_ANIMAL:
      return {
        ...state,
        animals: state.animals.filter((animal) => animal.id !== action.payload),
      };
    default:
      return state;
  }
}

export default animalReducer;

const validateData = (data) => {
  const errors = {};

  data.age > 0 ? null : (errors.age_error = "Age must be greater than 0.");
  data.animal_name.length ? null : (errors.name_error = "Name required.");
  data.breed.length ? null : (errors.breed_error = "Breed required.");
  data.fixed === 0 || data.fixed === 1
    ? null
    : (errors.fixed_error = "Must indicate if spayed or neutered.");
  data.good_w_cats === 0 || data.good_w_cats === 1
    ? null
    : (errors.good_w_cats = "Must indicate if good with cats.");
  data.can_adopt === 0 || data.can_adopt === 1
    ? null
    : (errors.can_adopt = "Must indicate if available to adopt.");
  data.good_w_dogs === 0 || data.good_w_dogs === 1
    ? null
    : (errors.good_w_dogs = "Must indicate if good with dogs.");
  data.good_w_kids === 0 || data.good_w_kids === 1
    ? null
    : (errors.good_w_kids = "Must indicate if good with kids.");
  data.potty_trained === 0 || data.potty_trained === 1
    ? null
    : (errors.potty_trained = "Must indicate if potty trained.");
  data.rescue_date.length > 0
    ? null
    : (errors.rescue_date = "Rescue date required.");
  data.sex === "Male" || data.sex === "Female"
    ? null
    : (errors.sex = "Must indicate rescue's sex.");
  data.story.length ? null : (errors.story = "Rescue story required.");

  data.thumbnail_img.length > 8
    ? null
    : (errors.thumbnail_img = "Thumbnail image url required.");
  data.animal_type ? null : (errors.rescueType = "Rescue type is required.");

  if (Object.keys(errors).length === 0) {
    return true;
  } else {
    return errors;
  }
};
export default validateData;

const validateEvents = (data) => {
  const errors = {};

  data.event_title > 3
    ? null
    : (errors.title_error = "Title must be greater than 3 characters.");
  data.event_date > 0 ? null : (errors.date_error = "A date has to be chosen.");
  data.event_time > 0 ? null : (errors.time_error = "A time has to be chosen.");
  data.event_location > 3
    ? null
    : (errors.location_error = "Location must be greater than 3 characters.");
  data.event_desc > 0
    ? null
    : (errors.desc_error = "Description needs to be included");

  if (Object.keys(errors).length === 0) {
    return true;
  } else {
    return errors;
  }
};

export default validateEvents;

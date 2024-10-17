const validateSponsor = (data) => {
  console.log("------>", data);
  const errors = {};

  data.sponsor_name.length > 3
    ? null
    : (errors.sponsor_name_error =
        "Sponsor name must be greater than 3 characters.");

  if (Object.keys(errors).length === 0) {
    return true;
  } else {
    return errors;
  }
};

export default validateSponsor;

export default ({ title, description, date }) => {
  const errors = {};

  if (!title) {
    errors.title = 'Title cannot be empty';
  }

  if (!description) {
    errors.description = 'Description cannot be empty';
  }

  if (!date) {
    errors.date = 'Starts on cannot be empty';
  }

  return errors;
};

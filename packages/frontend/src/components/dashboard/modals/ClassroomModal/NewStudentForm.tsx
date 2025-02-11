import validator from 'validator';

import { Button, TextField } from 'src/components/ui';
import type { INewStudentCredentials } from 'src/interfaces';

import useInput from 'src/hooks/use-input';

const forenameValidator = (value: string) => {
  const trimmed = value.trim();
  return (
    !validator.isEmpty(trimmed) &&
    validator.isLength(trimmed, { min: 3, max: 25 })
  );
};

const surnameValidator = (value: string) => {
  const trimmed = value.trim();
  return (
    !validator.isEmpty(trimmed) &&
    validator.isLength(trimmed, { min: 3, max: 25 })
  );
};

const emailValidator = (value: string) => {
  const trimmed = value.trim();
  return !validator.isEmpty(trimmed) && validator.isEmail(trimmed);
};

type Props = {
  error: string | null;
  onSubmit: (data: INewStudentCredentials) => void;
};

const NewStudentForm: React.FC<Props> = ({ error, onSubmit }) => {
  const {
    value: enteredForename,
    hasErrors: enteredForenameHasErrors,
    inputChangeHandler: forenameChangedHandler,
    inputBlurHandler: forenameBlurHandler,
    inputResetHandler: forenameResetHandler,
  } = useInput(forenameValidator, '');

  const {
    value: enteredSurname,
    hasErrors: enteredSurnameHasErrors,
    inputChangeHandler: surnameChangedHandler,
    inputBlurHandler: surnameBlurHandler,
    inputResetHandler: surnameResetHandler,
  } = useInput(surnameValidator, '');

  const {
    value: enteredEmail,
    hasErrors: enteredEmailHasErrors,
    inputChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    inputResetHandler: emailResetHandler,
  } = useInput(emailValidator, '');

  const submitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const sanitizedForename = validator.escape(enteredForename);
    const sanitizedSurname = validator.escape(enteredSurname);
    const sanitizedEmail = validator.escape(enteredEmail);

    const data = {
      forename: sanitizedForename,
      surname: sanitizedSurname,
      email: sanitizedEmail,
    };
    // Reset form values
    forenameResetHandler();
    surnameResetHandler();
    emailResetHandler();
    // Submit form data
    onSubmit(data);
  };

  const formHasErrors =
    enteredForenameHasErrors ||
    enteredSurnameHasErrors ||
    enteredEmailHasErrors;

  return (
    <form sx={{ minWidth: '40%' }} onSubmit={submitHandler}>
      <div sx={{ py: 3 }}>
        <TextField
          sx={{ borderColor: enteredForenameHasErrors && 'warning' }}
          placeholder="Forename"
          value={enteredForename}
          onChange={(e) => forenameChangedHandler(e.currentTarget.value)}
          onBlur={forenameBlurHandler}
          label="Student’s Forename"
          type="text"
          required
          autoFocus
        />
      </div>
      <div sx={{ py: 3 }}>
        <TextField
          sx={{ borderColor: enteredSurnameHasErrors && 'warning' }}
          label="Student’s Surname"
          type="text"
          placeholder="Surname"
          value={enteredSurname}
          required
          onChange={(e) => surnameChangedHandler(e.currentTarget.value)}
          onBlur={surnameBlurHandler}
        />
      </div>
      <div sx={{ py: 3 }}>
        <TextField
          sx={{ borderColor: enteredEmailHasErrors && 'warning' }}
          label="Student’s E-mail"
          type="email"
          placeholder="student@mail.com"
          value={enteredEmail}
          required
          onChange={(e) => emailChangedHandler(e.currentTarget.value)}
          onBlur={emailBlurHandler}
        />
      </div>
      <div
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: '2rem',
          mb: '10rem',
        }}
      >
        <Button
          sx={{ width: '100%' }}
          type="submit"
          rounded={false}
          // @ts-ignore
          disabled={formHasErrors}
        >
          Send Invite
        </Button>
      </div>
      {error && (
        <p sx={{ variant: 'text.h4', color: 'error', textAlign: 'center' }}>
          {error}
        </p>
      )}
    </form>
  );
};

export default NewStudentForm;

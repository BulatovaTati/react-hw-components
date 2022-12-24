import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { addContact } from 'redux/operations';

import {
  ErrorMsg,
  FormInner,
  FormWrapper,
  Input,
  Label,
} from './ContactsForm.styled';
import { Button } from './ContactsForm.styled';
import { selectContacts } from 'redux/selectors';

const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const phoneRegExp =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const schema = yup.object().shape({
  name: yup.string().min(3).matches(nameRegExp, 'Name is not valid').required(),
  number: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required(),
});

const ContactsForm = ({ toggle }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, { resetForm }) => {
    if (contacts.find(contact => contact.name === values.name)) {
      return Notify.failure(`${values.name} is already in contacts`);
    }

    dispatch(addContact(values));
    resetForm();
    toggle('isOpenForm');
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormWrapper>
        <Form autoComplete="off">
          <FormInner>
            <Label htmlFor="name">
              Name
              <Input
                id="name"
                type="text"
                name="name"
                title="Name may contain only letters, apostrophe, dash and spaces.
                For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              />
              <ErrorMsg name="name" component="div" />
            </Label>

            <Label htmlFor="number">
              Number
              <Input
                id="number"
                type="tel"
                name="number"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              />
              <ErrorMsg name="number" component="div" />
            </Label>
          </FormInner>
          <Button type="submit">Add contact</Button>
          <Button onClick={() => toggle('isOpenForm')} type="button">
            Cancel
          </Button>
        </Form>
      </FormWrapper>
    </Formik>
  );
};

export default ContactsForm;

ContactsForm.propTypes = {
  toggle: PropTypes.func,
};

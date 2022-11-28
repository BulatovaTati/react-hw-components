import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  ErrorMsg,
  FormInner,
  FormWrapper,
  Input,
  Label,
} from './ContactsForm.styled';
import { Button } from './ContactsForm.styled';

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

const initialValues = {
  id: '',
  name: '',
  number: '',
};

const ContactsForm = ({ addContact, contacts, toggle }) => {
  const handleSubmit = (values, { resetForm }) => {
    const isInclude = contacts.some(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );

    if (isInclude) {
      Notify.failure(`${values.name} is already in contacts`);
      return;
    }

    values.id = nanoid(7);
    addContact(values);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
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
  onSubmit: PropTypes.func,
  contacts: PropTypes.array,
  toggle: PropTypes.func,
};

// export class ContactsForm extends Component {
//   state = {
//     id: '',
//     name: '',
//     number: '',
//   };

//   handleChange = e => {
//     const { name, value } = e.currentTarget;

//     this.setState({
//       [name]: value,
//       id: nanoid(7),
//     });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     const isInclude = this.props.contacts.some(
//       contact => contact.name.toLowerCase() === this.state.name.toLowerCase()
//     );

//     if (isInclude) {
//       Notify.failure(`${this.state.name} is already in contacts`);
//       return;
//     }

//     this.props.addContact(this.state);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({
//       id: '',
//       name: '',
//       number: '',
//     });
//   };

//   render() {
//     return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Name
//             <input
//               type="text"
//               name="name"
//               value={this.state.name}
//               onChange={this.handleChange}
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//             />
//           </label>
//           <label>
//             Number
//             <input
//               value={this.state.number}
//               onChange={this.handleChange}
//               type="tel"
//               name="number"
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//             />
//           </label>
//           <button type="submit">Add Contact</button>
//         </form>
//     );
//   }
// }

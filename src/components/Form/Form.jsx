import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/sliceContact';
import * as Yup from 'yup';

const phoneRegExp =
  /^[\]?3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/;

const mySchema = Yup.object().shape({
  nameUser: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  phone: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Required'),
});

const FormContact = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contants);

  const handlerSubmit = (values, actions) => {
    const { nameUser, phone } = values;

    const inArray = contacts.some(
      contact =>
        contact.name.toLowerCase() === nameUser.toLowerCase() &&
        contact.phone === phone
    );

    if (inArray) {
      alert(`Sory, but ${nameUser} with ${phone} is in a list`);
      actions.resetForm();
      return;
    }
    dispatch(addContact({ name: nameUser, phone }));
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{
          nameUser: '',
          phone: '',
        }}
        validationSchema={mySchema}
        onSubmit={handlerSubmit}
      >
        {({ errors, touched }) => (
          <Form className="w-60 flex flex-col gap-5">
            <Field
              name="nameUser"
              type="text"
              placeholder="Name"
              className="py-2 px-1 outline outline-offset-2 outline-1"
            />
            {errors.nameUser && touched.nameUser ? (
              <div>{errors.nameUser}</div>
            ) : null}
            <Field
              name="phone"
              type="number"
              placeholder="380 000 000 000"
              className="py-2 px-1 outline outline-offset-2 outline-1"
            />
            {errors.phone && touched.phone ? <div>{errors.phone}</div> : null}
            <button
              type="submit"
              className="py-2 px-2 border-solid border-2 border-indigo-600 hover:bg-indigo-100"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormContact;

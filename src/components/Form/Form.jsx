import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/sliceContact';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import * as formik from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import MyAlert from 'components/Alert/Alert';

const phoneRegExp =
  /^[\]?3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/;

const mySchema = yup.object().shape({
  nameUser: yup
    .string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  phone: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Required'),
});

const FormContact = () => {
  const { Formik } = formik;
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contants);

  const [show, setShow] = useState(false);

  const handlerSubmit = (values, actions) => {
    setShow(false);
    const { nameUser, phone } = values;

    const inArray = contacts.some(
      contact =>
        contact.name.toLowerCase() === nameUser.toLowerCase() &&
        contact.phone === phone
    );

    if (inArray) {
      setShow(true);
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
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group controlId="nameUser">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="nameUser"
                value={values.nameUser}
                onChange={handleChange}
                isValid={touched.nameUser && !errors.nameUser}
                aria-describedby="name"
              />
              <Form.Text id="name" muted>
                Please, write your name
              </Form.Text>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                isValid={touched.phone && !errors.phone}
                aria-describedby="phone"
              />
              <Form.Text id="name" muted>
                Please, write your number
              </Form.Text>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Button variant="outline-danger" type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
      {show && <MyAlert show={show} shangeShow={setShow} />}
    </>
  );
};

export default FormContact;

//   <Form className="w-60 flex flex-col gap-5">
//     <Field
//       name="nameUser"
//       type="text"
//       placeholder="Name"
//       className="py-2 px-1 outline outline-offset-2 outline-1"
//     />
//     {errors.nameUser && touched.nameUser ? (
//       <div>{errors.nameUser}</div>
//     ) : null}
//     <Field
//       name="phone"
//       type="number"
//       placeholder="380 000 000 000"
//       className="py-2 px-1 outline outline-offset-2 outline-1"
//     />
//     {errors.phone && touched.phone ? <div>{errors.phone}</div> : null}
//     <button
//       type="submit"
//       className="py-2 px-2 border-solid border-2 border-indigo-600 hover:bg-indigo-100"
//     >
//       Submit
//     </button>
//   </Form>
// )}

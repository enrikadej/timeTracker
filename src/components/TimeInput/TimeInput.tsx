import React = require('react');
import './TimeInput.css';
import { Formik, Form, Field } from 'formik';

interface MyFormValues {
  title: string,
}

export const TimeInput = () => {
  let count = 1;

  const initialValues: MyFormValues = {
    title: '',
  };

  const addingTime = (value: MyFormValues) => {
    console.log(value);

    const packTime = {
      id: count,
      title: value.title,
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        // eslint-disable-next-line no-console
        console.log({ values, actions });

        addingTime(values);
        actions.resetForm();
        count++;
      }}
    >
      <Form 
        className="newTime" 
        translate={undefined}
      >
          <div className="form-field">
            <label htmlFor="title">
              <Field
                id="title"
                name="title"
                placeholder="Enter tracker time"
                className="newTime__input"
              />
            </label>
          </div>
          <button
            type="submit"
            className="newTime__submit-button button"
          >
            ADD
          </button>
        </Form>
    </Formik>
  );
};

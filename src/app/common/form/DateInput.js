import React from 'react'
import { Form, Label } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateInput = ({
    input: { value, onChange, onBlur },
    width,
    placeholder,
    meta: { touched, error },
    ...rest
  }) => {
    return (
      <Form.Field error={touched && !!error}>
        <DatePicker
          {...rest}
          placeholderText={placeholder}
          selected={
            value
              ? Object.prototype.toString.call(value) !== '[object Date]'
                ? value.toDate()
                : value
              : null
          }
          onChange={onChange}
          onBlur={(e, val) => onBlur(val)}
          onChangeRaw={e => e.preventDefault()}
        />
        {touched && error && (
          <Label basic color='red'>
            {error}
          </Label>
        )}
      </Form.Field>
    );
  };

// OLD
// const DateInput = ({input, width, placeholder, meta: {touched, error}, ...rest}) => {
//     return (
//         // onBlur lets redux-forms know if we have clicked into or out of the field
//         // onChangeRaw prevents user from typing into the field, which throws an error in the console
//         <Form.Field error={touched && !!error}>
//             <DatePicker 
//                 {...rest}
//                 placeholderText={placeholder}
//                 selected={input.value ? new Date(input.value) : null}
//                 onChange={input.onChange}
//                 onBlur={input.onBlur}
//                 onChangeRaw={(e) => e.preventDefault()}
//             />
//             {touched && error &&<Label basic color='red'>{error}</Label>}
//         </Form.Field>
//     )
// }

export default DateInput;
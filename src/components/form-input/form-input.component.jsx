import { GroupContainer, FormInputElement, FormInputLabel } from './form-input.styles';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <GroupContainer>
      <FormInputElement { ...otherProps } />
      {label && (
        <FormInputLabel shrink={ !!otherProps.value.length }>
          { label }
        </FormInputLabel>
      )}
    </GroupContainer>
  );
};

export default FormInput;
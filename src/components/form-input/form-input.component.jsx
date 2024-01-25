import { GroupContainer, FormInputElement, FormInputLabel, FormInputLabelShrink } from './form-input.styles';

const FormInput = ({ label, ...otherProps }) => {
  const CustomLabel = otherProps.value.length ? FormInputLabelShrink : FormInputLabel;

  return (
    <GroupContainer>
      <FormInputElement { ...otherProps } />
      {label && (
        <CustomLabel>
          { label }
        </CustomLabel>
      )}
    </GroupContainer>
  );
};

export default FormInput;
import styled from 'styled-components';

import Button from '../button/button.component';

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
`;

export const SignInContainerTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ButtonContainer = styled(Button)`
  width: 100%;
  margin-top: 12px;
`;
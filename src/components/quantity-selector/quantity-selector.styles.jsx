import styled from 'styled-components';

import Button from '../button/button.component';

export const QuantitySelectorContainer = styled.div`
  display: flex;
`;

export const QuantityValue = styled.span`
  line-height: 40px;
`;

export const ArrowButton = styled(Button)`
  font-weight: 700;
  margin: 0 10px;
`;
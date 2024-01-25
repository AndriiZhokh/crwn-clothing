import styled, { css } from 'styled-components';

const title = css`
  font-size: 28px;
  margin: 24px 0;
`;
export const CategoryTitle = styled.div`
  ${title}

  &:hover {
    color: #656565;
    cursor: pointer;
  }
`;

export const CategoryTitleCenter = styled.div`
  ${title}
  text-align: center;
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 50px;
`;
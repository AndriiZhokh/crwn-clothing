import styled from 'styled-components';
import CheckoutTotal from './components/checkout-total/checkout-total.component';

export const CheckoutContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

export const CheckoutTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  tr {
    border-bottom: 1px solid black;
    margin: 10px;

    td, th {
      padding: 15px 0;
    }

    th:first-child {
      text-align: left;
    }

    td {
      text-align: center;

      &:first-child {
        width: 1%;
        padding-right: 15px;
      }

      &:nth-child(2) {
        width: 1%;
        white-space: nowrap;
      }

      &:nth-child(3) {
        width: 30%;
      }

      &>div {
        width: fit-content;
        margin: auto;
      }
    }

    th, td {
      &:nth-child(2) {
        text-align: left;
      }
    }
  }
`;

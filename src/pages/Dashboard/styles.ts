import styled from 'styled-components';

interface CardProps {
  total?: boolean;
}

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
`;

export const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  margin-top: -150px;

  @media screen and (max-width: 815px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
  }
`;

export const Card = styled.div`
  background: ${({ total }: CardProps): string => (total ? '#FF872C' : '#fff')};
  padding: 22px 32px;
  border-radius: 5px;
  color: ${({ total }: CardProps): string => (total ? '#fff' : '#363F5F')};
  transition: transform 0.2s;

  &:hover {
    transform: translateY(10px);
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 16px;
    }
  }

  h1 {
    margin-top: 14px;
    font-size: 36px;
    font-weight: normal;
    line-height: 54px;
  }
`;

export const TableContainer = styled.section`
  margin-top: 64px;

  table {
    width: 100%;
    border-spacing: 0 8px;

    @media screen and (max-width: 615px) {
      thead {
        display: none;
      }
    }

    th {
      color: #969cb3;
      font-weight: normal;
      padding: 20px 32px;
      text-align: left;
      font-size: 16px;
      line-height: 24px;
    }

    tbody {
      @media screen and (max-width: 615px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px;

        tr {
          display: flex;
          flex-direction: column;

          td {
            position: relative;
            padding: 20px 15px;

            &:first-of-type {
              border-radius: 8px 8px 0 0;
              padding-top: 30px;
            }

            &:last-of-type {
              border-radius: 0 0 8px 8px;
            }

            &::before {
              position: absolute;
              color: #5636d3;
              top: 4px;
              font-size: 12px;
            }

            &:nth-of-type(1):before {
              content: 'Título';
              font-weight: bold;
              top: 15px;
            }

            &:nth-of-type(2):before {
              content: 'Preço';
              font-weight: bold;
            }

            &:nth-of-type(3):before {
              content: 'Categoria';
              font-weight: bold;
            }

            &:nth-of-type(4):before {
              content: 'Data';
              font-weight: bold;
            }
          }
        }
      }
    }

    tbody tr {
      transition: transform 0.2s;

      &:hover {
        transform: translateX(10px);
      }
    }

    td {
      padding: 20px 32px;
      border: 0;
      background: #fff;
      font-size: 16px;
      font-weight: normal;
      color: #969cb3;

      &.title {
        color: #363f5f;
      }

      &.income {
        color: #12a454;
      }

      &.outcome {
        color: #e83f5b;
      }
    }

    td:first-child {
      border-radius: 8px 0 0 8px;
    }

    td:last-child {
      border-radius: 0 8px 8px 0;
    }
  }
`;

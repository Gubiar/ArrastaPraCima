import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);

`;
export const Content = styled.div`

  max-width: 80%;
  padding-top: -7rem;
  margin: 0 auto;

  padding: 2rem 1rem 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button{
    font-size: 1.2rem;
    color: #000;
    background: #fff;
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 4rem;
    transition: filter 0.2s;
    position: relative;
    top: -2rem;
    font-weight: 500;
    
    &:hover{
      filter: brightness(0.9);
    }
  }
`;
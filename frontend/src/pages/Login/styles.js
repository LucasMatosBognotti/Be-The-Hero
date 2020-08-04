import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`; 

export const Content = styled.div`
  width: 100%;
  max-width: 350px;
  margin-right: 30px;

  form {
    margin-top: 100px;
  
    h1 {
      font-size: 32px;
      margin-bottom: 32px;
    }

    button {
      width: 100%;
      height: 60px;
      background: #E02041;
      border: 0;
      border-radius: 8px;
      color: #FFF;
      font-weight: bold;
      margin-top: 16px;
      display: inline-block;
      text-align: center;
      text-decoration: none;
      font-size: 18px;
      line-height: 60px;
      transition: filter 0.2s;

      :hover {
        filter: brightness(80%)
      }
    }

    a {
      display: flex;
      align-items: center;
      margin-top: 40px;
      color: #41414D;
      font-size: 18px;
      text-decoration: none;
      font-weight: 500;
      transition: opacity 0.2s;
    
      svg {
        margin-right: 8px;
      }

      :hover {
        opacity: 0.8;
      }
    }
  }
`;
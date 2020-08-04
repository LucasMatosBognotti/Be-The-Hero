import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

  h1 {
    margin-top: 80px;
    margin-bottom: 24px;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
    list-style: none;
  
    li {
      background: #FFF;
      padding: 24px;
      border-radius: 8px;
      position: relative;

      strong {
        display: block;
        margin-bottom: 16px;
        color: #41414D;
      }

      p + strong {
        margin-top: 32px;
      }

      p {
        color: #737380;
        line-height: 21px;
        font-size: 16px;
      }

    }

    button {
      position: absolute;
      right: 24px;
      top: 24px;
      border: 0;
      background: transparent;

      :hover {
        opacity: 0.8;
      }
    }
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 64px;
  }

  span {
    font-weight: 500;
    font-size: 20px;
    margin-left: 24px;
  }

  a {
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
      filter: brightness(90%)
    }

    width: 260px;
    margin-left: auto;
    margin-top: 0;

    svg {
      margin-right: 8px;
    }

    :hover {
      opacity: 0.8;
    }
  }

  button {
    width: 60px;
    height: 60px;
    border-radius: 4px;
    border: 1px solid #DCDCE6;
    background: transparent;
    margin-left: 16px;
    transition: border-color 0.2s;

    :hover {
      border-color: #999;
    }
  }

`;

import styled from 'styled-components';

export const App = styled.div`
  text-align: center;
  height: 100vh;

  .sp_v_5 {
    display: block;
    height: 5px;
  }

  .sp_v_10 {
    display: block;
    height: 10px;
  }

  .sp_v_15 {
    display: block;
    height: 15px;
  }

  .sp_v_20 {
    display: block;
    height: 20px;
  }

  .in-flex {
    display: flex;
    flex-direction: column;
  }

  section {
    height: 100%;

    header {
      display: flex;
      justify-content: center;
      align-items: center;

      h2 {
        margin: 0;
        padding: 0;
        color: whitesmoke;
      }
    }

    main {
      display: flex;
      justify-content: center;
      align-items: center;

      .ant-card {
        width: 480px;
        height: 480px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
      }
    }
  }

  @media screen and (max-width: 480px) {
    section > main > .ant-card {
      width: 100%;
      height: 100%;
      box-shadow: none;
    }
  }

  @media screen and (max-height: 480px) {
    .sp_v_10 {
      display: none;
      height: 10px;
    }

    .in-flex {
      flex-direction: row;
      width: 100%;
      justify-content: space-evenly;
    }

    section > main > .ant-card {
      width: 100%;
      height: 100%;
      box-shadow: none;
    }

    section > main > .ant-card > .ant-card-body {
      width: 100%;
    }
  }
`;

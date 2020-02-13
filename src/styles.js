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

  section {
    height: 100%;

    header {
      color: whitesmoke;
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
`;

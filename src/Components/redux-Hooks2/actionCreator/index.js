export const depositMoney = (amount) => {
    return (dispatch) => {
      dispatch({
        type: "deposit",
        payload: amount
      });
    };
  };
  export default depositMoney;
  
  export const drawMoney = (amount) => {
    return (dispatch) => {
      dispatch({
        type: "withdraw",
        payload: amount
      });
    };
  };
  
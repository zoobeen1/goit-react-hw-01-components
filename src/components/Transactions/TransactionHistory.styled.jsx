import styled from 'styled-components';

export const StyledTable = styled.table`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 620px;
  height: 100%;
  background-color: #fafafa;
  margin-left: auto;
  margin-right: auto;
  border-radius: 4px;
  box-shadow: #636060 1px 1px 3px;
  margin-bottom: 50px;
`;
export const StyledThead = styled.thead`
  font-size: 1.2em;
  font-weight: bold;
  color: #ddd;
  width: 100%;
  text-align: center;
  background-color: #f5f5f5;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  background-color: rgb(67, 141, 238);
`;
export const StyledHeadTr = styled.tr`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 620px;
`;
export const StyledTr = styled.tr`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 620px;
  background-color: ${props => (props.index % 2 === 0 ? '#c8e6c9' : '#ffffff')};
`;
export const StyledTh = styled.th`
  width: 100%;
  padding: 15px;
  text-align-last: center;
  + th {
    border-left: 1px solid #ccc;
  }
`;
export const StyledTd = styled.td`
  width: 100%;
  padding: 15px;
  text-align-last: center;
  + td {
    border-left: 1px solid #ccc;
  }
`;
/* background-color: ${index % 2 === 0 ? '#c8e6c9' : '#ffffff'}; */
/* background-color: ${index % 2 === 0 ? '#c8e6c9' : '#ffffff'}; */

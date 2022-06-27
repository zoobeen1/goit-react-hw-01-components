import styled from 'styled-components';
export const StyledProfile = styled.div`
  width: 320px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: #636060 1px 1px 3px;
`;
export const StyledDescription = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
`;
export const StyledAvatar = styled.img`
  width: 200px;
  border-radius: 50%;
`;
export const StyledName = styled.p`
  font-size: 1.5em;
  font-weight: bold;
  margin-top: 10px;
`;
export const StyledTag = styled.p`
  font-size: 1em;
  color: #554f4f;
  margin-top: 10px;
`;
export const StyledLocation = styled.p`
  color: #554f4f;
  font-size: 1em;
  margin-top: 10px;
`;
export const StyledStats = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* width: 100%; */
  height: 50px;
  background-color: #f5f5f5;
  border-top: 1px solid #e0e0e0;
`;
export const StyledStatsItem = styled.li`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #e7e7e7;
  + li {
    border-left: 1px solid #e0e0e0;
  }
`;
export const StyledLabel = styled.span`
  font-size: 0.8em;
  font-weight: 700;
  color: #857b7b;
  margin-bottom: 5px;
`;
export const StyledQuantity = styled.span`
  font-size: 1em;
  font-weight: 700;
  color: #554f4f;
`;

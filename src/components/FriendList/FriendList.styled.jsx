import styled from 'styled-components';

export const StyledFriendList = styled.ul`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 310px;
  margin-left: auto;
  margin-right: auto;
`;
export const StyledItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: space-between; */
  width: 100%;
  height: 100%;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  box-shadow: #636060 1px 1px 3px;
  margin-bottom: 10px;
  padding-left: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
`;
export const StyledStatus = styled.span`
  border-radius: 50%;
  width: 20px;
  height: 20px;
`;
export const StyledAvatar = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 10px;
  margin-right: 10px;
  margin-left: 10px;
`;
export const StyledName = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  color: #000;
  margin-left: 20px;
`;

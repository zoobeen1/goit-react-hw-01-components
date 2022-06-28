import styled from 'styled-components';

export const FriendList = styled.ul`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${p => p.theme.width.normal};
  margin-left: auto;
  margin-right: auto;
`;
export const Item = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${p => p.theme.colors.background};
  border: ${p => p.theme.borders.light};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.normal};
  margin-bottom: 10px;
  padding-left: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
`;
export const Status = styled.span`
  border-radius: ${p => p.theme.radii.round};
  width: 20px;
  height: 20px;
  background-color: ${p => (p.isOnline ? 'red' : 'green')};
`;
export const Avatar = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 10px;
  margin-right: 10px;
  margin-left: 10px;
`;
export const Name = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${p => p.theme.colors.text};
  margin-left: 20px;
`;

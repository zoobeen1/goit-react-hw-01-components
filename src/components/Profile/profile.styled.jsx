import styled from 'styled-components';

export const Profile = styled.div`
  width: ${p => p.theme.width.normal};
  border: ${p => p.theme.borders.light};
  border-radius: ${p => p.theme.radii.normal};
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: ${p => p.theme.shadows.normal};
`;
export const Description = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${p => p.theme.colors.background};
`;
export const Avatar = styled.img`
  width: 200px;
  border-radius: ${p => p.theme.radii.round};
`;
export const Name = styled.p`
  font-size: 1.5em;
  font-weight: bold;
  margin-top: 10px;
  color: ${p => p.theme.colors.text};
`;
export const Tag = styled.p`
  font-size: 1em;
  color: ${p => p.theme.colors.grey};
  margin-top: 10px;
  font-weight: 500;
`;
export const Location = styled.p`
  color: ${p => p.theme.colors.grey};
  font-size: 1em;
  font-weight: 500;
  margin-top: 10px;
`;
export const Stats = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  background-color: ${p => p.theme.colors.background};
  border-top: ${p => p.theme.borders.normal};
`;
export const StatsItem = styled.li`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${p => p.theme.colors.background_grey};
  + * {
    border-left: ${p => p.theme.borders.normal};
  }
`;
export const StatsLabel = styled.span`
  font-size: 0.8em;
  font-weight: 700;
  color: ${p => p.theme.colors.grey};
  margin-bottom: 5px;
`;
export const StatsQuantity = styled.span`
  font-size: 1em;
  font-weight: 700;
  color: ${p => p.theme.colors.text};
`;

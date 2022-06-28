import styled from 'styled-components';
import { Box } from '../common/Box';
import { Container } from '../common/container';

export const Profile = p => {
  return <Container>{p.children}</Container>;
};
export const Description = p => {
  return (
    <Box
      pt={3}
      pb={3}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="100%"
      bg="background"
    >
      {p.children}
    </Box>
  );
};
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

import styled from 'styled-components';

export const Statistics = styled.section`
  margin-top: 50px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${p => p.theme.width.normal};
  height: 100%;
  background-color: ${p => p.theme.colors.background};
  border: ${p => p.theme.borders.light};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.normal};
  margin-left: auto;
  margin-right: auto;
`;
export const Title = styled.h2`
  font-size: 30px;
  font-weight: 700;
  color: ${p => p.theme.colors.text};
  margin-bottom: 20px;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`;
export const ListItem = styled.li`
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${p => p.background};
`;
export const Label = styled.span`
  font-size: 0.9em;
  font-weight: 400;
  color: ${p => p.theme.colors.light_grey};
  margin-bottom: 8px;
`;
export const Percentage = styled.span`
  font-size: 1.3em;
  font-weight: 700;
  color: ${p => p.theme.colors.light_grey};
  margin-bottom: 5px;
`;

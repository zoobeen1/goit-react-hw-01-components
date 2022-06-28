import styled from 'styled-components';

export const Table = styled.table`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  width: ${p => p.theme.width.large};
  margin-left: auto;
  margin-right: auto;
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.normal};
  margin-bottom: 50px;
`;
export const Thead = styled.thead`
  font-size: 1.2em;
  font-weight: bold;
  color: ${p => p.theme.colors.light_grey};
  border-top-left-radius: ${p => p.theme.radii.normal};
  border-top-right-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.table_color_head};
`;
export const HeadTr = styled.tr`
  display: flex;
`;
export const Th = styled.th`
  width: 100%;
  padding: 15px;
  + * {
    border-left: ${p => p.theme.borders.normal};
  }
`;
export const Tr = styled.tr`
  display: flex;
  background-color: ${p =>
    p.index % 2 === 0
      ? p.theme.colors.background
      : p.theme.colors.table_color_body};
`;

export const Td = styled.td`
  width: 100%;
  padding: 15px;
  text-align: center;
  + * {
    border-left: ${p => p.theme.borders.light};
  }
`;

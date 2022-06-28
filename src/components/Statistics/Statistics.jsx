import PropTypes from 'prop-types';
import {
  Statistics,
  Title,
  List,
  ListItem,
  Label,
  Percentage,
} from './statistics.styled';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function StatisticsRender({ title, stats }) {
  return (
    <Statistics>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map(item => (
          <ListItem key={item.id} background={getRandomHexColor()}>
            <Label>{item.label}</Label>
            <Percentage>{item.percentage + '%'}</Percentage>
          </ListItem>
        ))}
      </List>
    </Statistics>
  );
}

StatisticsRender.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default StatisticsRender;

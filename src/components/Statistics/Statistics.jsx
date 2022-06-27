import PropTypes from 'prop-types';
import {
  StyledStatistics,
  StyledTitle,
  StyledStatlist,
  StyledStatitem,
  StyledLabel,
  StyledPercentage,
} from './statistics.styled';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function Statistics({ title, stats }) {
  return (
    <StyledStatistics>
      {title && <StyledTitle>{title}</StyledTitle>}
      <StyledStatlist>
        {stats.map(item => (
          <StyledStatitem
            key={item.id}
            style={{
              backgroundColor: getRandomHexColor(),
            }}
          >
            <StyledLabel>{item.label}</StyledLabel>
            <StyledPercentage>{item.percentage + '%'}</StyledPercentage>
          </StyledStatitem>
        ))}
      </StyledStatlist>
    </StyledStatistics>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default Statistics;

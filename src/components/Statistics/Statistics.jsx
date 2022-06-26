import PropTypes from 'prop-types';
import css from './statistics.module.css';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statlist}>
        {stats.map(item => (
          <li
            key={item.id}
            className={css.statitem}
            style={{
              backgroundColor: getRandomHexColor(),
            }}
          >
            <span className={css.label}>{item.label}</span>
            <span className={css.percentage}>{item.percentage + '%'}</span>
          </li>
        ))}
      </ul>
    </section>
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

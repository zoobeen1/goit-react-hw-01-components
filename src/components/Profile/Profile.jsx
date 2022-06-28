import PropTypes from 'prop-types';
import {
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  StatsItem,
  StatsLabel,
  StatsQuantity,
} from './profile.styled';
import { Container } from '../common';

function ProfileRender({ username, tag, location, avatar, stats }) {
  return (
    <Container>
      <Description>
        <Avatar src={avatar} alt={tag} />
        <Name>{username}</Name>
        <Tag>{'@' + tag}</Tag>
        <Location>{location}</Location>
      </Description>
      <Stats>
        <StatsItem>
          <StatsLabel>Followers </StatsLabel>
          <StatsQuantity>{stats.followers}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Views </StatsLabel>
          <StatsQuantity>{stats.views}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Likes </StatsLabel>
          <StatsQuantity>{stats.likes}</StatsQuantity>
        </StatsItem>
      </Stats>
    </Container>
  );
}

ProfileRender.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default ProfileRender;

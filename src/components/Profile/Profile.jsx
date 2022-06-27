import PropTypes from 'prop-types';
// import css from './profile.module.css';
import {
  StyledProfile,
  StyledDescription,
  StyledAvatar,
  StyledName,
  StyledTag,
  StyledLocation,
  StyledStats,
  StyledStatsItem,
  StyledLabel,
  StyledQuantity,
} from './profile.styled';

function Profile({ username, tag, location, avatar, stats }) {
  return (
    <StyledProfile>
      <StyledDescription>
        <StyledAvatar src={avatar} alt={tag} />
        <StyledName>{username}</StyledName>
        <StyledTag>{'@' + tag}</StyledTag>
        <StyledLocation>{location}</StyledLocation>
      </StyledDescription>
      <StyledStats>
        <StyledStatsItem>
          <StyledLabel>Followers </StyledLabel>
          <StyledQuantity>{stats.followers}</StyledQuantity>
        </StyledStatsItem>
        <StyledStatsItem>
          <StyledLabel>Views </StyledLabel>
          <StyledQuantity>{stats.views}</StyledQuantity>
        </StyledStatsItem>
        <StyledStatsItem>
          <StyledLabel>Likes </StyledLabel>
          <StyledQuantity>{stats.likes}</StyledQuantity>
        </StyledStatsItem>
      </StyledStats>
    </StyledProfile>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Profile;

import React from 'react';
import { View } from 'react-native';
import HomeIcon from '../assets/svg/home.svg';
import SettingIcon from '../assets/svg/setting.svg';
import ProfileIcon from '../assets/svg/profile.svg';
import SearchIcon from '../assets/svg/search.svg';



const BottomTabIcon = ({ route, isFocused }) => {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const renderIcon = (route, isFocused) => {
    let height= 34;
    let width= 34;

    switch (route) {
      case 'Home':
        return (
          <HomeIcon
            width={width}
            height={height}
            fill={isFocused ? '#0067FF' : '#ffffff'}
          />
        );
      case 'Search':
        return (
          <SearchIcon
            width={width}
            height={height}
            fill={isFocused ? '#0067FF' : '#ffffff'}
          />
        );
      case 'Setting':
        return (
          <SettingIcon
            width={width}
            height={height}
            fill={isFocused ? '#0067FF' : '#ffffff'}
          />
        );
      case 'Profile':
        return (
          <ProfileIcon
            width={width}
            height={height}
            fill={isFocused ? '#0067FF' : '#ffffff'}
          />
        );
      default:
        break;
    }
  };

  return <View>{renderIcon(route, isFocused)}</View>;
};

export default BottomTabIcon;

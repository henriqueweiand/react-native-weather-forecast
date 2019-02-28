import styled from 'styled-components/native';
import { colors } from '~/styles';

export const TouchableOpacity = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: 15;
  padding-vertical: 8;
`;

export const BoxTemperature = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Temperature = styled.Text`
  color: ${colors.black};
  font-size: 15;
  font-weight: bold;
  padding-left: 15;
  text-align: right;
`;

export const Day = styled.Text`
  color: ${colors.black};
  flex: 1;
  font-size: 15;
  font-weight: bold;
  text-align: left;
`;

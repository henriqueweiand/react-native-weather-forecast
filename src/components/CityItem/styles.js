import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const TouchableOpacity = styled.TouchableOpacity`
  align-items: center;
  border-bottom-color: ${colors.lighter};
  border-bottom-width: 1;
  flex-direction: row;
  justify-content: space-between;
  margin-horizontal: ${metrics.basePadding};
  padding-bottom: 5;
`;

export const Temperature = styled.Text`
  color: ${colors.black};
  font-size: 26;
  font-weight: bold;
`;

export const Title = styled.Text`
  color: ${colors.black};
  font-size: 15;
  font-weight: bold;
`;

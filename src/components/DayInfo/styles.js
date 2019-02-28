import styled from 'styled-components/native';
import { colors } from '~/styles';

export const TouchableOpacity = styled.TouchableOpacity`
  align-items: center;
  flex-direction: column;
`;

export const City = styled.Text`
  color: ${colors.black};
  font-size: 22;
`;

export const Temperature = styled.Text`
  color: ${colors.black};
  font-size: 62;
`;

export const Time = styled.Text`
  color: ${colors.black};
  font-size: 16;
`;

export const Day = styled.Text`
  color: ${colors.black};
  font-size: 16;
`;

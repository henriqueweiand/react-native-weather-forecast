import styled from 'styled-components/native';
import { colors } from '~/styles';

export const Container = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 15px;
  height: 120;
`;

export const Time = styled.Text`
  font-size: 15;
  color: ${colors.black};
  font-weight: bold;
  text-align: center;
`;

export const Temperature = styled.Text`
  font-size: 15;
  color: ${colors.black};
  font-weight: bold;
  text-align: center;
`;

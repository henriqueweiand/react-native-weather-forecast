import { colors, metrics } from '~/styles';
import styled from 'styled-components/native';

export const Form = styled.View`
  margin-top: ${metrics.basePadding};
  margin-horizontal: ${metrics.basePadding};
  padding-bottom: ${metrics.basePadding};
`;

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

export const SearchInput = styled.TextInput`
  background-color: ${colors.secundary};
  border-radius: ${metrics.baseRadius};
  padding-horizontal: ${metrics.basePadding};
  height: 42;
  color: ${colors.white};
`;

export const TextLabel = styled.Text`
  flex: 1;
`;

export const LabelHelp = styled.View`
  align-items: center;
  background-color: ${colors.lighter};
  border-radius: ${metrics.baseRadius};
  flex-direction: row;
  margin-bottom: ${metrics.baseMargin};
  margin-horizontal: ${metrics.basePadding};
  padding: 5px;
`;

export const Loading = styled.ActivityIndicator`
  margin-top: ${metrics.basePadding};
`;

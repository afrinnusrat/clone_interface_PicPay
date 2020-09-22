import styled from 'styled-components/native';

export const Container = styled.View``;

export const Action = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.6);
  width: 400px;
  height: 45px;
  border-radius: 25px;
  margin: 5px 5px;
`;

export const ActionsContainer = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
    paddingLeft: 16,
  },
}))`
  background: #1e222b;
  height: 130px;
`;

export const Header = styled.View`
  margin: 15px 10px;
  flex-direction: row;
`;

export const Title1 = styled.Text`
  color: #fff;
  font-size: 14px;
  text-decoration: underline;
`;

export const Title2 = styled.Text`
  color: #fff;
  font-size: 14px;
  margin-left: 20px;
`;

export const Option = styled.TouchableOpacity`
  width: 80px;
  margin-right: 16px;
  align-items: center;
`;

export const Img = styled.Image``;

export const Label = styled.Text`
  color: #fff;
  font-weight: bold;
  margin-top: 8px;
  font-size: 14px;
  align-items: center;
`;

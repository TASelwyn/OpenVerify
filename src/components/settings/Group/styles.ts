/*
   Copyright 2021 Queen’s Printer for Ontario

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
import styled from 'styled-components/native';

export const Title = styled.Text`
  font-family: ${({theme}) => theme.typography.fonts.ralewayBold};
  letter-spacing: ${({theme}) => theme.typography.letterSpacing.title}px;
  color: ${({theme}) => theme.colors.textColor};
  font-size: ${({theme}) => theme.typography.fontSizes.regular}px;
  padding-top: ${({theme}) => theme.variables.spacing.xlg - 2}px;
  padding-horizontal: ${({theme}) => theme.variables.spacing.lg}px;
  padding-bottom: ${({theme}) => theme.variables.spacing.sm}px;
`;

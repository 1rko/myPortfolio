import styled from "styled-components";

type FlexContainerPropsType = {
    flexDirection?: string,
    justifyContent?: 'center' | 'space-between' | 'space-around' | 'end' | string,
    alignItems?: string
    wrap?: string
    gap?: string
}

export const FlexContainer = styled.div<FlexContainerPropsType>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || 'row'};
  justify-content: ${(props) => props.justifyContent || 'center'};
  align-items: ${(props) => props.alignItems || 'center'};
  flex-wrap: ${(props) => props.wrap || 'nowrap'};
  gap: ${(props) => props.gap || '0'};;
  height: 100%;
`
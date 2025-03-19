import styled from "styled-components";

type FlexContentContainerPropsType = {
    flexDirection?: string,
    justifyContent?: 'start'| 'center' | 'space-between' | 'space-around' | 'end' ,
    alignItems?: string
    wrap?: string
    gap?: string
    margin?: string
}

export const FlexContentContainer = styled.div<FlexContentContainerPropsType>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || 'row'};
  justify-content: ${(props) => props.justifyContent || 'center'};
  align-items: ${(props) => props.alignItems || 'center'};
  flex-wrap: ${(props) => props.wrap || 'nowrap'};
  gap: ${(props) => props.gap || '0'};;
  height: 100%;
  margin: ${(props) => props.margin || '0'};
`

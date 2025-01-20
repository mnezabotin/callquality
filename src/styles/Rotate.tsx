import styled from 'styled-components'

type Props = {
  rotated?: boolean
  transition?: string
}

const StyledWrapper = styled.div<Props>`
  transition: transform 150ms;
  transform: rotate(0deg);
  
  &.rotated {
    transform: rotate(180deg);
  }
`

export const Rotate = ({
  rotated,
  children,
  transition
}: Props & { children: JSX.Element }): JSX.Element => (
  <StyledWrapper className={rotated ? 'rotated' : ''} transition={transition}>
    {children}
  </StyledWrapper>
)

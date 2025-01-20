import { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'

type PropsStyled = {
  o?: boolean
  p?: string
  h: string
}

const StyledWrapper = styled.div<PropsStyled>`
  max-height: ${(props) => (props.o ? props.h : (props.p || '0'))};
  transition: max-height 150ms ease-in-out;
  overflow: hidden;
`

type Props = {
  opened?: boolean
  preview?: string
}

export const Accordion = ({
  opened,
  preview,
  children,
}: Props & { children: JSX.Element | JSX.Element[] }): JSX.Element => {
  const [height, setHeight] = useState(10000)
  const observedDiv = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!observedDiv.current) {
      return;
    }

    const resizeObserver = new ResizeObserver(() => {
      if(observedDiv?.current?.offsetHeight != height) {
        setHeight(observedDiv.current?.offsetHeight || 10000)
      }
    });
    
    resizeObserver.observe(observedDiv.current);

    return function cleanup() {
      resizeObserver.disconnect()
    }
  }, [observedDiv.current])

  return (
    <StyledWrapper
      o={opened}
      p={preview}
      h={height ? `${height}px` : '999rem'}
    >
      <div ref={observedDiv}>
        {children}
      </div>
    </StyledWrapper>
  )
}

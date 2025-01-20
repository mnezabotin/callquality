import logoSvg from '@/assets/logo.svg'
import { Flex } from '@/styles'

export const Logo = (): JSX.Element => (
  <Flex
    p='8px'
    gap='8px'
    justifyContent='center'
    alignItems='center'
    w='100%'
    h='96px'
    overflow='hidden'
  >
    <img
      src={logoSvg}
      alt='logo'
      height='56px'
    />
  </Flex>
)

import { mode } from '@chakra-ui/theme-tools'

export const ButtonStyles = {
  // style object for base or default style
  baseStyle: {
    borderRadius: 'lg',
    fontWeight: 'normal',
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    main: (props) => ({
        bg: 'secondary',
        color: 'white',
        _hover: {
            bg: mode('secondaryDarken', 'secondaryWhiten')(props),
            boxShadow: 'md',
        },
        _disabled:{
          color: 'black'
        }
    }),
    outlined: (props) => ({
        bg: 'transparent',
        color: 'secondary',
        border: '2px',
        borderColor: 'secondary',
        _hover: {
            boxShadow: 'md',
            borderColor: mode('secondaryDarken', 'secondaryWhiten')(props),
            color: mode('secondaryDarken', 'secondaryWhiten')(props)
        }
    }),
    danger: (props) => ({
        bg: 'danger',
        color: 'white',
        _hover: {
            bg: mode('dangerDarken', 'dangerWhiten')(props),
            boxShadow: 'md',
        }
    })
  },
  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {},
}
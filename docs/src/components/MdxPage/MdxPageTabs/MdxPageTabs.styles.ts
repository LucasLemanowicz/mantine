import { createUseStyles } from 'react-jss';
import { theming } from '@mantine/core';

const BREAKPOINT = 1080;
const TAB_HEIGHT = 46;
const TABLE_OF_CONTENTS_OFFSET = 260;

export default createUseStyles(
  (theme) => ({
    tabs: {
      marginTop: -TAB_HEIGHT,
    },

    tabsList: {
      paddingRight: 378, // I do not know how this value is calculated
      maxWidth: 800,
      marginLeft: 'auto !important',
      marginRight: 'auto !important',
      borderBottom: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
      }`,

      [`@media (max-width: ${BREAKPOINT}px)`]: {
        maxWidth: '100%',
        paddingRight: 0,
      },
    },

    tab: {
      fontSize: 16,
      fontWeight: 500,
      height: TAB_HEIGHT,
      paddingLeft: theme.spacing.lg,
      paddingRight: theme.spacing.lg,
      marginBottom: -1,

      '&:first-of-type': {
        marginLeft: theme.spacing.xl * 2,

        [`@media (max-width: ${BREAKPOINT}px)`]: {
          marginLeft: theme.spacing.xl,
        },
      },
    },

    tabContent: {
      marginTop: theme.spacing.xl,
      paddingLeft: theme.spacing.xl * 2,
      paddingRight: theme.spacing.xl * 2,

      [`@media (max-width: ${BREAKPOINT}px)`]: {
        paddingLeft: theme.spacing.xl,
        paddingRight: theme.spacing.xl,
      },
    },

    main: {
      width: `calc(100% - ${TABLE_OF_CONTENTS_OFFSET}px)`,
      maxWidth: 820,
      margin: 'auto',

      [`@media (max-width: ${BREAKPOINT}px)`]: {
        width: '100%',
        paddingRight: 0,
      },
    },

    tableOfContents: {
      flex: `0 0 ${TABLE_OF_CONTENTS_OFFSET}px`,

      [`@media (max-width: ${BREAKPOINT}px)`]: {
        display: 'none',
      },
    },
  }),
  { theming }
);
export function TableRow(theme: any) {
  return {
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: theme.palette.grey[50016],
            '&:hover': {
              backgroundColor: theme.palette.grey[5008],
            },
          },
        },
      },
    },
  }
}

export function TableCell(theme: any) {
  return {
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: 'none',
        },
        head: {
          color: theme.palette.grey[600],
          backgroundColor: theme.palette.grey[200],
          '&:first-of-type': {
            paddingLeft: theme.spacing(2),
            borderTopLeftRadius: theme.shape.borderRadius,
            borderBottomLeftRadius: theme.shape.borderRadius,
            boxShadow: 'inset 8px 0 0 #fff',
          },
          '&:last-of-type': {
            paddingRight: theme.spacing(2),
            borderTopRightRadius: theme.shape.borderRadius,
            borderBottomRightRadius: theme.shape.borderRadius,
            boxShadow: 'inset -8px 0 0 #fff',
          },
        },
        stickyHeader: {
          backgroundColor: '#fff',
          backgroundImage: 'linear-gradient(to bottom, #F4F6F8 0%, #F4F6F8 100%)',
        },
        body: {
          '&:first-of-type': {
            paddingLeft: theme.spacing(2),
          },
          '&:last-of-type': {
            paddingRight: theme.spacing(2),
          },
        },
      },
    },
  }
}

export function TablePagination(theme: any) {
  return {
    MuiTablePagination: {
      styleOverrides: {
        root: {
          borderTop: 'solid 1px rgba(145, 158, 171, 0.24)',
        },
        toolbar: {
          height: 64,
        },
        select: {
          '&:focus': {
            borderRadius: theme.shape.borderRadius,
          },
        },
        selectIcon: {
          width: 20,
          height: 20,
          marginTop: 2,
        },
      },
    },
  }
}

import { Box, Container } from '@mui/material';

export const Layout = ( { children } ) => {
	return (
		<Container>
			<Box sx={{
				display: 'grid',
				gridTemplateColumns: '1fr 3fr',
				gridTemplateRows: '1fr',
				width: '100%'
			}}>
				{children}
			</Box>
		</Container>

	)
}
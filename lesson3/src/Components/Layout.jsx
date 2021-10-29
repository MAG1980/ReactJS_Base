import { Paper, Box, Container } from '@mui/material';

export const Layout = ( { children } ) => {
	return (
		<Box>
			<Paper elevation={1}/>
			<Container>
				<Box sx={{
					display: 'grid',
					gridTemplateColumns: '1fr',
					gridTemplateRows: '15% 1fr',
					width: '100%',
					alignItems: 'center',
					p: 5
				}}>
					{children}
				</Box>
			</Container>
			<Paper/>
		</Box>
	)
}
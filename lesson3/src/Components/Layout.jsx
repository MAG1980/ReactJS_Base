import { Paper, Box, Container } from '@mui/material';
import { Header } from './Header'

export const Layout = ( { children } ) => {
	return (
		<Box>
			<Paper elevation={1}/>
			<Container>
				 <Header />
				<Box sx={{
					display: 'grid',
					gridTemplateColumns: '1fr',
					gridTemplateRows: '1fr',
					alignItems: 'center'
				}}>
					{children}
				</Box>
			</Container>
			<Paper/>
		</Box>
	)
}
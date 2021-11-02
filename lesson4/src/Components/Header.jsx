import {
	Link, AppBar, Container, Typography, IconButton
}
	from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

export const Header = ( props ) => {
	return (
		<AppBar component={Link} href="/"
		sx={{ gridArea: "header", alignSelf:"center" }}
			position="static">
			<Container sx={{ display: "flex", justifyContent: "space-between" }}
			>
				<Typography variant="h6"
				            component="span"
				>
					My MUI Chat
				</Typography>
				<IconButton color="inherit">
					<AccountBoxIcon/>
				</IconButton>
			</Container>
		</AppBar>
	)
}
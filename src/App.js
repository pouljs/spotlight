import React from 'react';
import TextField from '@material-ui/core/TextField';
import Container from "@material-ui/core/Container";
import {createMuiTheme, makeStyles, ThemeProvider} from '@material-ui/core/styles';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

const getData = () => {
	return (
		[
			{
				imageSrc: "react.svg",
				title: "Have you seen my pants?",
				content: "Truncation should be conditionally applicable on this long line of text as this is a much longer line than what the container can support."
			},
			{
				imageSrc: "react.svg",
				title: "Blast from the past!",
				content: "Truncation should be conditionally applicable on this long line of text as this is a much longer line than what the container can support."
			},
			{
				imageSrc: "react.svg",
				title: "Beetlejuice to be remastered with granite and rubber gloves",
				content: "Truncation should be conditionally applicable on this long line of text as this is a much longer line than what the container can support."
			},
		]
	)
};

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		overflow: 'hidden',
	},
	paper: {
		margin: `${theme.spacing(0)}px auto`,
		padding: theme.spacing(2),
	},
	avatar: {
		width: 150,
		height: "auto",
	}
}));

const Spotlight = () => {
	const darkMode = useMediaQuery('(prefers-color-scheme: dark)');
	const theme = React.useMemo(
		() =>
			createMuiTheme({
				palette: {
					type: darkMode ? 'dark' : 'light',
				},
				typography: {
					fontFamily: [
						'Poppins'
					]
				},
			}),
		[darkMode],
	);
	return (
		<ThemeProvider theme={theme}>
			<Container maxWidth="sm">
				<TextField
					placeholder="What are you looking for?"
					fullWidth
					margin="normal"
					InputLabelProps={{
						shrink: true,
					}}
					id="outlined-secondary"
					label="Spotlight"
					variant="outlined"
					color="secondary"
					theme={theme}
				/>
				<Results/>
			</Container>
			<CssBaseline/>
		</ThemeProvider>
	)
};

const ResultItem = (props) => {
	const classes = useStyles();
	return (
		<Grid item className={classes.root}>
			<Paper elevation={1} className={classes.paper} variant="outlined" square>
				<Grid container wrap="nowrap" spacing={2}>
					<Grid item>
						<Avatar variant={"square"} src={props.imageSrc} className={classes.avatar}/>
					</Grid>
					<Grid item xs>
						<Typography variant={"h5"}>{props.title}</Typography>
						<Typography color={"textSecondary"}>{props.content}</Typography>
					</Grid>
				</Grid>
			</Paper>
		</Grid>
	)
};

const Results = () => {
	return (
		<Grid container direction="column" justify="flex-start" alignItems="stretch">
			{
				Object.keys(getData()).map((i) => {
					return (
						<ResultItem
							title={getData()[i].title}
							imageSrc={getData()[i].imageSrc}
							content={getData()[i].content}
						/>
					)
				})
			}
		</Grid>
	)
};

export default Spotlight

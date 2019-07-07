import React from 'react';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
	card: {
		maxWidth: '100%',
	},
	media: {
		height: 140,
	},
});

export default function MediaCard(props) {
	const classes = useStyles();

	const { car, language } = props;

	function getDescription() {
		return car[`description_${language}`];
	}

	return (
		<Card className={classes.card}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
					title="Contemplative Reptile"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{car.title}
          			</Typography>
					<Typography variant="body2" color="textSecondary" component="p" noWrap={true}>
						{getDescription()}
					</Typography>
				</CardContent>
			</CardActionArea>
			<Divider style={{marginLeft: 10, marginRight: 10}} />
			<CardActions>
				<Button size="small" color="primary">
					Learn More
        		</Button>
			</CardActions>
		</Card>
	)
};
import React from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const ImageButton = (props) => {
    const classes = props.classes;
    return (
        <ButtonBase
            focusRipple
            key={props.Title}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            onClick={props.onClick}
        >
        <span className={classes.imageBackdrop} />
			<span className={classes.imageButton}>
				<Typography
					component="span"
					variant="subtitle1"
					color="inherit"
					className={classes.imageTitle}
				>
            		{props.Title}
            		<span className={classes.imageMarked} />
        		</Typography>
        	</span>
        </ButtonBase>
    );
}

export default ImageButton;
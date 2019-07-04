import React from 'react';

// material ui
import { withStyles } from '@material-ui/core/styles';
import {
    Paper,
    Typography,
    Divider,
    TextField,
    Button
} from '@material-ui/core';

// components
import Loading from '../../../components/loading';

const styles = {
    textField: {

    }
};

function Details({classes, authenticationReducer, profile, language, handleChange, onSave, ...props}) {
    const {
        updateProfileFetching,
    } = authenticationReducer;

    return (
        <Paper elevation={0} style={{border: '1px solid #DFE3E8'}}>
            <Typography variant="h6" style={{margin: 20}}>
                {`${{
                    en: 'Profile',
                    ge: 'მონაცემები'
                }[language]}`}
            </Typography>
            <Divider />
            <div style={{padding: 20}}>
                <TextField
                    id="outlined-name"
                    label={`${{
                        en: "First Name",
                        ge: "სახელი"
                    }[language]}`}
                    className={classes.textField}
                    value={profile.first_name}
                    onChange={(e) => {
                        handleChange('first_name', e.target.value);
                    }}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    disabled={updateProfileFetching}
                />
                <TextField
                    id="outlined-name"
                    label={`${{
                        en: "Last Name",
                        ge: "გვარი"
                    }[language]}`}
                    className={classes.textField}
                    value={profile.last_name}
                    onChange={(e) => {
                        handleChange('last_name', e.target.value);
                    }}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    disabled={updateProfileFetching}
                />
                <TextField
                    id="outlined-name"
                    label={`${{
                        en: "Phone number",
                        ge: "მობილური"
                    }[language]}`}
                    className={classes.textField}
                    value={profile.mobile}
                    onChange={(e) => {
                        handleChange('mobile', e.target.value);
                    }}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    disabled={updateProfileFetching}
                />
            </div>
            <Divider />
            <div style={{margin: 20}}>
                {updateProfileFetching ?
                    <Loading />
                    :
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={onSave}
                    >
                        {`${{
                            en: "Save Changes",
                            ge: "მონაცემების დამახსოვრება"
                        }[language]}`}
                    </Button>
                }
            </div>
        </Paper>
    )
};

export default withStyles(styles)(Details);
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { useData } from '../../Store/WeatherProvider';


const AntSwitch = withStyles(theme => ({
    root: {
        width: 35,
        height: 20,
        padding: 0,
        display: 'flex',
    },
    switchBase: {
        padding: 0,
        color: 'white',
        '&$checked': {
            transform: 'translateX(12px)',
            color: theme.palette.common.white,
            '& + $track': {
                opacity: 1,
                backgroundColor: theme.palette.primary.main,
                borderColor: theme.palette.primary.main,
            },
        },
    },
    thumb: {
        width: 24,
        height: 20,
        boxShadow: 'none',
        border: `1px solid ${theme.palette.grey[500]}`
    },
    track: {
        border: `1px solid ${theme.palette.grey[500]}`,
        borderRadius: 20 / 2,
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
    },
    checked: {},
}))(Switch);

export default function CustomizedSwitches() {

    const { isChecked, setChecked } = useData();

    return (
        <FormGroup>
            <Typography component="div">
                <Grid component="label" container alignItems="center" spacing={1}>
                    <Grid item><Text>°F</Text></Grid>
                    <Grid item>
                        <AntSwitch
                            checked={isChecked}
                            onChange={() => setChecked(!isChecked)}
                            value="checkedC"
                        />
                    </Grid>
                    <Grid item><Text>°C</Text></Grid>
                </Grid>
            </Typography>
        </FormGroup>
    );
}

const Text = styled.p`
font-size: 20px;
`;
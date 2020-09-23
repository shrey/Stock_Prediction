import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';


const useStyles = makeStyles(() => ({
    formControl: {
        width: 500
    }
}))


export const DropDown = () => {

    const [stock,setStock] = useState({
        name: 'Stock Name'
    })

    const handleChange = (event) => {
        console.log(event);
    }
    const classes = useStyles();
    return(
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-native-simple">Stock</InputLabel>
                <Select
                native
                value={stock.name}
                onChange={handleChange}
                inputProps={{
                    name: 'age',
                    id: 'age-native-simple',
                }}
                >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                </Select>
      </FormControl>
        </div>
    )
}
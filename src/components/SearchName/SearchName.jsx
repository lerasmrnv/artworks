import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'flex',
        width: '215px',
        backgroundColor: '#F6F6F6',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        margin: 'auto 20px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#0000',
        },
    },
}));

export default function BasicSelect() {
    const [name, setName] = React.useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    };

    return (
        <Box sx={{ width: 300 }} className='searchName'>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Name</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={name}
                    label="Name"
                    onChange={handleChange}
                    IconComponent={ExpandMoreIcon}
                >

                    <BootstrapInput id="demo-customized-textbox" placeholder='Start type a name' />
                </Select>
            </FormControl>
        </Box>
    );
}

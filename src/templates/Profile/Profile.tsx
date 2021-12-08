import { logout } from '../../store/actions/addAuth';
import { useDispatch } from 'react-redux';

import { useRouter } from 'next/router';

import { Button } from '@mui/material';

const ProfileTemplate = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const logoutProfile = () => {
        dispatch(logout);
        router.push('/login');
    }
    return (
        <>
            <h1>Profile</h1>
            <Button type='submit' variant="contained" size="large" style={{ height: '56px' }} onClick={() => logoutProfile()}>
                Logout
            </Button>
        </>
    )
}

export default ProfileTemplate
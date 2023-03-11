import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserDetails } from '../redux/store';

function Profile() {
    const { data, error, isLogged, isLoading } = useSelector((state )=> {
        return state.user
    });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserDetails(data.token))
    }, [dispatch, data.token]);

    if (isLoading) {
        return (
            <div>Loading</div>)
    } else if (error) {
        return (
        <div>Error</div>)
    } else {
        if (isLogged) {
            return (<>

                <div>First Name : {data.first_name}</div>
                <div>Last Name : {data.last_name}</div>
                <div>Email: {data.email}</div>
            </>
            )
        } else {
            return (
                <div>Please Log In</div>
            )
        }

    }
}
export default Profile;

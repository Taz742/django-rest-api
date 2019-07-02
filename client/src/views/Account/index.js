import React from 'react';

// material ui
import { withStyles } from '@material-ui/core/styles';
import {
    Grid,
} from '@material-ui/core';

// layout
import { Dashboard as DashboardLayout } from '../../layouts';

// components
import Profile from './components/profile';
import Details from './components/details';

// redux
import { connect } from 'react-redux';
import { UpdateProfile } from '../../redux/actions'; 

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    layout: {
        
    },
});

// class Account extends React.Component {
//     state = {
//         image: null,
//     }

//     componentdDidMount() {
//         console.log('ff: ');
//     }

//     save = () => {

//     }

//     onUpload = (e) => {
//         const formData = new FormData();
//         formData.append('image', e.target.files[0]);
//         formData.append('title', 'title');
//         formData.append('price', 11.22);

//         axios.post('/api/products/', formData, {
//             headers: {'Content-Type': 'multipart/form-data' }
//         }).then(res => {
//             console.log(res);
//         });
//     }

//     render() {
//         const {
//             classes,
//             settingsReducer,
//             authenticationReducer: {
//                 profile
//             }
//         } = this.props;

//         return (
//             <DashboardLayout
//                 title={{
//                     en: 'Account',
//                     ge: 'ჩემი გვერდი'
//                 }[settingsReducer.language]}
//             >
//                 <div className={classes.layout}>
//                     <Grid container spacing={2}>
//                         <Grid item xs={12} md={4} lg={4}>
//                             <Profile profile={profile} language={settingsReducer.language} />
//                         </Grid>
//                         <Grid item xs={12} md={8} lg={8}>
//                             <Details profile={profile} language={settingsReducer.language} />
//                         </Grid>
//                     </Grid>
//                     {/* <input type="file" onChange={this.onUpload} /> */}
//                 </div>
//             </DashboardLayout>
//         )
//     }
// };

function Account({classes, settingsReducer, authenticationReducer, ...props}) {
    const [profile, setProfile] = React.useState({});

    React.useEffect(() => {
        setProfile(authenticationReducer.profile);
    }, [authenticationReducer]);

    function handleProfileDetailChange(key, value) {
        setProfile({
            ...profile,
            [key]: value
        });
    };

    return (
        <DashboardLayout
            title={{
                en: 'Account',
                ge: 'ჩემი გვერდი'
            }[settingsReducer.language]}
        >
            <div className={classes.layout}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4} lg={4}>
                        <Profile profile={authenticationReducer.profile} language={settingsReducer.language} />
                    </Grid>
                    <Grid item xs={12} md={8} lg={8}>
                        <Details
                            profile={profile}
                            language={settingsReducer.language}
                            handleChange={handleProfileDetailChange}
                            onSave={() => {
                                props.updateProfile(profile);
                            }}
                        />
                    </Grid>
                </Grid>
            </div>
        </DashboardLayout>
    )
};

const mapStateToProps = (state) => {
    return {
        settingsReducer: state.settingsReducer,
        authenticationReducer: state.authenticationReducer,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateProfile: (profile) => {
            dispatch(UpdateProfile(profile));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Account));
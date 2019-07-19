import React from 'react';

// redux
import { connect } from 'react-redux';
import { GetMyCars } from '../../../redux/actions';

// helper components
import { Dashboard as DashboardLayout } from '../../../layouts';
import Loading from '../../../components/loading';
import {CarsTable} from './components/table';

function MyCars(props) {
    const {
        settingsReducer,
        myCarsReducer
    } = props;

    React.useEffect(() => {
        props.getMyCars();
    }, []);

    return (
        <DashboardLayout
            title={{
                en: 'My Cars',
                ge: 'ჩემი ტრანსპორტი'
            }[settingsReducer.language]}
        >
            <div>
                {myCarsReducer.fetching ?
                    <Loading />
                    :
                    <CarsTable cars={myCarsReducer.cars} history={props.history} />
                }
            </div>
        </DashboardLayout>
    )
};

const mapStateToProps = (state) => {
    return {
        settingsReducer: state.settingsReducer,
        myCarsReducer: state.myCarsReducer,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getMyCars: () => {
            dispatch(GetMyCars());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MyCars);

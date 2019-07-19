import React from 'react';

// redux
import { connect } from 'react-redux';

// helper components
import { Dashboard as DashboardLayout } from '../../../layouts';

// redux actions
import { GetCarsAdditionalInformation } from '../../../redux/actions';

function AddOrUpdateCar({...props}) {
    const [editable, setEditable] = React.useState(false);

    React.useEffect(() => {
        const { id } = props.match.params;
        
        if (id) {
            setEditable(true);
        }

        props.getAdditionalInformation();
    }, []);

    return (
        <DashboardLayout
            title="edit or add"
        >
            <div>
                fff
            </div>
        </DashboardLayout>
    )
};

const mapStateToProps = (state) => {
    return {
        carsAdditionalInformation: state.carsAdditionalInformation,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAdditionalInformation: () => {
            dispatch(GetCarsAdditionalInformation());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddOrUpdateCar);
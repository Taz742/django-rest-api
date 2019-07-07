import React from 'react';

// helper components
import { Dashboard as DashboardLayout } from '../../../layouts';

function AddOrUpdateCar({...props}) {
    const [editable, setEditable] = React.useState(false);

    React.useEffect(() => {
        const { id } = props.match.params;
        
        if (id) {
            setEditable(true);
        }
    }, []);

    return (
        <DashboardLayout
            title="edit or add"
        >
            <div>
                {String(editable)}
            </div>
        </DashboardLayout>
    )
};

export default AddOrUpdateCar;
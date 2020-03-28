import React from 'react';
import {firebase} from '../firebase';

export const Checkbox = ({ id }) => {
    const archiveTask = () => {
        firebase
            .firestore
            .collection
            .doc(id)
            .update({
                archived: true,
            });
    };

    return(
        <div 
            className="ckeckbox-holder" 
            data-testid="checkbox-action"
            onClick={() => archiveTask()}>
            <span className="checkbox" />
        </div>
    );
};
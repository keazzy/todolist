import {useState, useEffect} from 'react';
import {firebase} from '../firebase';

const collatedTaskExists = () => {};

export const useTasks = selectedProject => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        let unsubscribe = firebase
        .firestore()
        .collection('tasks')
        .where('userId', '==', 'adeleke');

        unsubscribe = selectedProject && !collatedTaskExists(selectedProject) ?
        (unsubscribe = unsubscribe.where('projectId', '==', selectedProject))
        : selectedProject === 'TODAY'
        ? (unsubscribe = unsubscribe.where(
            'date', 
            '==', 
            moment().format('DD/MM/YY')
            ))
        : selectedProject == 'INBOX' || selectedProject === 0
        ? (unsubscribe = unsubscribe.where('date', '==', '' ))
        : unsubscribe;

    },[])
}
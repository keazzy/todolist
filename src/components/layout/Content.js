import React from 'react';
import {Header} from './Header';
import {Tasks} from './Tasks'
import {Sidebar} from './Sidebar';

export const Content = () => (
    <section>
        <Sidebar />
        <Tasks />
    </section>
);
import React from 'react';
import Header from './Common/Header';
import Paragraph from './Common/Paragraph';
import AddToList from './Add/AddToList';

function Main() {
    return (
        <div>
            <section className="main-information">
                <Header text='To Do List' />
                <Paragraph text='Type things you have to do and add them to the list.' />
            </section>
            <section className="to-do-list">
                <AddToList />
            </section>
        </div>
    );
}

export default Main;

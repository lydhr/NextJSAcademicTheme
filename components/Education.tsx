import React from 'react';
import ExtLink from './ExtLink'

const Education = (): JSX.Element => {
    return (
        <section className="grid" id="education">
            <h2 className="text-xl font-bold mt-12 mb-4">Education</h2>
            <p className = "text-base ml-4 text-gray-700">
                🐸 &nbsp;was at <ExtLink href="https://harrypotter.fandom.com/wiki/British_Auror_Office"> The Auror Department(2007-2008, Internship)</ExtLink> 
                &nbsp;and <ExtLink href="https://harrypotter.fandom.com/wiki/Hogwarts_School_of_Witchcraft_and_Wizardry">Hogwarts Primary University(1911-1988, Bachelor's in Magic)</ExtLink>
            </p>
        </section>
    );
};



export default Education;

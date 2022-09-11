import data from './data/teaching.json'

const Teaching = (): JSX.Element => {
    return (
        <section className="grid" id="teaching">
            <h2 className="text-xl font-bold mt-12 mb-4">Teaching</h2>
            <div className="text-base ml-4 text-gray-700">
                <ul className="list-disc">
                  {data.map((classInfo) => (
                     <li key={classInfo.id}>TA: {classInfo.id}, {classInfo.name}</li>
                  ))}
                </ul>
            </div>

        </section>
    );
};



export default Teaching;

import ProjectItem from './ProjectItem'
import data from './data/projects.json'

const ProjectList = (): JSX.Element => {
    return (
        <section className="grid" id="publications">
            <h2 className="text-xl font-bold mt-12 mb-4">Projects</h2>
            <div>
                {data.map((project, index) => (
                    <ProjectItem project={project} index={index}/>
                ))}
            </div>
        </section>
        
    );
};



export default ProjectList;

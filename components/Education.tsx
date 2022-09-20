import ExtLink from './ExtLink'
import data from './data/personalInfo.json'

const Education = (): JSX.Element => {
    return (
        <section className="grid" id="education">
            <h2 className="text-xl font-bold mt-12 mb-4">Education</h2>
            <p className = "text-base ml-4 text-gray-700">
                🐸 &nbsp;was at &nbsp;
                {
                    data.education.map((education, index) => {
                        if (index == 0){
                            return <ExtLink href={education.link} key={index}>{education.name}</ExtLink>
                        }else{
                            return <ExtLink href={education.link} key={index}>, {education.name}</ExtLink>
                        }
                    })
                }
            </p>
        </section>
    );
};



export default Education;

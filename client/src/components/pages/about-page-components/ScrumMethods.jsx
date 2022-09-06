const ScrumMethods = () => {
    return (
        <div className="scrumMethods">
            <h1>Scrum</h1>

            <p>The scrum framework is iteritive and will produce a potentially shippable increment at the end of every sprint. A sprint is a time-boxed event in which selected product development activities take place. These sprints will run one after another until the product no longer needs development.</p>

            <p>During the sprint the developers will work off a Sprint Backlog. This is a list of tasks which are to be completed by the end of the sprint.</p>
            
            <p>The sprint backlog items are pulled from the Product Backlog. This is a list of all tasks and pieces of functionality which are required to be included within the product. The pieces of functionality are prioritised within the team to determine what will be worked on during the next sprint.</p>
            
            <p>Each sprint aims to create a potentially shippable increment. Due to the framework being iterative, this means that developers will continuously add functionality onto previous iterations of the product, therefore adding value.</p>

            <h2>Roles</h2>

            <h3>Development Team</h3>

            <p>The Developers are committed to creating any aspect of a usable Increment each Sprint. The Developers include anyone who works to create the product, whatever skillset they may have.</p>

            <p>This is typically a multi-disciplinary team comprised of software architects, designers, programmers and testers.</p>

            <p>They are accountable for how the product is developed and for the technical quality of the product.</p>

            <h3>Scrum Master</h3>

            <p>The Scrum Master is accountable for establishing Scrum and helping everyone understand and use it, both within the Scrum Team and the organisation.</p>

            <p>They help create the conditions for effective delivery through facilitation, coaching, teaching and mentoring. They provide delivery leadership whilst at the same time acting as a servant who helps remove impediments to the Scrum Teams progress.</p>

            <p>The Scrum Master is accountable for effectiveness, for how people use Scrum and interact and collaborate to deliver value.</p>

            <h2>Sprint Meetings</h2>

            <h3>Sprint Planning</h3>

            <p>This meeting is held at the start of each sprint. This should be timeboxed to 8 hours for a month-long sprint (this can be scaled down for smaller sprint). The entirety of the Scrum Team attends this meeting.</p>

            <p>Typically, this meeting is split into two distinct parts; what is going to be brought into the sprint backlog, and how these tasks could be completed.</p>

            <p>The result of Sprint Planning is a Sprint Backlog that details the work to be carried out in the Sprint. This includes a plan of how it will be Done and a Sprint Goal that explains why the work is valuable.</p>

            <h3>Daily Scrum</h3>

            <p>This is a meeting held at the start of every working day, timeboxed to 15 minutes. It is sometimes referred to as the daily standup.</p>

            <p>It is for the Developers to plan their next 24 hours and inspect progress toward the Sprint Goal. The structure of the Daily Scrum is set by the Developers.</p>

            <p>During the meeting, the following points should be discussed by every participant:</p>

            <ul>
                <li>What did I do yesterday that helped meet the Sprint Goal?</li>
                <li>What will I do today to help meet the Sprint Goal?</li>
                <li>Do I see any future impediments that prevents the team from meeting the Sprint Goal?</li>
            </ul>
        </div>
    )
}

export default ScrumMethods;
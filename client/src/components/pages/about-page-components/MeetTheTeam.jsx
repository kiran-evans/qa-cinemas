import Testimonial from './Testimonial';

const MeetTheTeamPage = () => {
    const data = [{
        id: "1",
        image: "https://th.bing.com/th/id/OIP.--GRSptuFXxmSDA34kfWOwHaI8?w=157&h=190&c=7&r=0&o=5&pid=1.7",
        name: "Faizaan",
        text: "Team Member",
        gitLink: "https://github.com/DevFaizaan"
    }, {
        id: "2",
        image: "https://th.bing.com/th/id/OIP.wEsBe2udHBieFeZVmus8qAHaHk?w=186&h=190&c=7&r=0&o=5&pid=1.7",
        name: "Fred Clay",
        text: "Product Owner",
        gitLink: "https://github.com/FredClay"
    }, {
        id: "3",
        image: "https://th.bing.com/th/id/OIP.qCbCJYGidsUAMVFxO5T_ugHaHa?w=192&h=192&c=7&r=0&o=5&pid=1.7",
        name: "Daniel",
        text: "Team Member",
        gitLink: "https://github.com/dlcorne"
    },
     {
        id: "4",
        image: "https://cdn4.iconfinder.com/data/icons/avatars-of-people/5000/avatar_7-512.png",
        name: "Mohamed",
        text: "Team Member",
        gitLink: "https://github.com/Issa71"
    }, {
        id: "5",
        image: "https://th.bing.com/th/id/OIP.30KHuMw-tDXt8ZzY5BpUhwHaHa?w=169&h=180&c=7&r=0&o=5&pid=1.7",
        name: "Kiran",
        text: "Scrum Master",
        gitLink: "https://github.com/kiran-evans"
    }];

    return (
        <div>
            <h2>Meet the Team</h2>
            <div className="testimonials" >

                {
                    data.map(item => (
                        <Testimonial data={item} key={item.id} />
                    ))
                }

            </div>
        </div>
        
    );

};

export default MeetTheTeamPage;
import React from 'react';
import Banner from '../AboutUsPagesComponents/aboutUsBanner/Banner.js';
import OurTeamSlider from '../AboutUsPagesComponents/OurTeamSlider';
import StayinTouch from '../AboutUsPagesComponents/StayinTouch';
import ServicesDescription from './ServicesDescription';
import serviceImage from '../../images/ourservice.jfif';
import SectionTitles from '../AboutUsPagesComponents/SectionTitles.js';



const OurService = () => {
    const datas = [
        {
            img: serviceImage,
            serviceHeader: "Latest Procurement News",
            servicesDescription:"A platform for all procurement activities of government of Nepal. Lorem ipsum dolor sit amet a platform for all procurement activities of Government of Nepal. Bolpatra Nepal is a platform for all procurement activities of government of Nepal. Lorem ipsum dolor sit amet a platform for all procurement activities of Government of Nepal. Lorem ipsum dolor sit amet a platform for all procurement activities of gvernment of Nepal." },
        {
            img: serviceImage,
            serviceHeader: "Lorem ipsum dolor sitcing",
            servicesDescription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium reiciendis officia modi? Ea eligendi nisi dolorem voluptates. Accusantium iusto repellat, omnis ipsa at odio atque quisquam dolorem fugit sed voluptate quidem itaque consectetur delectus quod labore et molestias culpa expedita ut dicta nisi? Et dolore culpa explicabo architecto, provident ea? Voluptatem, reprehenderit accusamus! Consequatur, ullam. Mollitia facere quasi placeat ad. Perferendis sed sint dolore quo illum distinctio consequuntur tempora similique qui. Sed officiis, suscipit placeat nam commodi minima consectetur minus, porro asperiores recusandae nemo ad veritatis cum odio adipisci voluptatibus sunt nostrum vel laborum distinctio. Perspiciatis possimus repellendus vero veritatis!"
        },
        {
            img: serviceImage,
            serviceHeader: "Lorem ipsum dolor sitcing",
            servicesDescription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium reiciendis officia modi? Ea eligendi nisi dolorem voluptates. Accusantium iusto repellat, omnis ipsa at odio atque quisquam dolorem fugit sed voluptate quidem itaque consectetur delectus quod labore et molestias culpa expedita ut dicta nisi? Et dolore culpa explicabo architecto, provident ea? Voluptatem, reprehenderit accusamus! Consequatur, ullam. Mollitia facere quasi placeat ad. Perferendis sed sint dolore quo illum distinctio consequuntur tempora similique qui. Sed officiis, suscipit placeat nam commodi minima consectetur minus, porro asperiores recusandae nemo ad veritatis cum odio adipisci voluptatibus sunt nostrum vel laborum distinctio. Perspiciatis possimus repellendus vero veritatis!"
        },
        {
            img: serviceImage,
            serviceHeader: "Lorem ipsum dolor sitcing",
            servicesDescription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium reiciendis officia modi? Ea eligendi nisi dolorem voluptates. Accusantium iusto repellat, omnis ipsa at odio atque quisquam dolorem fugit sed voluptate quidem itaque consectetur delectus quod labore et molestias culpa expedita ut dicta nisi? Et dolore culpa explicabo architecto, provident ea? Voluptatem, reprehenderit accusamus! Consequatur, ullam. Mollitia facere quasi placeat ad. Perferendis sed sint dolore quo illum distinctio consequuntur tempora similique qui. Sed officiis, suscipit placeat nam commodi minima consectetur minus, porro asperiores recusandae nemo ad veritatis cum odio adipisci voluptatibus sunt nostrum vel laborum distinctio. Perspiciatis possimus repellendus vero veritatis!"
        },
    ]
    return (
        <div>
            <Banner  page="Our Services" heading="Why Choose Us" message="We Are Bolpatra Nepal" />
            <SectionTitles title="OUR SERVICES" />
            {datas?.map((data,index)=>(
            <div className={index%2 ? "even_background":"odd_background" }>
                <ServicesDescription serviceImage={data.img} contentHeader={data.serviceHeader} contentDescription={data.servicesDescription}/>
            </div>
              ))}
             <SectionTitles title="OUR TEAM" />
            <OurTeamSlider />
            <StayinTouch />
        </div>
    )
}

export default OurService

import React from 'react';
import { Container } from 'react-bootstrap';
import Ad1 from '../../images/aboutUsImage/ad1.png';
import Ad2 from '../../images/aboutUsImage/ad2.png';
import Ad3 from '../../images/aboutUsImage/ad3.png';

const ValuedUsers = () => {
    return (

        <div className="valuedUser_wrapper">
            <Container>
                <div className="valuedUser_container">
                    <div className="content_section">
                        <h3>Our Valued Users</h3>
                        <p>A platform for all procurement activities of government of Nepal.Lorem ipsum dolor sit amet a platform for all procurement activities.</p>
                    </div>
                    <div className="valuedUserImages">
                        <div className="imageBox"><img src={Ad1} alt="user_image" /></div>
                        <div className="imageBox"><img src={Ad2} alt="user_image" /></div>
                        <div className="imageBox"><img src={Ad3} alt="user_image" /></div>
                        <div className="imageBox"><img src={Ad2} alt="user_image" /></div>
                        <div className="imageBox"><img src={Ad3} alt="user_image" /></div>
                        <div className="imageBox"><img src={Ad1} alt="user_image" /></div>
                        <div className="imageBox"><img src={Ad2} alt="user_image" /></div>
                        <div className="imageBox"><img src={Ad3} alt="user_image" /></div>
                    </div>
                </div>
            </Container >
        </div>
    )
}

export default ValuedUsers

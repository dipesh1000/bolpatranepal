import React from 'react';
import part1 from '../../images/aboutUsImage/part1.jpg';
import part2 from '../../images/aboutUsImage/part2.jpg';
import part3 from '../../images/aboutUsImage/part3.jpg';

const StoryImage = () => {
    return (
        <div className="image_center">
        <div className="storyImage_container"> 
            <div className="first_section">
                <img src={part1} alt="story-image-1" />
            </div>
            <div className="second_section">
                <img src={part2} alt="story-image-2" />
            </div>
            <div className="third_section">
                <img src={part3} alt="story-image-3" />
            </div>
        </div>
        </div>
    )
}

export default StoryImage

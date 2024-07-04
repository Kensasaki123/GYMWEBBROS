import React from 'react';
import './Mid.css';

function Mid() {
  return (
    <>
      <div className='midmain'>
        <div className="box1">
          <div className="boxpart1">
            Welcome to GYM WEB BROS! We understand that everyone’s fitness journey is unique, which is why we offer personalized workout routines tailored specifically for you. By inputting your body information—such as height, weight, age, fitness goals, and any specific needs or preferences—our advanced system designs a custom workout plan that aligns with your individual fitness level and objectives. Whether you're looking to build muscle, lose weight, improve endurance, or enhance overall health, our personalized routines will help you achieve your goals efficiently and effectively. Join us today and take the first step towards a fitter, healthier you!
          </div>
          <div className="boxpart2">
            <img src='arnold.png' alt="GYM WEB BROS" height='auto' max-height='300px' /> {/* Added alt text and responsive height */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Mid;

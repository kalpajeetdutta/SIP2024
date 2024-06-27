'use client';

import {useState} from 'react';

const Form = () => {
  const [formData, setFormData] = useState({});

  const handleChange = e => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
    // You can add your form submission logic here, like sending the data to an API
  };

  return (
    <div class="max-w-4xl mx-auto mt-10 bg-white p-10 rounded-lg shadow-lg">
    <h1 class="text-2xl font-bold mb-6">Questionnaire</h1>
    <form onSubmit={handleSubmit}>
      <div class="grid grid-cols-1 gap-6">
        <div>
          <label class="block text-gray-700">1. Name of the Child:</label>
          <input type="text" name="childName" onChange={handleChange} class="w-full p-2 border border-gray-300 rounded mt-1" />
        </div>
        <div>
          <label class="block text-gray-700">2. Age of the Child:</label>
          <input type="number" name="childAge" onChange={handleChange} class="w-full p-2 border border-gray-300 rounded mt-1" />
        </div>
        <div>
          <label class="block text-gray-700">3. Date of Birth of the Child:</label>
          <input type="date" name="childDob" onChange={handleChange} class="w-full p-2 border border-gray-300 rounded mt-1" />
        </div>
        <div>
          <label class="block text-gray-700">4. Place of Birth of the Child:</label>
          <input type="text" name="childBirthPlace" onChange={handleChange} class="w-full p-2 border border-gray-300 rounded mt-1" />
        </div>
        <div>
          <label class="block text-gray-700">5. Child’s Birth Time (HH:MM AM/PM):</label>
          <input type="time" name="childBirthTime" onChange={handleChange} class="w-full p-2 border border-gray-300 rounded mt-1" />
        </div>
        <div>
          <label class="block text-gray-700">6. Gestation:</label>
          <input type="text" name="gestation" onChange={handleChange} class="w-full p-2 border border-gray-300 rounded mt-1" />
        </div>
        <div>
          <label class="block text-gray-700">7. Mode of Delivery:</label>
          <input type="text" name="deliveryMode" onChange={handleChange} class="w-full p-2 border border-gray-300 rounded mt-1" />
        </div>
        <div>
          <label class="block text-gray-700">8. Birth Weight:</label>
          <input type="number" name="birthWeight" onChange={handleChange} class="w-full p-2 border border-gray-300 rounded mt-1" />
        </div>
        <div>
          <label class="block text-gray-700">9. Gender:</label>
          <select name="gender" onChange={handleChange} class="w-full p-2 border border-gray-300 rounded mt-1">
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label class="block text-gray-700">10. Family Type:</label>
          <select name="familytype" onChange={handleChange} class="w-full p-2 border border-gray-300 rounded mt-1">
            <option value="">Select</option>
            <option value="joint">Joint</option>
            <option value="nuclear">Nuclear</option>
          </select>
        </div>
        <div>
          <label class="block text-gray-700">11. Religion:</label>
          <select name="religion" onChange={handleChange} class="w-full p-2 border border-gray-300 rounded mt-1">
            <option value="">Select</option>
            <option value="hinduism">Hinduism</option>
            <option value="islam">Islam</option>
            <option value="sikhism">Sikhism</option>
            <option value="buddhism">Buddhism</option>
            <option value="jainism">Jainism</option>
            <option value="christianity">Christianity</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label class="block text-gray-700">12. Primary Care Giver of the Child:</label>
          <div>
            <input type="checkbox" id="mother" value="mother"  name ="primaryCareGiver"/>
            <label className='ml-2' for="mother">Mother</label>
          </div>
          <div>
            <input type="checkbox" id="father" name="father" />
            <label className='ml-2' for="father">Father</label>
          </div>
          <div>
            <input type="checkbox" id="parents" name="parents" />
            <label className='ml-2' for="parents">Parents</label>
          </div>
          <div>
            <input type="checkbox" id="scales" name="scales" />
            <label className='ml-2' for="scales">Grandparents</label>
          </div>
          <div>
            <input type="checkbox" id="scales" name="scales" />
            <label className='ml-2' for="siblings">Sibling</label>
          </div>
          <div>
            <input type="checkbox" id="scales" name="scales" />
            <label className='ml-2' for="scales">Helping staff</label>
          </div>
        </div>
        <div>
          <label class="block text-gray-700">13. Educational Qualification of Parent:</label>
          <input type="text" name="parentEducation" onChange={handleChange} class="w-full p-2 border border-gray-300 rounded mt-1" />
        </div>
        <div>
          <label class="block text-gray-700">14. Total Children in House (siblings):</label>
          <input type="number" name="totalSiblings" onChange={handleChange} class="w-full p-2 border border-gray-300 rounded mt-1" />
        </div>
        <div>
          <label class="block text-gray-700">15. Child Order (1/2/3):</label>
          <input type="number" name="childOrder" onChange={handleChange} class="w-full p-2 border border-gray-300 rounded mt-1" />
        </div>
        <div>
          <label class="block text-gray-700">16. Number of Younger Siblings:</label>
          <input type="number" name="youngerSiblings" onChange={handleChange} class="w-full p-2 border border-gray-300 rounded mt-1" />
        </div>
        <div>
          <label class="block text-gray-700">17. Age Group of Younger Siblings:</label>
          <input type="text" name="youngerSiblingsAgeGroup" onChange={handleChange} class="w-full p-2 border border-gray-300 rounded mt-1" />
        </div>
        <div>
          <label class="block text-gray-700">18. Number of Elder Siblings:</label>
          <input type="number" name="elderSiblings" onChange={handleChange} class="w-full p-2 border border-gray-300 rounded mt-1" />
        </div>
        <div>
          <label class="block text-gray-700">19. Age Group of Elder Siblings:</label>
          <input type="text" name="elderSiblingsAgeGroup" onChange={handleChange} class="w-full p-2 border border-gray-300 rounded mt-1" />
        </div>
        <div>
          <label class="block text-gray-700">20. Number of Helping Staff for the Child (Specify Gender):</label>
          <input type="text" name="helpingStaff" onChange={handleChange} class="w-full p-2 border border-gray-300 rounded mt-1" />
        </div>
        <div>
          <label class="block text-gray-700">21. Age Range of Helping Staff for the Child:</label>
          <input type="text" name="helpingStaffAgeRange" onChange={handleChange} class="w-full p-2 border border-gray-300 rounded mt-1" />
        </div>
        <div>
          <label class="block text-gray-700">22. Mother Tongue of Helping Staff for the Child:</label>
          <input type="text" name="helpingStaffMotherTongue" onChange={handleChange} class="w-full p-2 border border-gray-300 rounded mt-1" />
        </div>
        <div>
          <label class="block text-gray-700">23. Number of Friends of Child:</label>
          <input type="number" name="numberOfFriends" onChange={handleChange} class="w-full p-2 border border-gray-300 rounded mt-1" />
        </div>
        <div>
          <label class="block text-gray-700">24. Age Range of the Friends of Child:</label>
          <input type="text" name="friendsAgeRange" onChange={handleChange} class="w-full p-2 border border-gray-300 rounded mt-1" />
        </div>
        <div>
          <label class="block text-gray-700">25. Age Child Started Media Viewing:</label>
          <input type="number" name="mediaViewingAge" onChange={handleChange} class="w-full p-2 border border-gray-300 rounded mt-1" />
        </div>
        <div>
          <label class="block text-gray-700">26. Socioeconomic Class:</label>
          <input type="text" name="socioeconomicClass" onChange={handleChange} class="w-full p-2 border border-gray-300 rounded mt-1" />
        </div>
        <div>
          <label class="block text-gray-700">27. Weekday Screen Time (per day):</label>
          <input type="number" name="weekdayScreenTime" onChange={handleChange} class="w-full p-2 border border-gray-300 rounded mt-1" />
        </div>
        <div>
          <label class="block text-gray-700">28. Weekend Screen Time (per day):</label>
          <input type="number" name="weekendScreenTime" onChange={handleChange} class="w-full p-2 border border-gray-300 rounded mt-1" />
        </div>
        <div>
          <label class="block text-gray-700">29. Purpose of Screen Time During Weekdays:</label>
          <input type="text" name="weekdayScreenPurpose" onChange={handleChange} class="w-full p-2 border border-gray-300 rounded mt-1" />
        </div>
        <div>
          <label class="block text-gray-700">30. Purpose of Screen Time During Weekends:</label>
          <input type="text" name="weekendScreenPurpose" onChange={handleChange} class="w-full p-2 border border-gray-300 rounded mt-1" />
        </div>
        <div>
          <label class="block text-gray-700">31. Do you think children will eat better only if you feed them while watching the screen?</label>
          <select name="eatBetterWithScreen" onChange={handleChange} class="w-full p-2 border border-gray-300 rounded mt-1">
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div>
          <label class="block text-gray-700">32. Average Screen Time of the Primary Caretaker (per day):</label>
          <input type="number" name="caretakerScreenTime" onChange={handleChange} class="w-full p-2 border border-gray-300 rounded mt-1" />
        </div>
        <div>
          <label class="block text-gray-700">33. What does the Child watch among the following programs per day during screen time? (Specify hours of watching)</label>
          <input type="text" name="programsWatched" onChange={handleChange} class="w-full p-2 border border-gray-300 rounded mt-1" />
        </div>
        <div>
          <label class="block text-gray-700">34. If Child watches any other program, please specify:</label>
          <input type="text" name="otherPrograms" onChange={handleChange} class="w-full p-2 border border-gray-300 rounded mt-1" />
        </div>
        <div>
          <label class="block text-gray-700">35. While attending to the screen your Child prefers which form of input:</label>
          <input type="text" name="preferredInput" onChange={handleChange} class="w-full p-2 border border-gray-300 rounded mt-1" />
        </div>
        <div>
          <label class="block text-gray-700">36. In comparison to peer group (same age kids), where do you feel your Child stands in speech and language skills:</label>
          <input type="text" name="speechAndLanguageSkills" onChange={handleChange} class="w-full p-2 border border-gray-300 rounded mt-1" />
        </div>
        <div>
          <label class="block text-gray-700">37. Outdoor physical activity/play of the Child (per day):</label>
          <input type="number" name="outdoorActivity" onChange={handleChange} class="w-full p-2 border border-gray-300 rounded mt-1" />
        </div>
        <div>
           <h1 className='text-center text-xl underline p-6'>Parent's awareness</h1>
          <label class="block text-gray-700">38. Do you think it is easy to manage your Child when they are given a screen to watch? (e.g., helps manage during household chores/shopping)</label>
          <select name="manageWithScreen" onChange={handleChange} class="w-full p-2 border border-gray-300 rounded mt-1">
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div>
          <label class="block text-gray-700">39. Do you think your Child’s communication skills will enhance watching screen?</label>
          <select name="manageWithScreen" onChange={handleChange} class="w-full p-2 border border-gray-300 rounded mt-1">
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div>
          <label class="block text-gray-700">40. Do you think increased screen time will slow down Child’s speech and language development?</label>
          <select name="manageWithScreen" onChange={handleChange} class="w-full p-2 border border-gray-300 rounded mt-1">
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div>
          <label class="block text-gray-700">41. Do you think screen time will enhance your Child’s social skills such as sharing, waiting for their turn etc?</label>
          <select name="manageWithScreen" onChange={handleChange} class="w-full p-2 border border-gray-300 rounded mt-1">
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div>
          <label class="block text-gray-700">42. Do you think that increased screen time will lead to attention problems in your Child?</label>
          <select name="manageWithScreen" onChange={handleChange} class="w-full p-2 border border-gray-300 rounded mt-1">
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div>
          <label class="block text-gray-700">43. Which among the following do you feel might be associated with screen time in children? If yes, please mention.</label>
          <div>
            <input type="checkbox" id="scales" name="scales" />
            <label className='ml-2' for="scales">No, not aware of any impact</label>
          </div>
          <div>
            <input type="checkbox" id="scales" name="scales" />
            <label className='ml-2' for="scales">Less sleep duration</label>
          </div>
          <div>
            <input type="checkbox" id="scales" name="scales" />
            <label className='ml-2' for="scales">Issues in vision</label>
          </div>
          <div>
            <input type="checkbox" id="scales" name="scales" />
            <label className='ml-2' for="scales">Diabetes</label>
          </div>
          <div>
            <input type="checkbox" id="scales" name="scales" />
            <label className='ml-2' for="scales">Difficulty in attention</label>
          </div>
          <div>
            <input type="checkbox" id="scales" name="scales" />
            <label className='ml-2' for="scales">Reduced physical development</label>
          </div>
          <div>
            <input type="checkbox" id="scales" name="scales" />
            <label className='ml-2' for="scales">Obesity</label>
          </div>
          <div>
            <input type="checkbox" id="scales" name="scales" />
            <label className='ml-2' for="scales">Reduced psycological well-being</label>
          </div>
          <div>
            <input type="checkbox" id="scales" name="scales" />
            <label className='ml-2' for="scales">Change in social behavior</label>
          </div>
          <div>
            <input type="checkbox" id="scales" name="scales" />
            <label className='ml-2' for="scales">Behavioral difficulties as hyperactivity-inattention</label>
          </div>
          <div>
            <input type="checkbox" id="scales" name="scales" />
            <label className='ml-2' for="scales">Heart disease</label>
          </div>
          <div>
            <input type="checkbox" id="scales" name="scales" />
            <label className='ml-2' for="scales">Reduced Speech and language development</label>
          </div>
          <div>
            <input type="checkbox" id="scales" name="scales" />
            <label className='ml-2' for="scales">Difficulty in Cognition</label>
          </div>
          <div>
            <input type="checkbox" id="scales" name="scales" />
            <label className='ml-2' for="scales">Reduced expressive vocabulary</label>
          </div>
        </div>
        <div>
          <label class="block text-gray-700">44. Are you aware of any guidelines set for screen time in children? If YES. Please specify:</label>
          <input type="text" name="speechAndLanguageSkills" onChange={handleChange} class="w-full p-2 border border-gray-300 rounded mt-1" />
        </div>
        <div>
          <label class="block text-gray-700">45. Does your family have set any guidelines or restrictions for screen time in children? If yes, please mention:</label>
          <input type="text" name="speechAndLanguageSkills" onChange={handleChange} class="w-full p-2 border border-gray-300 rounded mt-1" />
        </div>
        <div>
          <label class="block text-gray-700">46. Do you think you have to restrict screen time for your children?</label>
          <select name="manageWithScreen" onChange={handleChange} class="w-full p-2 border border-gray-300 rounded mt-1">
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div>
          <label class="block text-gray-700">47. Does your Child has ownership of electronic media/gadgets for their personal use?</label>
          <select name="manageWithScreen" onChange={handleChange} class="w-full p-2 border border-gray-300 rounded mt-1">
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div>
          <label class="block text-gray-700">48. Does your Child have</label>
          <select name="manageWithScreen" onChange={handleChange} class="w-full p-2 border border-gray-300 rounded mt-1">
            <option value="">Select</option>
            <option value="yes">non-interactive / passive media viewing</option>
            <option value="no">interactive co-viewing with parent / caretaker</option>
          </select>
        </div>
        <div class="mt-6">
          <button type="submit" class="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition">Submit</button>
        </div>
      </div>
    </form>
  </div>
  );
};

export default Form;

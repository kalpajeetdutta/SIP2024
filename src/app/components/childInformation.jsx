import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setCurrentPage, updateData} from '../../../redux/features/dataSlice';

const Step1 = ({currentPage}) => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data);
  const [formData, setFormData] = useState(data);
  // console.log(data)

  const handleChange = e => {
    const {name, value} = e.target;
    if (name.includes('_')) {
      console.log('here');
      const [parentKey, childKey] = name.split('_');
      setFormData(prevFormData => ({
        ...prevFormData,
        [parentKey]: {
          ...prevFormData[parentKey],
          [childKey]: value,
        },
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  const handleMultiple = e => {
    const {name, value} = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: [...(prevFormData[name] || []), value],
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(setCurrentPage(currentPage + 1));
    dispatch(updateData(formData));
    // console.log(formData);
    // You can add your form submission logic here, like sending the data to an API
  };
  return (
    <div>
      <h1 className="underline text-center mb-5 mt-0">
        Information of the child
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-10">
          <div>
            <label className="block text-gray-700">1. Name of the Child:<span className="text-xs text-slate-500 ml-1">(Optional)</span></label>
            <input
              type="text"
              name="childName"
              value={formData?.childName}
              onChange={handleChange}
              className="p-2 w-full border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">2. Age of the Child:<span className="text-xs text-slate-500 ml-1">(Optional)</span></label>
            <input
              type="number"
              name="childAge"
              value={formData?.childAge}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">
              3. Date of Birth of the Child:<span className="text-xs text-slate-500 ml-1">(Optional)</span>
            </label>
            <input
              type="date"
              name="childDob"
              value={formData?.childDob}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">
              4. Place of Birth of the Child:<span className="text-xs text-slate-500 ml-1">(Optional)</span>
            </label>
            <input
              type="text"
              name="childBirthPlace"
              value={formData?.childBirthPlace}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">
              5. Child’s Birth Time (HH:MM AM/PM):<span className="text-xs text-slate-500 ml-1">(Optional)</span>
            </label>
            <input
              type="time"
              name="childBirthTime"
              value={formData?.childBirthTime}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">6. Gestation:<span className="text-xs text-slate-500 ml-1">(Optional)</span></label>
            <select
              name="gestation"
              value={formData?.gestation}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1">
              <option value="">Select</option>
              <option value="preterm">Preterm (before 37 weeks)</option>
              <option value="term">Term (37-41 weeks)</option>
              <option value="post-dated">
                Post-dated (more than 41 weeks)
              </option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">7. Mode of Delivery:<span className="text-xs text-slate-500 ml-1">(Optional)</span></label>
            <select
              name="deliveryMode"
              value={formData?.deliveryMode}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1">
              <option value="">Select</option>
              <option value="normal">Normal</option>
              <option value="c-section">C-section</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">8. Birth Weight:<span className="text-xs text-slate-500 ml-1">(Optional)</span></label>
            <select
              name="birthWeight"
              value={formData?.birthWeight}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1">
              <option value="">Select</option>
              <option value="low">Low birthweight (less than 2.5kg)</option>
              <option value="normal">Normal birthweight (2.5 - 4.5kg)</option>
              <option value="big">Big baby (4.5kg or more)</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">
              9. Gender:<span className="text-xs text-red-500 ml-1">*</span>
            </label>
            <select
              name="gender"
              value={formData?.gender}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1">
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">
              10. Family Type:
              <span className="text-xs text-red-500 ml-1">*</span>
            </label>
            <select
              name="familyType"
              value={formData?.familyType}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1">
              <option value="">Select</option>
              <option value="joint">Joint</option>
              <option value="nuclear">Nuclear</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">
              11. Religion:<span className="text-xs text-red-500 ml-1">*</span>
            </label>
            <select
              name="religion"
              value={formData?.religion}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1">
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
        </div>
        <div className="grid grid-cols-2 gap-10 mt-10">
          <div>
            <label className="block text-gray-700">
              12. Primary Care Giver of the Child:
              <span className="text-xs text-red-500 ml-1">*</span>
            </label>
            <div className="mt-2">
              <input
                checked={formData?.primaryCareGiver?.includes('mother')}
                type="checkbox"
                id="mother"
                value="mother"
                name="primaryCareGiver"
                onChange={handleMultiple}
              />
              <label className="ml-2" htmlFor="mother">
                Mother
              </label>
            </div>
            <div>
              <input
                checked={formData?.primaryCareGiver?.includes('father')}
                type="checkbox"
                id="father"
                value="father"
                name="primaryCareGiver"
                onChange={handleMultiple}
              />
              <label className="ml-2" htmlFor="father">
                Father
              </label>
            </div>
            <div>
              <input
                checked={formData?.primaryCareGiver?.includes('parents')}
                type="checkbox"
                id="parents"
                value="parents"
                name="primaryCareGiver"
                onChange={handleMultiple}
              />
              <label className="ml-2" htmlFor="parents">
                Parents
              </label>
            </div>
            <div>
              <input
                checked={formData?.primaryCareGiver?.includes('grandparents')}
                type="checkbox"
                id="grandparents"
                value="grandparents"
                name="primaryCareGiver"
                onChange={handleMultiple}
              />
              <label className="ml-2" htmlFor="grandparents">
                Grandparents
              </label>
            </div>
            <div>
              <input
                checked={formData?.primaryCareGiver?.includes('siblings')}
                type="checkbox"
                id="siblings"
                value="siblings"
                name="primaryCareGiver"
                onChange={handleMultiple}
              />
              <label className="ml-2" htmlFor="siblings">
                Sibling
              </label>
            </div>
            <div>
              <input
                checked={formData?.primaryCareGiver?.includes('helping-staff')}
                type="checkbox"
                id="helping-staff"
                value="helping-staff"
                name="primaryCareGiver"
                onChange={handleMultiple}
              />
              <label className="ml-2" htmlFor="helping-staff">
                Helping staff
              </label>
            </div>
          </div>
          <div>
            <label className="block text-gray-700">
              13. Educational Qualification of Parent:
              <span className="text-xs text-red-500 ml-1">*</span>
            </label>
            <div className="flex justify-between items-center indent-10 mt-5">
              <label className="mr-5" htmlFor="qualification_mother">
                Mother:
              </label>
              <select
                name="qualification_mother"
                value={formData?.qualification?.mother}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded">
                <option value="">Select</option>
                <option value="below-secondary">Below Secondary</option>
                <option value="secondary">Secondary</option>
                <option value="higher-secondary">Higher Secondary</option>
                <option value="diploma">Diploma</option>
                <option value="graduate">Graduate</option>
                <option value="postgraduate">Postgraduate</option>
                <option value="doctorate">Doctorate</option>
              </select>
            </div>
            <div className="flex items-center justify-between indent-10 mt-5">
              <label className="mr-5" htmlFor="qualification_father">
                Father:
              </label>
              <select
                name="qualification_father"
                value={formData?.qualification?.father}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1">
                <option value="">Select</option>
                <option value="below-secondary">Below Secondary</option>
                <option value="secondary">Secondary</option>
                <option value="higher-secondary">Higher Secondary</option>
                <option value="diploma">Diploma</option>
                <option value="graduate">Graduate</option>
                <option value="postgraduate">Postgraduate</option>
                <option value="doctorate">Doctorate</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-gray-700">
              14. Total Children in House (siblings):
              <span className="text-xs text-red-500 ml-1">*</span>
            </label>
            <select
              name="totalSiblings"
              value={formData?.totalSiblings}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1">
              <option value="">Select</option>
              <option value="1">Single child</option>
              <option value="2">2 children at home</option>
              <option value="3">3 children at home</option>
              <option value="<3">Less than 3 children at home</option>
              <option value=">=3">More than equal to 3 children at home</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">
              15. Child Order (1/2/3):
              <span className="text-xs text-red-500 ml-1">*</span>
            </label>
            <select
              name="childOrder"
              value={formData?.childOrder}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1">
              <option value="">Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="more">More</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">
              16. Number of Younger Siblings:<span className="text-xs text-slate-500 ml-1">(Optional)</span>
            </label>
            <input
              type="number"
              name="youngerSiblings_number"
              value={formData?.youngerSiblings?.number}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">
              17. Age Group of Younger Siblings:<span className="text-xs text-slate-500 ml-1">(Optional)</span>
            </label>
            <select
              name="youngerSiblings_ageGroup"
              value={formData?.youngerSiblings?.ageGroup}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1">
              <option value="">Select</option>
              <option value="">No siblings</option>
              <option value="0-2">0-2 year</option>
              <option value="2-5">2-5 year</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">
              18. Number of Elder Siblings:<span className="text-xs text-slate-500 ml-1">(Optional)</span>
            </label>
            <input
              type="number"
              name="elderSiblings_number"
              value={formData?.elderSiblings?.number}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">
              19. Age Group of Elder Siblings:<span className="text-xs text-slate-500 ml-1">(Optional)</span>
            </label>
            <select
              name="elderSiblings_ageGroup"
              value={formData?.elderSiblings?.ageGroup}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1">
              <option value="">Select</option>
              <option value="">No siblings</option>
              <option value="2-5">2-5 year</option>
              <option value=">5">More than 5 years</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">
              20. Number of Helping Staff for the Child (Specify Gender):<span className="text-xs text-slate-500 ml-1">(Optional)</span>
            </label>
            <input
              type="text"
              name="helpingStaff"
              value={formData?.helpingStaff}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">
              21. Age Range of Helping Staff for the Child (if any):<span className="text-xs text-slate-500 ml-1">(Optional)</span>
            </label>
            <input
              type="text"
              name="helpingStaffAgeRange"
              value={formData?.helpingStaffAgeRange}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">
              22. Mother Tongue of Helping Staff for the Child:<span className="text-xs text-slate-500 ml-1">(Optional)</span>
            </label>
            <input
              type="text"
              name="helpingStaffMotherTongue"
              value={formData?.helpingStaffMotherTongue}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">
              23. Number of Friends of Child:<span className="text-xs text-slate-500 ml-1">(Optional)</span>
            </label>
            <input
              type="number"
              name="numberOfFriends"
              value={formData?.numberOfFriends}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">
              24. Age Range of the Friends of Child:<span className="text-xs text-slate-500 ml-1">(Optional)</span>
            </label>
            <input
              type="text"
              name="friendsAgeRange"
              value={formData?.friendsAgeRange}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">
              25. Age Child Started Media Viewing:<span className="text-xs text-slate-500 ml-1">(Optional)</span>
            </label>
            <input
              type="number"
              name="mediaViewingAge"
              value={formData?.mediaViewingAge}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">
              26. Socioeconomic class:
              <span className="text-xs text-red-500 ml-1">*</span>
            </label>
            <select
              name="socioeconomicClass"
              value={formData?.socioeconomicClass}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1">
              <option value="">Select</option>
              <option value="I">Upper (I)</option>
              <option value="II">Upper Middle (II)</option>
              <option value="III">Lower Middle (III)</option>
              <option value="IV">Upper Lower (IV)</option>
              <option value="V">Lower (V)</option>
            </select>
          </div>
        </div>
        <div className="w-full mt-10 flex justify-end">
          <button
            type="submit"
            className="cursor-pointer py-3 px-8 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition text-lg">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step1;
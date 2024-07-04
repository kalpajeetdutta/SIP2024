import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setCurrentPage, updateData} from '../../../redux/features/dataSlice';

const Step3 = ({currentPage}) => {
  const data = useSelector(state => state.data);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(data);

  const submitData = () => {
    const {childName, childAge, childDob, childBirthPlace, childBirthTime, ...mainData} = formData
    // console.log(mainData);
    fetch('http://localhost:8080/api/data/add',{
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Access-Control-Allow-Credentials': 'true',
      },
      credentials: 'include',
      mode: 'cors',
      body: JSON.stringify(mainData)
    })
    .then(res => {
      if(!res.ok) throw new Error("Network response was not OK");
      return res.json();
    })
    .then(data => console.log('success',data))
    .catch(err => console.log("Error",err))
  };

  const handleChange = e => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleMultiple = e => {
    const {name, value} = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: [...(prevFormData[name] || []), value],
    }));
  };
  const handleSubmit = e => {
    const submitBtn = e.nativeEvent.submitter;
    // console.log(submitBtn);
    if (submitBtn.value === 'previous') {
      dispatch(setCurrentPage(currentPage - 1));
    } else if (submitBtn.value === 'submit') {
      dispatch(updateData(formData));
      submitData();
      // console.log(formData);
    }
    e.preventDefault();
  };
  return (
    <div>
      <h1 className="underline text-center mb-5 mt-0">Parent's awareness</h1>
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-2 gap-6'>
        <div>
          <label className="block text-gray-700">
            38. Do you think it is easy to manage your Child when they are given
            a screen to watch? (e.g., helps manage during household
            chores/shopping)<span className="text-xs text-red-500 ml-1">*</span>
          </label>
          <select
            name="manageWithScreen"
            value={formData?.manageWithScreen}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1">
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="not-sure">Not sure</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700">
            39. Do you think screen time will enhance your Child’s social skills
            such as sharing, waiting for their turn etc?<span className="text-xs text-red-500 ml-1">*</span>
          </label>
          <select
            name="enhancedSocialSkills"
            value={formData?.enhancedSocialSkills}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1">
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="not-sure">Not sure</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700">
            40. Do you think increased screen time will slow down Child’s speech
            and language development?<span className="text-xs text-red-500 ml-1">*</span>
          </label>
          <select
            name="reducedSpeechAndLangDevelopment"
            value={formData?.reducedSpeechAndLangDevelopment}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1">
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="not-sure">Not sure</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700">
            41. Do you think your Child’s communication skills will enhance
            watching screen?<span className="text-xs text-red-500 ml-1">*</span>
          </label>
          <select
            name="enhancedCommunication"
            value={formData?.enhancedCommunication}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1">
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="not-sure">Not sure</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700">
            42. Do you think that increased screen time will lead to attention
            problems in your Child?<span className="text-xs text-red-500 ml-1">*</span>
          </label>
          <select
            name="attentionProblem"
            value={formData?.attentionProblem}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1">
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="not-sure">Not sure</option>
          </select>
        </div>
        </div>
        <div className='my-6'>
          <label className="block text-gray-700">
            43. Which among the following do you feel might be associated with
            screen time in children? If YES, please mention:<span className="text-xs text-red-500 ml-1">*</span>
          </label>
          <div className='mt-3 pl-5'>
          <div>
            <input
              type="checkbox"
              checked={formData?.difficultiesWithScreenTime?.includes("not-aware")}
              id="one"
              value="not-aware"
              name="difficultiesWithScreenTime"
              onChange={handleMultiple}
            />
            <label className="ml-2" htmlFor="one">
              No, not aware of any impact
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              checked={formData?.difficultiesWithScreenTime?.includes("less-sleep")}
              id="two"
              value="less-sleep"
              name="difficultiesWithScreenTime"
              onChange={handleMultiple}
            />
            <label className="ml-2" htmlFor="two">
              Less sleep duration
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              checked={formData?.difficultiesWithScreenTime?.includes("vision-issue")}
              id="three"
              value="vision-issue"
              name="difficultiesWithScreenTime"
              onChange={handleMultiple}
            />
            <label className="ml-2" htmlFor="three">
              Issues in vision
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              checked={formData?.difficultiesWithScreenTime?.includes("diabetes")}
              id="four"
              value="diabetes"
              name="difficultiesWithScreenTime"
              onChange={handleMultiple}
            />
            <label className="ml-2" htmlFor="four">
              Diabetes
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              checked={formData?.difficultiesWithScreenTime?.includes("attention-difficulty")}
              id="five"
              value="attention-difficulty"
              name="difficultiesWithScreenTime"
              onChange={handleMultiple}
            />
            <label className="ml-2" htmlFor="five">
              Difficulty in attention
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              checked={formData?.difficultiesWithScreenTime?.includes("no-physicalDevelop")}
              id="six"
              value="no-physicalDevelop"
              name="difficultiesWithScreenTime"
              onChange={handleMultiple}
            />
            <label className="ml-2" htmlFor="six">
              Reduced physical development
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              checked={formData?.difficultiesWithScreenTime?.includes("obesity")}
              id="seven"
              value="obesity"
              name="difficultiesWithScreenTime"
              onChange={handleMultiple}
            />
            <label className="ml-2" htmlFor="seven">
              Obesity
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              checked={formData?.difficultiesWithScreenTime?.includes("reduced-psycology")}
              id="eigth"
              value="reduced-psycology"
              name="difficultiesWithScreenTime"
              onChange={handleMultiple}
            />
            <label className="ml-2" htmlFor="eigth">
              Reduced psycological well-being
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              checked={formData?.difficultiesWithScreenTime?.includes("behavioral-change")}
              id="nine"
              value="behavioral-change"
              name="difficultiesWithScreenTime"
              onChange={handleMultiple}
            />
            <label className="ml-2" htmlFor="nine">
              Change in social behavior
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              checked={formData?.difficultiesWithScreenTime?.includes("hyperactivity-inattention")}
              id="ten"
              value="hyperactivity-inattention"
              name="difficultiesWithScreenTime"
              onChange={handleMultiple}
            />
            <label className="ml-2" htmlFor="ten">
              Behavioral difficulties as hyperactivity-inattention
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              checked={formData?.difficultiesWithScreenTime?.includes("heart-disease")}
              id="eleven"
              value="heart-disease"
              name="difficultiesWithScreenTime"
              onChange={handleMultiple}
            />
            <label className="ml-2" htmlFor="eleven">
              Heart disease
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              checked={formData?.difficultiesWithScreenTime?.includes("reduced-speechAndLangDevelopment")}
              id="twelve"
              value="reduced-speechAndLangDevelopment"
              name="difficultiesWithScreenTime"
              onChange={handleMultiple}
            />
            <label className="ml-2" htmlFor="twelve">
              Reduced Speech and language development
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              checked={formData?.difficultiesWithScreenTime?.includes("cognition-difficulty")}
              id="thirteen"
              value="cognition-difficulty"
              name="difficultiesWithScreenTime"
              onChange={handleMultiple}
            />
            <label className="ml-2" htmlFor="thirteen">
              Difficulty in Cognition
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              checked={formData?.difficultiesWithScreenTime?.includes("reduced-vocabulary")}
              id="fourteen"
              value="reduced-vocabulary"
              name="difficultiesWithScreenTime"
              onChange={handleMultiple}
            />
            <label className="ml-2" htmlFor="fourteen">
              Reduced expressive vocabulary
            </label>
          </div>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-6'>
        <div>
          <label className="block text-gray-700">
            44. Are you aware of any guidelines set for screen time in children?
            If YES, Please specify:<span className="text-xs text-slate-500 ml-1">(Optional)</span>
          </label>
          <input
            type="text"
            name="awareOfGuidelines"
            value={formData?.awareOfGuidelines}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div>
          <label className="block text-gray-700">
            45. Does your family have set any guidelines or restrictions for
            screen time in children? If YES, Please specify:<span className="text-xs text-slate-500 ml-1">(Optional)</span>
          </label>
          <input
            type="text"
            name="familyGuidelines"
            value={formData?.familyGuidelines}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div>
          <label className="block text-gray-700">
            46. Do you think you have to restrict screen time for your children?<span className="text-xs text-red-500 ml-1">*</span>
          </label>
          <select
            name="restrictScreenTime"
            value={formData?.restrictScreenTime}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1">
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="not-sure">Not sure</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700">
            47. Does your Child has ownership of electronic media/gadgets for
            their personal use?<span className="text-xs text-red-500 ml-1">*</span>
          </label>
          <select
            name="ownership"
            value={formData?.ownership}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1">
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700">
            48. Does your Child have<span className="text-xs text-red-500 ml-1">*</span>
          </label>
          <select
            name="childHave"
            value={formData?.childHave}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1">
            <option value="">Select</option>
            <option value="non-interactive">non-interactive / passive media viewing</option>
            <option value="interactive">
              interactive co-viewing with parent / caretaker
            </option>
          </select>
        </div>
        </div>
        <div className="w-full flex mt-6 justify-end">
          {currentPage >= 1 && (
            <button
              type="submit"
              name="previous"
              value="previous"
              className="mr-10 cursor-pointer py-3 px-8 bg-yellow-600 text-white font-bold rounded-md hover:bg-yellow-700 transition text-lg">
              Previous
            </button>
          )}
          <button
            type="submit"
            name="submit"
            value="submit"
            className="cursor-pointer py-3 px-8 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition text-lg">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step3;

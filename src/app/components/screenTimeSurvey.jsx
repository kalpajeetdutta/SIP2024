import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setCurrentPage, updateData} from '../../../redux/features/dataSlice';

const Step2 = ({currentPage}) => {
  const data = useSelector(state => state.data);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(data);

  const handleChange = e => {
    const {name, value} = e.target;
    if (name.includes('_')) {
      // console.log('here');
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
  const handleSubmit = e => {
    const submitBtn = e.nativeEvent.submitter;
    // console.log(submitBtn);
    if (submitBtn.value === 'previous') {
      dispatch(setCurrentPage(currentPage - 1));
    } else if (submitBtn.value === 'next') {
      dispatch(updateData(formData));
      dispatch(setCurrentPage(currentPage + 1));
      // console.log(data);
    }
    e.preventDefault();
  };
  return (
    <div>
      <h1 className="underline text-center mb-5 mt-0">
        Screen-time survey questions (Weekdays and Weekends)
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700">
              27. During Weekdays, time spent by Child in viewing electronic
              devices (time is per day):
              <span className="text-xs text-red-500 ml-1">*</span>
            </label>
            <div className="pl-5">
              <div className="w-full flex justify-between items-center mt-2">
                <label className="mr-5 flex-1" htmlFor="weekdays_tv">
                  TV viewing hours per day by the child:
                </label>
                <select
                  name="weekdays_tv"
                  onChange={handleChange}
                  value={formData?.weekdays?.tv}
                  className="flex-1 p-2 border border-gray-300 rounded">
                  <option value="">Select</option>
                  <option value="no-device">
                    No electronic device at home
                  </option>
                  <option value="0h">Zero hour</option>
                  <option value="<2h">{'<'}2 hours</option>
                  <option value="2-4h">2 to 4 hours</option>
                  <option value="4-6h">4 to 6 hours</option>
                  <option value="6-8h">6 to 8 hours</option>
                  <option value=">8h">More than 8 hours</option>
                </select>
              </div>
              <div className="w-full flex justify-between items-center mt-2">
                <label className="mr-5 flex-1" htmlFor="weekdays_smartphone">
                  Smartphone use by the child:
                </label>
                <select
                  name="weekdays_smartphone"
                  value={formData?.weekdays?.smartphone}
                  onChange={handleChange}
                  className="flex-1 p-2 border border-gray-300 rounded">
                  <option value="">Select</option>
                  <option value="no-device">
                    No electronic device at home
                  </option>
                  <option value="0h">Zero hour</option>
                  <option value="<2h">{'<'}2 hours</option>
                  <option value="2-4h">2 to 4 hours</option>
                  <option value="4-6h">4 to 6 hours</option>
                  <option value="6-8h">6 to 8 hours</option>
                  <option value=">8h">More than 8 hours</option>
                </select>
              </div>
              <div className="w-full flex justify-between items-center mt-2">
                <label className="mr-5 flex-1" htmlFor="weekdays_laptop">
                  Laptop use by the child:
                </label>
                <select
                  name="weekdays_laptop"
                  value={formData?.weekdays?.laptop}
                  onChange={handleChange}
                  className="flex-1 p-2 border border-gray-300 rounded">
                  <option value="">Select</option>
                  <option value="no-device">
                    No electronic device at home
                  </option>
                  <option value="0h">Zero hour</option>
                  <option value="<2h">{'<'}2 hours</option>
                  <option value="2-4h">2 to 4 hours</option>
                  <option value="4-6h">4 to 6 hours</option>
                  <option value="6-8h">6 to 8 hours</option>
                  <option value=">8h">More than 8 hours</option>
                </select>
              </div>
              <div className="w-full flex justify-between items-center mt-2">
                <label className="mr-5 flex-1" htmlFor="weekdays_tablet">
                  Tablet use by the child:
                </label>
                <select
                  name="weekdays_tablet"
                  value={formData?.weekdays?.tablet}
                  onChange={handleChange}
                  className="flex-1 p-2 border border-gray-300 rounded">
                  <option value="">Select</option>
                  <option value="no-device">
                    No electronic device at home
                  </option>
                  <option value="0h">Zero hour</option>
                  <option value="<2h">{'<'}2 hours</option>
                  <option value="2-4h">2 to 4 hours</option>
                  <option value="4-6h">4 to 6 hours</option>
                  <option value="6-8h">6 to 8 hours</option>
                  <option value=">8h">More than 8 hours</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-gray-700">
              28. During Weekends, time spent by Child in viewing electronic
              devices (time is per day):
              <span className="text-xs text-red-500 ml-1">*</span>
            </label>
            <div className="pl-5">
              <div className="w-full flex justify-between items-center mt-2">
                <label className="mr-5 flex-1" htmlFor="weekends_tv">
                  TV viewing hours per day by the child:
                </label>
                <select
                  name="weekends_tv"
                  value={formData?.weekends?.tv}
                  onChange={handleChange}
                  className="flex-1 p-2 border border-gray-300 rounded">
                  <option value="">Select</option>
                  <option value="no-device">
                    No electronic device at home
                  </option>
                  <option value="0h">Zero hour</option>
                  <option value="<2h">{'<'}2 hours</option>
                  <option value="2-4h">2 to 4 hours</option>
                  <option value="4-6h">4 to 6 hours</option>
                  <option value="6-8h">6 to 8 hours</option>
                  <option value=">8h">More than 8 hours</option>
                </select>
              </div>
              <div className="w-full flex justify-between items-center mt-2">
                <label className="mr-5 flex-1" htmlFor="weekends_smartphone">
                  Smartphone use by the child:
                </label>
                <select
                  name="weekends_smartphone"
                  value={formData?.weekends?.smartphone}
                  onChange={handleChange}
                  className="flex-1 p-2 border border-gray-300 rounded">
                  <option value="">Select</option>
                  <option value="no-device">
                    No electronic device at home
                  </option>
                  <option value="0h">Zero hour</option>
                  <option value="<2h">{'<'}2 hours</option>
                  <option value="2-4h">2 to 4 hours</option>
                  <option value="4-6h">4 to 6 hours</option>
                  <option value="6-8h">6 to 8 hours</option>
                  <option value=">8h">More than 8 hours</option>
                </select>
              </div>
              <div className="w-full flex justify-between items-center mt-2">
                <label className="mr-5 flex-1" htmlFor="weekends_laptop">
                  Laptop use by the child:
                </label>
                <select
                  name="weekends_laptop"
                  value={formData?.weekends?.laptop}
                  onChange={handleChange}
                  className="flex-1 p-2 border border-gray-300 rounded">
                  <option value="">Select</option>
                  <option value="no-device">
                    No electronic device at home
                  </option>
                  <option value="0h">Zero hour</option>
                  <option value="<2h">{'<'}2 hours</option>
                  <option value="2-4h">2 to 4 hours</option>
                  <option value="4-6h">4 to 6 hours</option>
                  <option value="6-8h">6 to 8 hours</option>
                  <option value=">8h">More than 8 hours</option>
                </select>
              </div>
              <div className="w-full flex justify-between items-center mt-2">
                <label className="mr-5 flex-1" htmlFor="weekends_tablet">
                  Tablet use by the child:
                </label>
                <select
                  name="weekends_tablet"
                  value={formData?.weekends?.tablet}
                  onChange={handleChange}
                  className="flex-1 p-2 border border-gray-300 rounded">
                  <option value="">Select</option>
                  <option value="no-device">
                    No electronic device at home
                  </option>
                  <option value="0h">Zero hour</option>
                  <option value="<2h">{'<'}2 hours</option>
                  <option value="2-4h">2 to 4 hours</option>
                  <option value="4-6h">4 to 6 hours</option>
                  <option value="6-8h">6 to 8 hours</option>
                  <option value=">8h">More than 8 hours</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-gray-700">
              29. Purpose of Screen hours spend by the Child during Weekdays
              (time is per day):
              <span className="text-xs text-red-500 ml-1">*</span>
            </label>
            <div className="pl-5">
              <div className="w-full flex justify-between items-center mt-2">
                <label className="mr-5 flex-1" htmlFor="weekdaysScreenPurpose_education">
                  For education:
                </label>
                <select
                  name="weekdaysScreenPurpose_education"
                  value={formData?.weekdaysScreenPurpose?.education}
                  onChange={handleChange}
                  className="flex-1 p-2 border border-gray-300 rounded">
                  <option value="">Select</option>
                  <option value="no-device">
                    No electronic device at home
                  </option>
                  <option value="0h">Zero hour</option>
                  <option value="<2h">{'<'}2 hours</option>
                  <option value="2-4h">2 to 4 hours</option>
                  <option value="4-6h">4 to 6 hours</option>
                  <option value="6-8h">6 to 8 hours</option>
                  <option value=">8h">More than 8 hours</option>
                </select>
              </div>
              <div className="w-full flex justify-between items-center mt-2">
                <label className="mr-5 flex-1" htmlFor="weekdaysScreenPurpose_entertainment">
                  For entertainment:
                </label>
                <select
                  name="weekdaysScreenPurpose_entertainment"
                  value={formData?.weekdaysScreenPurpose?.entertainment}
                  onChange={handleChange}
                  className="flex-1 p-2 border border-gray-300 rounded">
                  <option value="">Select</option>
                  <option value="no-device">
                    No electronic device at home
                  </option>
                  <option value="0h">Zero hour</option>
                  <option value="<2h">{'<'}2 hours</option>
                  <option value="2-4h">2 to 4 hours</option>
                  <option value="4-6h">4 to 6 hours</option>
                  <option value="6-8h">6 to 8 hours</option>
                  <option value=">8h">More than 8 hours</option>
                </select>
              </div>
              <div className="w-full flex justify-between items-center mt-2">
                <label className="mr-5 flex-1" htmlFor="weekdaysScreenPurpose_playingGames">
                  For playing games:
                </label>
                <select
                  name="weekdaysScreenPurpose_playingGames"
                  value={formData?.weekdaysScreenPurpose?.playingGames}
                  onChange={handleChange}
                  className="flex-1 p-2 border border-gray-300 rounded">
                  <option value="">Select</option>
                  <option value="no-device">
                    No electronic device at home
                  </option>
                  <option value="0h">Zero hour</option>
                  <option value="<2h">{'<'}2 hours</option>
                  <option value="2-4h">2 to 4 hours</option>
                  <option value="4-6h">4 to 6 hours</option>
                  <option value="6-8h">6 to 8 hours</option>
                  <option value=">8h">More than 8 hours</option>
                </select>
              </div>
              <div className="w-full flex justify-between items-center mt-2">
                <label className="mr-5 flex-1" htmlFor="weekdaysScreenPurpose_socialConnect">
                  For social connect by the child (video calls):
                </label>
                <select
                  name="weekdaysScreenPurpose_socialConnect"
                  value={formData?.weekdaysScreenPurpose?.socialConnect}
                  onChange={handleChange}
                  className="flex-1 p-2 border border-gray-300 rounded">
                  <option value="">Select</option>
                  <option value="no-device">
                    No electronic device at home
                  </option>
                  <option value="0h">Zero hour</option>
                  <option value="<2h">{'<'}2 hours</option>
                  <option value="2-4h">2 to 4 hours</option>
                  <option value="4-6h">4 to 6 hours</option>
                  <option value="6-8h">6 to 8 hours</option>
                  <option value=">8h">More than 8 hours</option>
                </select>
              </div>
              <div className="w-full flex justify-between items-center mt-2">
                <label className="mr-5 flex-1" htmlFor="weekdaysScreenPurpose_meals">
                  During meals by the child:
                </label>
                <select
                  name="weekdaysScreenPurpose_meals"
                  value={formData?.weekdaysScreenPurpose?.meals}
                  onChange={handleChange}
                  className="flex-1 p-2 border border-gray-300 rounded">
                  <option value="">Select</option>
                  <option value="no-device">
                    No electronic device at home
                  </option>
                  <option value="0h">Zero hour</option>
                  <option value="<2h">{'<'}2 hours</option>
                  <option value="2-4h">2 to 4 hours</option>
                  <option value="4-6h">4 to 6 hours</option>
                  <option value="6-8h">6 to 8 hours</option>
                  <option value=">8h">More than 8 hours</option>
                </select>
              </div>
              <div className="w-full flex justify-between items-center mt-2">
                <label className="mr-5 flex-1" htmlFor="weekdaysScreenPurpose_beforeBed">
                  Just before bed time by the child:
                </label>
                <select
                  name="weekdaysScreenPurpose_beforeBed"
                  value={formData?.weekdaysScreenPurpose?.beforeBed}
                  onChange={handleChange}
                  className="flex-1 p-2 border border-gray-300 rounded">
                  <option value="">Select</option>
                  <option value="no-device">
                    No electronic device at home
                  </option>
                  <option value="0h">Zero hour</option>
                  <option value="<2h">{'<'}2 hours</option>
                  <option value="2-4h">2 to 4 hours</option>
                  <option value="4-6h">4 to 6 hours</option>
                  <option value="6-8h">6 to 8 hours</option>
                  <option value=">8h">More than 8 hours</option>
                </select>
              </div>
              <div className="w-full flex justify-between items-center mt-2">
                <label className="mr-5 flex-1" htmlFor="weekdaysScreenPurpose_engaging">
                  For engaging the child (when you are busy):
                </label>
                <select
                  name="weekdaysScreenPurpose_engaging"
                  value={formData?.weekdaysScreenPurpose?.engaging}
                  onChange={handleChange}
                  className="flex-1 p-2 border border-gray-300 rounded">
                  <option value="">Select</option>
                  <option value="no-device">
                    No electronic device at home
                  </option>
                  <option value="0h">Zero hour</option>
                  <option value="<2h">{'<'}2 hours</option>
                  <option value="2-4h">2 to 4 hours</option>
                  <option value="4-6h">4 to 6 hours</option>
                  <option value="6-8h">6 to 8 hours</option>
                  <option value=">8h">More than 8 hours</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-gray-700">
              30. Purpose of Screen hours spend by the Child during Weekends
              (time is per day):
              <span className="text-xs text-red-500 ml-1">*</span>
            </label>
            <div className="pl-5">
              <div className="w-full flex justify-between items-center mt-2">
                <label className="mr-5 flex-1" htmlFor="weekendsScreenPurpose_education">
                  For education:
                </label>
                <select
                  name="weekendsScreenPurpose_education"
                  value={formData?.weekendsScreenPurpose?.education}
                  onChange={handleChange}
                  className="flex-1 p-2 border border-gray-300 rounded">
                  <option value="">Select</option>
                  <option value="no-device">
                    No electronic device at home
                  </option>
                  <option value="0h">Zero hour</option>
                  <option value="<2h">{'<'}2 hours</option>
                  <option value="2-4h">2 to 4 hours</option>
                  <option value="4-6h">4 to 6 hours</option>
                  <option value="6-8h">6 to 8 hours</option>
                  <option value=">8h">More than 8 hours</option>
                </select>
              </div>
              <div className="w-full flex justify-between items-center mt-2">
                <label className="mr-5 flex-1" htmlFor="weekendsScreenPurpose_entertainment">
                  For entertainment:
                </label>
                <select
                  name="weekendsScreenPurpose_entertainment"
                  value={formData?.weekendsScreenPurpose?.entertainment}
                  onChange={handleChange}
                  className="flex-1 p-2 border border-gray-300 rounded">
                  <option value="">Select</option>
                  <option value="no-device">
                    No electronic device at home
                  </option>
                  <option value="0h">Zero hour</option>
                  <option value="<2h">{'<'}2 hours</option>
                  <option value="2-4h">2 to 4 hours</option>
                  <option value="4-6h">4 to 6 hours</option>
                  <option value="6-8h">6 to 8 hours</option>
                  <option value=">8h">More than 8 hours</option>
                </select>
              </div>
              <div className="w-full flex justify-between items-center mt-2">
                <label className="mr-5 flex-1" htmlFor="weekendsScreenPurpose_playingGames">
                  For playing games:
                </label>
                <select
                  name="weekendsScreenPurpose_playingGames"
                  value={formData?.weekendsScreenPurpose?.playingGames}
                  onChange={handleChange}
                  className="flex-1 p-2 border border-gray-300 rounded">
                  <option value="">Select</option>
                  <option value="no-device">
                    No electronic device at home
                  </option>
                  <option value="0h">Zero hour</option>
                  <option value="<2h">{'<'}2 hours</option>
                  <option value="2-4h">2 to 4 hours</option>
                  <option value="4-6h">4 to 6 hours</option>
                  <option value="6-8h">6 to 8 hours</option>
                  <option value=">8h">More than 8 hours</option>
                </select>
              </div>
              <div className="w-full flex justify-between items-center mt-2">
                <label className="mr-5 flex-1" htmlFor="weekendsScreenPurpose_socialConnect">
                  For social connect by the child (video calls):
                </label>
                <select
                  name="weekendsScreenPurpose_socialConnect"
                  value={formData?.weekendsScreenPurpose?.socialConnect}
                  onChange={handleChange}
                  className="flex-1 p-2 border border-gray-300 rounded">
                  <option value="">Select</option>
                  <option value="no-device">
                    No electronic device at home
                  </option>
                  <option value="0h">Zero hour</option>
                  <option value="<2h">{'<'}2 hours</option>
                  <option value="2-4h">2 to 4 hours</option>
                  <option value="4-6h">4 to 6 hours</option>
                  <option value="6-8h">6 to 8 hours</option>
                  <option value=">8h">More than 8 hours</option>
                </select>
              </div>
              <div className="w-full flex justify-between items-center mt-2">
                <label className="mr-5 flex-1" htmlFor="weekendsScreenPurpose_meals">
                  During meals by the child:
                </label>
                <select
                  name="weekendsScreenPurpose_meals"
                  value={formData?.weekendsScreenPurpose?.meals}
                  onChange={handleChange}
                  className="flex-1 p-2 border border-gray-300 rounded">
                  <option value="">Select</option>
                  <option value="no-device">
                    No electronic device at home
                  </option>
                  <option value="0h">Zero hour</option>
                  <option value="<2h">{'<'}2 hours</option>
                  <option value="2-4h">2 to 4 hours</option>
                  <option value="4-6h">4 to 6 hours</option>
                  <option value="6-8h">6 to 8 hours</option>
                  <option value=">8h">More than 8 hours</option>
                </select>
              </div>
              <div className="w-full flex justify-between items-center mt-2">
                <label className="mr-5 flex-1" htmlFor="weekendsScreenPurpose_beforeBed">
                  Just before bed time by the child:
                </label>
                <select
                  name="weekendsScreenPurpose_beforeBed"
                  value={formData?.weekendsScreenPurpose?.beforeBed}
                  onChange={handleChange}
                  className="flex-1 p-2 border border-gray-300 rounded">
                  <option value="">Select</option>
                  <option value="no-device">
                    No electronic device at home
                  </option>
                  <option value="0h">Zero hour</option>
                  <option value="<2h">{'<'}2 hours</option>
                  <option value="2-4h">2 to 4 hours</option>
                  <option value="4-6h">4 to 6 hours</option>
                  <option value="6-8h">6 to 8 hours</option>
                  <option value=">8h">More than 8 hours</option>
                </select>
              </div>
              <div className="w-full flex justify-between items-center mt-2">
                <label className="mr-5 flex-1" htmlFor="weekendsScreenPurpose_engaging">
                  For engaging the child (when you are busy):
                </label>
                <select
                  name="weekendsScreenPurpose_engaging"
                  value={formData?.weekendsScreenPurpose?.engaging}
                  onChange={handleChange}
                  className="flex-1 p-2 border border-gray-300 rounded">
                  <option value="">Select</option>
                  <option value="no-device">
                    No electronic device at home
                  </option>
                  <option value="0h">Zero hour</option>
                  <option value="<2h">{'<'}2 hours</option>
                  <option value="2-4h">2 to 4 hours</option>
                  <option value="4-6h">4 to 6 hours</option>
                  <option value="6-8h">6 to 8 hours</option>
                  <option value=">8h">More than 8 hours</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-gray-700">
              31. Do you think children will eat better only if you feed them
              while watching the screen?
              <span className="text-xs text-red-500 ml-1">*</span>
            </label>
            <select
              name="eatBetterWithScreen"
              value={formData?.eatBetterWithScreen}
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
              32. Average Screen time of the Primary caretaker of the Child
              (time is per day):
              <span className="text-xs text-red-500 ml-1">*</span>
            </label>
            <select
              name="caretakerScreenTime"
              value={formData?.caretakerScreenTime}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1">
              <option value="">Select</option>
              <option value="yes">No screen time exposure</option>
              <option value="no">{'<'}2 hours</option>
              <option value="not-sure">2-4 hours</option>
              <option value="not-sure">4-6 hours</option>
              <option value="not-sure">6-8 hours</option>
              <option value="not-sure">More than 8 hours</option>
            </select>
          </div>
        </div>
        <div className="mt-6">
          <label className="block text-gray-700">
            33. What does the Child watch among following programs per day
            during his or her screen time?(Specify hours of watching)
            <span className="text-xs text-red-500 ml-1">*</span>
          </label>
          <div className="pl-5">
            <div className="w-full flex justify-between items-center mt-2">
              <label className="mr-5 flex-1" htmlFor="programsWatched_animatedCartoons">
                Animated cartoons:
              </label>
              <select
                name="programsWatched_animatedCartoons"
                value={formData?.programsWatched?.animatedCartoons}
                onChange={handleChange}
                className="flex-1 p-2 border border-gray-300 rounded">
                <option value="">Select</option>
                <option value="0h">0 hour</option>
                <option value="<2h">{'<'}2 hours</option>
                <option value="2-4h">2 to 4 hours</option>
                <option value="4-6h">4 to 6 hours</option>
                <option value="6-8h">6 to 8 hours</option>
                <option value=">8h">More than 8 hours</option>
              </select>
            </div>
            <div className="w-full flex justify-between items-center mt-2">
              <label className="mr-5 flex-1" htmlFor="programsWatched_nonAnimatedCartoons">
                Non - animated cartoons:
              </label>
              <select
                name="programsWatched_nonAnimatedCartoons"
                value={formData?.programsWatched?.nonAnimatedCartoons}
                onChange={handleChange}
                className="flex-1 p-2 border border-gray-300 rounded">
                <option value="">Select</option>
                <option value="0h">0 hour</option>
                <option value="<2h">{'<'}2 hours</option>
                <option value="2-4h">2 to 4 hours</option>
                <option value="4-6h">4 to 6 hours</option>
                <option value="6-8h">6 to 8 hours</option>
                <option value=">8h">More than 8 hours</option>
              </select>
            </div>
            <div className="w-full flex justify-between items-center mt-2">
              <label className="mr-5 flex-1" htmlFor="programsWatched_movieAnimated">
                Movie (Animated):
              </label>
              <select
                name="programsWatched_movieAnimated"
                value={formData?.programsWatched?.movieAnimated}
                onChange={handleChange}
                className="flex-1 p-2 border border-gray-300 rounded">
                <option value="">Select</option>
                <option value="0h">0 hour</option>
                <option value="<2h">{'<'}2 hours</option>
                <option value="2-4h">2 to 4 hours</option>
                <option value="4-6h">4 to 6 hours</option>
                <option value="6-8h">6 to 8 hours</option>
                <option value=">8h">More than 8 hours</option>
              </select>
            </div>
            <div className="w-full flex justify-between items-center mt-2">
              <label className="mr-5 flex-1" htmlFor="programsWatched_movieNonAnimated">
                Movie (Non-animated):
              </label>
              <select
                name="programsWatched_movieNonAnimated"
                value={formData?.programsWatched?.movieNonAnimated}
                onChange={handleChange}
                className="flex-1 p-2 border border-gray-300 rounded">
                <option value="">Select</option>
                <option value="0h">0 hour</option>
                <option value="<2h">{'<'}2 hours</option>
                <option value="2-4h">2 to 4 hours</option>
                <option value="4-6h">4 to 6 hours</option>
                <option value="6-8h">6 to 8 hours</option>
                <option value=">8h">More than 8 hours</option>
              </select>
            </div>
            <div className="w-full flex justify-between items-center mt-2">
              <label className="mr-5 flex-1" htmlFor="programsWatched_songs">
                Songs:
              </label>
              <select
                name="programsWatched_songs"
                value={formData?.programsWatched?.songs}
                onChange={handleChange}
                className="flex-1 p-2 border border-gray-300 rounded">
                <option value="">Select</option>
                <option value="0h">0 hour</option>
                <option value="<2h">{'<'}2 hours</option>
                <option value="2-4h">2 to 4 hours</option>
                <option value="4-6h">4 to 6 hours</option>
                <option value="6-8h">6 to 8 hours</option>
                <option value=">8h">More than 8 hours</option>
              </select>
            </div>
            <div className="w-full flex justify-between items-center mt-2">
              <label className="mr-5 flex-1" htmlFor="programsWatched_rhymes">
                Rhymes:
              </label>
              <select
                name="programsWatched_rhymes"
                value={formData?.programsWatched?.rhymes}
                onChange={handleChange}
                className="flex-1 p-2 border border-gray-300 rounded">
                <option value="">Select</option>
                <option value="0h">0 hour</option>
                <option value="<2h">{'<'}2 hours</option>
                <option value="2-4h">2 to 4 hours</option>
                <option value="4-6h">4 to 6 hours</option>
                <option value="6-8h">6 to 8 hours</option>
                <option value=">8h">More than 8 hours</option>
              </select>
            </div>
            <div className="w-full flex justify-between items-center mt-2">
              <label className="mr-5 flex-1" htmlFor="programsWatched_knowledge">
                Knowledge based (News / web series / any more):
              </label>
              <select
                name="programsWatched_knowledge"
                value={formData?.programsWatched?.knowledge}
                onChange={handleChange}
                className="flex-1 p-2 border border-gray-300 rounded">
                <option value="">Select</option>
                <option value="0h">0 hour</option>
                <option value="<2h">{'<'}2 hours</option>
                <option value="2-4h">2 to 4 hours</option>
                <option value="4-6h">4 to 6 hours</option>
                <option value="6-8h">6 to 8 hours</option>
                <option value=">8h">More than 8 hours</option>
              </select>
            </div>
            <div className="w-full flex justify-between items-center mt-2">
              <label className="mr-5 flex-1" htmlFor="programsWatched_spiritual">
                Spiritual (bhajan):
              </label>
              <select
                name="programsWatched_spiritual"
                value={formData?.programsWatched?.spiritual}
                onChange={handleChange}
                className="flex-1 p-2 border border-gray-300 rounded">
                <option value="">Select</option>
                <option value="0h">0 hour</option>
                <option value="<2h">{'<'}2 hours</option>
                <option value="2-4h">2 to 4 hours</option>
                <option value="4-6h">4 to 6 hours</option>
                <option value="6-8h">6 to 8 hours</option>
                <option value=">8h">More than 8 hours</option>
              </select>
            </div>
            <div className="w-full flex justify-between items-center mt-2">
              <label className="mr-5 flex-1" htmlFor="programsWatched_serials">
                Serials:
              </label>
              <select
                name="programsWatched_serials"
                value={formData?.programsWatched?.serials}
                onChange={handleChange}
                className="flex-1 p-2 border border-gray-300 rounded">
                <option value="">Select</option>
                <option value="0h">0 hour</option>
                <option value="<2h">{'<'}2 hours</option>
                <option value="2-4h">2 to 4 hours</option>
                <option value="4-6h">4 to 6 hours</option>
                <option value="6-8h">6 to 8 hours</option>
                <option value=">8h">More than 8 hours</option>
              </select>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-6">
          <div>
            <label className="block text-gray-700">
              34. If Child watches any other program, please specify:<span className="text-xs font-light text-slate-500 ml-1">(Optional)</span>
            </label>
            <input
              type="text"
              name="otherPrograms"
              value={formData?.otherPrograms || ''}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">
              35. While attending to the screen your Child prefers which from of
              input:<span className="text-xs text-red-500 ml-1">*</span>
            </label>
            <select
              name="preferedInput"
              value={formData?.preferedInput}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1">
              <option value="">Select</option>
              <option value="0h">Both auditory and visual input</option>
              <option value="<2h">Only visual input</option>
              <option value="2-4h">Only auditory input</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">
              36. In comparison to peer group (same age kids), where do you feel
              your Child stand in speech and language skills:
              <span className="text-xs text-red-500 ml-1">*</span>
            </label>
            <select
              name="speechAndLangSkills"
              value={formData?.speechAndLangSkills}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1">
              <option value="">Select</option>
              <option value="same">At par with peer group</option>
              <option value="better">Better than the peer group</option>
              <option value="poor">Poor than the peer group</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">
              37. Outdoor physical activity/play of the Child per day:
              <span className="text-xs text-red-500 ml-1">*</span>
            </label>
            <select
              name="outdoorActivity"
              value={formData?.outdoorActivity}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1">
              <option value="">Select</option>
              <option value="0h">No physical activity</option>
              <option value="<2h">{'<'}2 hours</option>
              <option value="2-4h">2-4 hours</option>
              <option value="4-6h">4-6 hours</option>
              <option value="6-8h">6-8 hours</option>
              <option value=">8h">More than 8 hours</option>
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
            name="next"
            value="next"
            className="cursor-pointer py-3 px-8 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition text-lg">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step2;

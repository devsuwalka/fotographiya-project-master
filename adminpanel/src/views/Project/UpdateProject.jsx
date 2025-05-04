import React, { useEffect } from 'react';
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CForm,
    CFormInput,
    CFormLabel,
    CFormSelect,
    CRow,
} from '@coreui/react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {  EditProject } from '../../Redux/ProjectSlice';
import { useNavigate, useParams } from 'react-router-dom';
import PendingProject from '../Pending/PendingProject';

const UpdateProject = () => {
    const { register, handleSubmit, formState: { errors },reset } = useForm();
    const { ProjectList } = useSelector((state) => state.projects);
    const navigate = useNavigate()
    console.log('ProjectList.....');
    console.log(ProjectList);
    
    const {id} = useParams()
    const dispatch = useDispatch();

    const singlesubcatlist = ProjectList?.find((ele) => {
        return ele._id == id
    })
    console.log('sin', singlesubcatlist)

    useEffect(() => {
        reset(singlesubcatlist)
    }, [dispatch])

    function submitdata(data) {
        console.log(data);
        dispatch(EditProject(data))
        alert("Updated...........")
        navigate('/Dashboard')

    }

    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4 my-3">
                    <CCardHeader className='bg-dark text-light'>
                        <strong>Add Wedding Project</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CForm method="post" onSubmit={handleSubmit(submitdata)}>
                            {/* Wedding Name */}
                            <div className="mb-3">
                                <CFormLabel>Wedding Name</CFormLabel>
                                <CFormInput
                                    type="text"
                                    placeholder="Type the Name"
                                    {...register('wedding_name', { required: 'Wedding name is required.' })}
                                />
                                {errors.wedding_name && <span className="text-danger">{errors.wedding_name.message}</span>}
                            </div>

                            {/* Package */}
                            <div className="mb-3">
                                <CFormLabel>Package</CFormLabel>
                                <CFormSelect {...register('Package', { required: 'Package selection is required.' })}>
                                    <option value="">Select Package</option>
                                    <option value="Gold">Gold</option>
                                    <option value="Silver">Silver</option>
                                    <option value="Platinum">Platinum</option>
                                </CFormSelect>
                                {errors.package && <span className="text-danger">{errors.package.message}</span>}
                            </div>

                            {/* Mobile Number */}
                            <div className="mb-3">
                                <CFormLabel>Mobile Number</CFormLabel>
                                <CFormInput
                                    type="text"
                                    placeholder="Enter Mobile Number"
                                    {...register('Mobile_Number', { required: 'Mobile number is required.' })}
                                />
                                {errors.mobile_number && <span className="text-danger">{errors.mobile_number.message}</span>}
                            </div>

                            {/* Date */}
                            <div className="mb-3">
                                <CFormLabel>Date</CFormLabel>
                                <CFormInput type="date" {...register('Date', { required: 'Date is required.' })} />
                                {errors.date && <span className="text-danger">{errors.date.message}</span>}
                            </div>

                            {/* Time */}
                            <div className="mb-3">
                                <CFormLabel>Time</CFormLabel>
                                <CFormInput type="time" {...register('time', { required: 'Time is required.' })} />
                                {errors.time && <span className="text-danger">{errors.time.message}</span>}
                            </div>

                            {/* Months */}
                            <div className="mb-3">
                                <CFormLabel>Months</CFormLabel>
                                <CFormInput type="number" min="0" {...register('months')} />
                            </div>

                            {/* Days */}
                            <div className="mb-3">
                                <CFormLabel>Days</CFormLabel>
                                <CFormInput type="number" min="0" {...register('days')} />
                            </div>

                            {/* Hours */}
                            <div className="mb-3">
                                <CFormLabel>Hours</CFormLabel>
                                <CFormInput type="number" min="0" max="23" {...register('hours')} />
                            </div>

                            {/* Minutes */}
                            <div className="mb-3">
                                <CFormLabel>Minutes</CFormLabel>
                                <CFormInput type="number" min="0" max="59" {...register('miniutes')} />
                            </div>

                            {/* Pin */}
                            <div className="mb-3">
                                <CFormLabel>Pin</CFormLabel>
                                <CFormInput type="number" {...register('pin')} />
                            </div>



                            {/* Select Members */}
                            <div className="mb-3">
                                <CFormLabel>Select Members</CFormLabel>
                                <CFormSelect {...register('members')}>
                                    <option value="">Select Members</option>
                                    <option value="John Doe">John Doe</option>
                                    <option value="Jane Smith">Jane Smith</option>
                                    <option value="Michael Johnson">Michael Johnson</option>
                                    <option value="Emily Davis">Emily Davis</option>
                                    <option value="David Wilson">David Wilson</option>
                                    <option value="Sarah Anderson">Sarah Anderson</option>
                                    <option value="Robert Taylor">Robert Taylor</option>
                                    <option value="Jessica Miller">Jessica Miller</option>
                                </CFormSelect>
                            </div>

                            {/* Select Terms and Conditions */}
                            <div className="mb-3">
                                <CFormLabel>Terms & Conditions</CFormLabel>
                                <CFormSelect {...register('terms')}>
                                    <option value="">Select Terms And Condition</option>
                                    <option value="Term 1">Term 1</option>
                                    <option value="Term 2">Term 2</option>
                                    <option value="Term 3">Term 3</option>
                                    <option value="Term 4">Term 4</option>
                                    <option value="Term 5">Term 5</option>
                                </CFormSelect>
                            </div>

                            {/* Submit Button */}
                            <div className="text-center mt-4">
                                <button className="btn btn-outline-success" type="submit">
                                    Submit
                                </button>
                            </div>

                        </CForm>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    );
};

export default UpdateProject;

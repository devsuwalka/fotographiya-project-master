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
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addproject } from '../../Redux/ProjectSlice';

const AddProject = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [previewImages, setPreviewImages] = React.useState([]);


  // const submitdata = (data) => {
  //   console.log('Form Data:', data);
  //   dispatch(addproject(data));
  //   alert('Inserted Successfully!');
  //   navigate('/Dashboard');
  // };

  // const submitdata = (data) => {
  //   console.log("data",data)
  //   const formData = new FormData();
  //   formData.append('wedding_name', data.wedding_name);
  //   formData.append('Package', data.Package);
  //   formData.append('Mobile_Number', data.Mobile_Number);
  //   formData.append('Date', data.Date);
  //   formData.append('time', data.time);
  //   formData.append('months', data.months);
  //   formData.append('days', data.days);
  //   formData.append('hours', data.hours);
  //   formData.append('miniutes', data.miniutes);
  //   formData.append('pin', data.pin);
  //   formData.append('members', data.members);
  //   formData.append('terms', data.terms);

  //   // File handling
  //   if (data.wedding_face && data.wedding_face[0]) {
  //     formData.append('wedding_face', data.wedding_face[0]);
  //   }
  //   if (data.wedding_img && data.wedding_img[0]) {
  //     formData.append('wedding_img', data.wedding_img[0]);
  //   }
  //   console.log("formData",formData)

  //   console.log('Form Data:', [...formData.entries()]); // Debugging ke liye
  //   dispatch(addproject(formData));
  //   alert('Inserted Successfully!');
  //   navigate('/Dashboard');
  // };

  const submitdata = (data) => {
    console.log("data", data);
    const formData = new FormData();

    formData.append('wedding_name', data.wedding_name);
    formData.append('Package', data.Package);
    formData.append('Mobile_Number', data.Mobile_Number);
    formData.append('Date', data.Date);
    formData.append('time', data.time);
    formData.append('months', data.months);
    formData.append('days', data.days);
    formData.append('hours', data.hours);
    formData.append('miniutes', data.miniutes);
    formData.append('pin', data.pin);
    formData.append('members', data.members);
    formData.append('terms', data.terms);

    // Single file for wedding_face
    if (data.wedding_face && data.wedding_face[0]) {
      formData.append('wedding_face', data.wedding_face[0]);
    }

    // Multiple files for wedding_img
    if (data.wedding_img && data.wedding_img.length > 0) {
      for (let i = 0; i < data.wedding_img.length; i++) {
        formData.append('wedding_img', data.wedding_img[i]);
      }
    }

    console.log('Form Data:', [...formData.entries()]); // Debugging purpose
    dispatch(addproject(formData));
    alert('Inserted Successfully!');
    navigate('/Dashboard');
  };





  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4 my-3">
          <CCardHeader className="bg-dark text-light">
            <strong>Add Wedding Project</strong>
          </CCardHeader>
          <CCardBody>
            <CForm method="post" onSubmit={handleSubmit(submitdata)} encType='multipart/form'>
              {/* Wedding Name */}
              <div className="mb-3">
                <CFormLabel>Wedding Name</CFormLabel>
                <CFormInput
                  type="text"
                  placeholder="Type the Name"
                  {...register('wedding_name', {
                  })}
                />
                {errors.wedding_name && (
                  <span className="text-danger">
                    {errors.wedding_name.message}
                  </span>
                )}
              </div>

              {/* Package */}
              <div className="mb-3">
                <CFormLabel>Package</CFormLabel>
                <CFormSelect
                  {...register('Package', {
                  })}
                >
                  <option value="">Select Package</option>
                  <option value="Gold">Gold</option>
                  <option value="Silver">Silver</option>
                  <option value="Platinum">Platinum</option>
                </CFormSelect>
                {errors.Package && (
                  <span className="text-danger">{errors.Package.message}</span>
                )}
              </div>

              {/* Mobile Number */}
              <div className="mb-3">
                <CFormLabel>Mobile Number</CFormLabel>
                <CFormInput
                  type="text"
                  placeholder="Enter Mobile Number"
                  {...register('Mobile_Number', {
                  })}
                />
                {errors.Mobile_Number && (
                  <span className="text-danger">
                    {errors.Mobile_Number.message}
                  </span>
                )}
              </div>

              {/* Date */}
              <div className="mb-3">
                <CFormLabel>Date</CFormLabel>
                <CFormInput
                  type="date"
                  {...register('Date', {
                  })}
                />
                {errors.Date && (
                  <span className="text-danger">{errors.Date.message}</span>
                )}
              </div>

              {/* Time */}
              <div className="mb-3">
                <CFormLabel>Time</CFormLabel>
                <CFormInput
                  type="time"
                  {...register('time', {
                  })}
                />
                {errors.time && (
                  <span className="text-danger">{errors.time.message}</span>
                )}
              </div>

              {/* Months */}
              <div className="mb-3">
                <CFormLabel>Months</CFormLabel>
                <CFormInput
                  type="number"
                  min="0"
                  {...register('months')}
                />
              </div>

              {/* Days */}
              <div className="mb-3">
                <CFormLabel>Days</CFormLabel>
                <CFormInput
                  type="number"
                  min="0"
                  {...register('days')}
                />
              </div>

              {/* Hours */}
              <div className="mb-3">
                <CFormLabel>Hours</CFormLabel>
                <CFormInput
                  type="number"
                  min="0"
                  max="23"
                  {...register('hours')}
                />
              </div>

              {/* Miniutes (match schema spelling) */}
              <div className="mb-3">
                <CFormLabel>Minutes</CFormLabel>
                <CFormInput
                  type="number"
                  min="0"
                  max="59"
                  {...register('miniutes')}
                />
              </div>

              {/* Pin */}
              <div className="mb-3">
                <CFormLabel>Pin</CFormLabel>
                <CFormInput type="number" {...register('pin')} />
              </div>

              {/* File Upload */}

              {/* Wedding Image (Multiple Uploads) */}
              <div className="mb-3">
                <CFormLabel>Wedding Images (Multiple Uploads)</CFormLabel>
                <CFormInput
                  type="file"
                  multiple
                  {...register('wedding_img')}
                  onChange={(e) => {
                    const files = e.target.files;
                    setPreviewImages([...files].map((file) => URL.createObjectURL(file)));
                  }}
                />
                <div className="mt-2 d-flex flex-wrap gap-2">
                  {previewImages.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Preview ${index}`}
                      className="rounded"
                      width="100"
                      height="100"
                    />
                  ))}
                </div>
              </div>


              <div className="mb-3">
                <CFormLabel>Wedding Face</CFormLabel>
                <CFormInput type="file" {...register('wedding_face')} />
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

              {/* Terms and Conditions */}
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

export default AddProject;
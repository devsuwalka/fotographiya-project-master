import React, { useEffect } from 'react';
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
    CTable,
    CTableBody,
    CTableHeaderCell,
    CTableHead,
    CTableRow,
    CTableDataCell,
} from '@coreui/react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa'
import { FaPencil } from 'react-icons/fa6'
import { viewproject } from '../../Redux/ProjectSlice';

const ComplateProject = () => {
    const { ProjectList } = useSelector((state) => state.projects);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(viewproject());
    }, [dispatch]);

    function trash(id) {
        dispatch(DeleteProject(id))
        alert("delete....")
        window.location.reload()
    }


    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader className='bg-dark text-light'>
                        <strong>View Complate Projects</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CTable striped bordered borderColor='danger'>
                            <CTableHead>
                                <CTableRow>
                                    <CTableHeaderCell>#</CTableHeaderCell>
                                    <CTableHeaderCell>Wedding Name</CTableHeaderCell>
                                    <CTableHeaderCell>Package</CTableHeaderCell>
                                    <CTableHeaderCell>Mobile Number</CTableHeaderCell>
                                    <CTableHeaderCell>Date</CTableHeaderCell>
                                    <CTableHeaderCell>Action</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                {ProjectList?.map((ele, index) => (
                                    <CTableRow key={ele._id}>
                                        <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                                        <CTableDataCell>{ele.wedding_name}</CTableDataCell>
                                        <CTableDataCell>{ele.Package}</CTableDataCell>
                                        <CTableDataCell>{ele.Mobile_Number}</CTableDataCell>
                                        <CTableDataCell>{ele.Date}</CTableDataCell>
                                        <CTableDataCell>
                                            <button className='btn btn-danger' onClick={() => trash(ele._id)}><FaTrash /></button>
                                            <NavLink to={`/Project/UpdateProject/${ele._id}`}>
                                                <button className='btn btn-warning mx-2'><FaPencil /></button>
                                            </NavLink>
                                        </CTableDataCell>
                                    </CTableRow>
                                ))}
                            </CTableBody>
                        </CTable>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    );
};

export default ComplateProject;

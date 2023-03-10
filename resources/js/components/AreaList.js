import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { Link } from 'react-router-dom';
function AreaList() {
    const [area_name, setAreaName] = useState('');
    const [area_desc, setAreaDesc] = useState('');

    const [area, setArea] = useState([]);
    const [data, setData] = useState({});
    useEffect(() => {
        {
            axios.get('api/get-area').then(
                res => {
                    setArea(res.data)
                }
            )
        }
    }, [])
    const submit = (e) => {
        e.preventDefault()
        axios.post('api/area/post-create-area', { area_name, area_desc }).then(
            res => {
                setData(res.data);
            }
        )
    }
    return (
        <>
            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Danh Sách Các Khu Trong Hệ Thống</h1>
            </div>
            <div class="container-fluid">

                {/* <!-- Page Heading --> */}
                <h1 class="h3 mb-2 text-gray-800">Khu</h1>
                <p class="mb-4">Bảng dữ liệu dựa vào kho dữ liệu trên hệ thống, nếu có vấn đề không mong muốn xảy ra vui lòng <a target="_blank"
                        href="https://datatables.net">liên hệ với nhà phát triển</a>.</p>

                {/* <!-- DataTales Example --> */}
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Bảng Dữ Liệu Khu</h6>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>ID Khu</th>
                                        <th>Tên Khu</th>
                                        <th>Mô Tả Khu</th>
                                        <th>Ngày Tạo</th>
                                        <th>Ngày Cập Nhật</th>
                                        <th>Thao Tác</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>ID Khu</th>
                                        <th>Tên Khu</th>
                                        <th>Mô Tả Khu</th>
                                        <th>Ngày Tạo</th>
                                        <th>Ngày Cập Nhật</th>
                                        <th>Thao Tác</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                {area.map((item) => <>
                                    <tr>
                                        <td>{item.area_id}</td>
                                        <td>{item.area_name}</td>
                                        <td>{item.area_desc}</td>
                                        <td>{item.created_at}</td>
                                        <td>{item.updated_at}</td>
                                        <td>
                                            <Link to={`../edit-area/${item.area_id}`} className="btn btn-sm btn-warning btn-icon-split">
                                                <span class="icon text-white-50">
                                                    <i class="fas fa-exclamation-triangle"></i>
                                                </span>
                                                <span class="text">Cập nhật</span>
                                            </Link>
                                            <a class="btn btn-sm btn-danger btn-icon-split">
                                                <span class="icon text-white-50">
                                                    <i class="fas fa-trash"></i>
                                                </span>
                                                <span class="text">Xóa</span>
                                            </a>
                                        </td>
                                    </tr>
                                    </>
                                )}
                                    
                                    <tr>
                                        <td>Garrett Winters</td>
                                        <td>Accountant</td>
                                        <td>Tokyo</td>
                                        <td>63</td>
                                        <td>2011/07/25</td>
                                    </tr>
                                    <tr>
                                        <td>Ashton Cox</td>
                                        <td>Junior Technical Author</td>
                                        <td>San Francisco</td>
                                        <td>66</td>
                                        <td>2009/01/12</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AreaList;
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useParams } from 'react-router-dom';
function RoomEdit() {

    const { room_id } = useParams();

    console.log(room_id);

    const [room_name, setRoomName] = useState('');
    const [room_range, setRoomRange] = useState('');
    const [room_type, setRoomType] = useState('');
    const [room_quantity, setRoomQuantity] = useState('');
    const [room_status, setRoomStatus] = useState('');
    const [room_desc, setRoomDesc] = useState('');
    const [range_name, setRangeName] = useState('');
    const [type_name, setTypeName] = useState('');
    const [range_data, setRangeData] = useState([]);
    const [type_room_data, setTypeData] = useState([]);
    useEffect(() => {
        {
            axios.get(`../api/get-only-room/${room_id}`).then(
                res => {
                    setRoomName(res.data.room_name)
                    setRoomRange(res.data.room_range.range_id)
                    setRangeName(res.data.room_range.range_name)
                    setRoomType(res.data.room_type.area_name)
                    setTypeName(res.data.room_type.type_name)
                    setRoomQuantity(res.data.room_quantity)
                    setRoomStatus(res.data.room_status)
                    setRoomDesc(res.data.room_desc)
                }
            )
        }
        {
            axios.get('../api/get-range').then(
                res => {
                    setRangeData(res.data)
                }
            )
        }
        {
            axios.get('../api/get-type-room').then(
                res => {
                    setTypeData(res.data)
                }
            )
        }

    }, [])

    const submit = (e) => {
        e.preventDefault()
        axios.put(`../api/update-room/${room_id}`, { room_name, room_range, room_type, room_quantity, room_status, room_desc }).then(
            res => {
                console.log(res)
            }
        )
    }
    return (
        <>
            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">C???p Nh???t Ph??ng ID:{room_id}</h1>
            </div>
            <div className="row">
                {/* <!-- Area Chart --> */}
                <div className="col-xl-8 col-lg-7">
                    <div className="card shadow mb-4">
                        {/* <!-- Card Header - Dropdown --> */}
                        <div
                            className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 className="m-0 font-weight-bold text-primary">Nh???p Th??ng Tin Ph??ng Mu???n C???p Nh???t V??o Form Sau</h6>
                            <div className="dropdown no-arrow">
                                <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                    aria-labelledby="dropdownMenuLink">
                                    <div className="dropdown-header">Dropdown Header:</div>
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Card Body --> */}
                        <div className="card-body">
                            <form onSubmit={(e) => { submit(e) }}>
                                {/* {data.range_name} */}
                                <div class="form-group">
                                    <label for="room_name">T??n Ph??ng</label>
                                    <input onChange={e => { setRoomName(e.target.value) }} value={room_name} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <small id="emailHelp" class="form-text text-muted">Vui l??ng ki???m tra d??? li???u nh???p tr?????c khi x??c nh???n.</small>
                                </div>
                                <div class="form-group">
                                    <label for="room_range">Thu???c D??y</label>
                                    <select onChange={e => { setRoomRange(e.target.value) }} name="room_range" class="form-control" id="exampleFormControlSelect1">
                                        <option value={room_range}>{range_name}</option>
                                        {range_data.map((item) => <>
                                            <option value={item.range_id}>{item.range_name}</option>
                                        </>)}
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="range_area">Thu???c Lo???i</label>
                                    <select onChange={e => { setRoomType(e.target.value) }} name="range_area" class="form-control" id="exampleFormControlSelect1">
                                        <option value={room_type}>{type_name}</option>
                                        {type_room_data.map((item) => <>
                                            <option value={item.type_id}>{item.type_name}</option>
                                        </>)}
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="room_quantity">C??n Tr???ng (ch???)</label>
                                    <select onChange={e => { setRoomQuantity(e.target.value) }} name="room_quantity" class="form-control" id="exampleFormControlSelect1">
                                        <option value={room_quantity}>{room_quantity}</option>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="room_status">Tr???ng Th??i Ph??ng</label>
                                    <select onChange={e => { setRoomStatus(e.target.value) }} name="room_status" class="form-control" id="exampleFormControlSelect1">
                                        <option value={room_status}>{room_status}</option>
                                        <option value="C??n tr???ng">C??n tr???ng</option>
                                        <option value="???? ?????y">???? ?????y</option>
                                        <option value="??ang s???a ch???a">??ang s???a ch???a</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="room_desc">M?? T??? Ph??ng</label>
                                    <input onChange={e => { setRoomDesc(e.target.value) }} value={room_desc} type="text" class="form-control" id="area_desc_id" />
                                    <small id="emailHelp" class="form-text text-muted">Vui l??ng ki???m tra d??? li???u nh???p tr?????c khi x??c nh???n.</small>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label class="form-check-label" for="exampleCheck1">X??c nh???n d??? li???u ???? nh???p</label>
                                </div>
                                <button type="submit" class="btn btn-primary">Th??m Ph??ng</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default RoomEdit;
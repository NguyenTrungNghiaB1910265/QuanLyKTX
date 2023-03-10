import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useParams } from 'react-router-dom';
function ElecWaterBillEdit() {

    const { elec_water_bill_id } = useParams();

    console.log(elec_water_bill_id);

    const [elec_water_bill_name, setElecWaterBillName] = useState('');
    const [elec_water_bill_room, setElecWaterBillRoom] = useState('');
    const [elec_water_bill_month, setElecWaterBillMonth] = useState('');
    const [elec_water_bill_semester, setElecWaterBillSemester] = useState('');
    const [elec_water_bill_elec, setElecWaterBillElec] = useState('');
    const [elec_water_bill_water, setElecWaterBillWater] = useState('');
    const [elec_water_bill_money, setElecWaterBillMoney] = useState('');
    const [elec_water_bill_due, setElecWaterBillDue] = useState('');
    const [elec_water_bill_pay, setElecWaterBillPay] = useState('');
    const [elec_water_bill_note, setElecWaterBillNote] = useState('');
    const [elec_water_bill_status, setElecWaterBillStatus] = useState('');

    const [room_name, setRoomName] = useState('');
    const [room_data, setRoomData] = useState([]);

    // const [range_name, setRangeName] = useState('');
    // const [type_name, setTypeName] = useState('');
    // const [range_data, setRangeData] = useState([]);
    // const [type_room_data, setTypeData] = useState([]);
    useEffect(() => {
        {
            axios.get(`../api/get-only-elec-water-bill/${elec_water_bill_id}`).then(
                res => {
                    setElecWaterBillName(res.data.elec_water_bill_name)
                    setElecWaterBillRoom(res.data.elec_water_bill_room.room_id)
                    setRoomName(res.data.elec_water_bill_room.room_name)
                    setElecWaterBillMonth(res.data.elec_water_bill_month)
                    setElecWaterBillSemester(res.data.elec_water_bill_semester)
                    setElecWaterBillElec(res.data.elec_water_bill_elec)
                    setElecWaterBillWater(res.data.elec_water_bill_water)
                    setElecWaterBillMoney(res.data.elec_water_bill_money)
                    setElecWaterBillDue(res.data.elec_water_bill_due)
                    setElecWaterBillPay(res.data.elec_water_bill_pay)
                    setElecWaterBillNote(res.data.elec_water_bill_note)
                    setElecWaterBillStatus(res.data.elec_water_bill_status)
                }
            )
        }
        {
            axios.get('../api/get-room').then(
                res => {
                    setRoomData(res.data)
                }
            )
        }

    }, [])

    const submit = (e) => {
        e.preventDefault()
        axios.put(`../api/update-elec-water-bill/${elec_water_bill_id}`, {  elec_water_bill_name, 
                                                                            elec_water_bill_room, 
                                                                            elec_water_bill_month, 
                                                                            elec_water_bill_semester, 
                                                                            elec_water_bill_elec, 
                                                                            elec_water_bill_water,
                                                                            elec_water_bill_money,
                                                                            elec_water_bill_due,
                                                                            elec_water_bill_pay,
                                                                            elec_water_bill_note,
                                                                            elec_water_bill_status }).then(
            res => {
                console.log(res)
            }
        )
    }
    return (
        <>
            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">C???p Nh???t H??a ????n ??i???n N?????c ID:{elec_water_bill_id}</h1>
            </div>
            <div className="row">
                {/* <!-- Area Chart --> */}
                <div className="col-xl-8 col-lg-7">
                    <div className="card shadow mb-4">
                        {/* <!-- Card Header - Dropdown --> */}
                        <div
                            className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 className="m-0 font-weight-bold text-primary">Nh???p Th??ng Tin H??a ????n Mu???n C???p Nh???t V??o Form Sau</h6>
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
                                <div class="form-group">
                                    <label for="area_name">T??n H??a ????n</label>
                                    <input onChange={e => { setElecWaterBillName(e.target.value) }} value={elec_water_bill_name} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <small id="emailHelp" class="form-text text-muted">Vui l??ng ki???m tra d??? li???u nh???p tr?????c khi x??c nh???n.</small>
                                </div>
                                <div class="form-group">
                                    <label for="elec_water_bill_room">Ph??ng</label>
                                    <select onChange={e => { setElecWaterBillRoom(e.target.value) }} name="elec_water_bill_room" class="form-control" id="exampleFormControlSelect1">
                                        <option value={elec_water_bill_room}>{room_name}</option>
                                        {room_data.map((item) => <>
                                            <option value={item.room_id}>{item.room_name}</option>
                                        </>)}
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="elec_water_bill_month">Th??ng</label>
                                    <select onChange={e => { setElecWaterBillMonth(e.target.value) }} name="elec_water_bill_month" class="form-control" id="exampleFormControlSelect1">
                                        <option value={elec_water_bill_month}>Th??ng {elec_water_bill_month}</option>
                                        <option value="1">Th??ng 1</option>
                                        <option value="2">Th??ng 2</option>
                                        <option value="3">Th??ng 3</option>
                                        <option value="4">Th??ng 4</option>
                                        <option value="5">Th??ng 5</option>
                                        <option value="6">Th??ng 6</option>
                                        <option value="7">Th??ng 7</option>
                                        <option value="8">Th??ng 8</option>
                                        <option value="9">Th??ng 9</option>
                                        <option value="10">Th??ng 10</option>
                                        <option value="11">Th??ng 11</option>
                                        <option value="12">Th??ng 12</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="elec_water_bill_semester">H???c k???</label>
                                    <select onChange={e => { setElecWaterBillSemester(e.target.value) }} name="elec_water_bill_semester" class="form-control" id="exampleFormControlSelect1">
                                        <option value={elec_water_bill_semester}>{elec_water_bill_semester}</option>
                                        <option value="1, 2022-2023">1, 2022-2023</option>
                                        <option value="2, 2022-2023">2, 2022-2023</option>
                                        <option value="1, 2023-2024">1, 2023-2024</option>
                                        <option value="1, 2023-2024">1, 2023-2024</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="area_name">??i???n Ti??u Th???</label>
                                    <input onChange={e => { setElecWaterBillElec(e.target.value) }} value={elec_water_bill_elec} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <small id="emailHelp" class="form-text text-muted">Vui l??ng ki???m tra d??? li???u nh???p tr?????c khi x??c nh???n.</small>
                                </div>
                                <div class="form-group">
                                    <label for="area_name">N?????c Ti??u Th???</label>
                                    <input onChange={e => { setElecWaterBillWater(e.target.value) }} value={elec_water_bill_water} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <small id="emailHelp" class="form-text text-muted">Vui l??ng ki???m tra d??? li???u nh???p tr?????c khi x??c nh???n.</small>
                                </div>
                                <div class="form-group">
                                    <label for="area_name">Th??nh Ti???n</label>
                                    <input onChange={e => { setElecWaterBillMoney(e.target.value) }} value={elec_water_bill_money} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <small id="emailHelp" class="form-text text-muted">Vui l??ng ki???m tra d??? li???u nh???p tr?????c khi x??c nh???n.</small>
                                </div>
                                <div class="form-group">
                                    <label for="area_name">Ng??y H???t H???n</label>
                                    <input onChange={e => { setElecWaterBillDue(e.target.value) }} value={elec_water_bill_due} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <small id="emailHelp" class="form-text text-muted">Vui l??ng ki???m tra d??? li???u nh???p tr?????c khi x??c nh???n.</small>
                                </div>
                                <div class="form-group">
                                    <label for="area_name">Ng??y ????ng</label>
                                    <input onChange={e => { setElecWaterBillPay(e.target.value) }} value={elec_water_bill_pay} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <small id="emailHelp" class="form-text text-muted">Vui l??ng ki???m tra d??? li???u nh???p tr?????c khi x??c nh???n.</small>
                                </div>
                                <div class="form-group">
                                    <label for="area_desc">Ghi Ch?? H??a ????n</label>
                                    <input onChange={e => { setElecWaterBillNote(e.target.value) }} value={elec_water_bill_note} type="text" class="form-control" id="area_desc_id" />
                                    <small id="emailHelp" class="form-text text-muted">Vui l??ng ki???m tra d??? li???u nh???p tr?????c khi x??c nh???n.</small>
                                </div>
                                <div class="form-group">
                                    <label for="elec_water_bill_semester">Tr???ng Th??i H??a ????n</label>
                                    <select onChange={e => { setElecWaterBillStatus(e.target.value) }} name="elec_water_bill_status" class="form-control" id="exampleFormControlSelect1">
                                        <option value={elec_water_bill_status}>{elec_water_bill_status}</option>
                                        <option value="Ch??a ????ng">Ch??a ????ng</option>
                                        <option value="???? ????ng">???? ????ng</option>
                                    </select>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label class="form-check-label" for="exampleCheck1">X??c nh???n d??? li???u ???? nh???p</label>
                                </div>
                                <button type="submit" class="btn btn-primary">Th??m h??a ????n</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default ElecWaterBillEdit;
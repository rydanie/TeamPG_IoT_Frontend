import React, { useEffect, useState, ChangeEvent, dropDOwnOpen } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "redux/root-reducer";

import {
    Container,
    Row,
    Col,
    Table,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Dropdown,
} from "reactstrap";
import { actions as devicesActions } from "./redux/devices-actions";
import { actions as systemActions } from "../redux/system-actions";
import DevicesForm from "./DevicesForm";
import { DevicesTable } from "./DevicesTable";
import devicesService from "devices/services/devices-service";

const mapState = (state: RootState) => ({
    loading: state.devices.loading,
    devices: state.devices.devices,
});

const mapDispatch = {
    loadDevices: devicesActions.loadDevices,
    createDevice: devicesActions.createDevice,
    notify: systemActions.notify
};

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

function Devices({
    loading,
    devices,
    createDevice,
    loadDevices,
    notify,
}: Props) {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => { setDropdownOpen(!dropdownOpen) }

    let [myDevices, setMyDevices] = useState([]);

    useEffect(() => {
        devicesService.devices().then(devices => {console.log(devices)});
        loadDevices();
    }, []);

    return (
        <>
            <Container className="mt--6 d-flex justify-content-center" >
                <Col >
                    <Row className="justify-content-md-center">
                        <DevicesForm onCreateDevice={createDevice} loading={loading} />
                    </Row>

                    <Row className="mt-5 justify-content-md-center">
                        <DevicesTable devices={devices} />
                    </Row>

                    <Row>
                        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle caret>
                                Our devices
                            </DropdownToggle>
                            <DropdownMenu>
                                {devices?.map(device=> {
                                    return <DropdownItem> {device.name} </DropdownItem>
                                })}
                            </DropdownMenu>
                        </Dropdown>
                    </Row>
                </Col>
            </Container>
        </>
    );
}
export default connector(Devices);

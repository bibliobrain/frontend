import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Form from "react-bootstrap/Form";
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

const Container = styled.div`
/* display: flex; */
/* padding: 50px; */
/* background-color:red; */
border-radius:5px;
width:90%;
height:90%;
/* flex-direction: column; */
`;


export const Loan = () => {
    const [active, setActive] = useState(1)
    const [ssn, setSsn] = useState(1)
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')

    const createLoan =() => {
        console.log('loan created')
    }

    return (
        <Container>
            <SwichBar setActive={setActive} active={active} />
            {active === 1 ?
                <Form onSubmit={(e) => { e.preventDefault(); createLoan() }}>
                    <Form.Group>
                        <Form.Label>SSN</Form.Label>
                        <Form.Control type='number' required onChange={e => setSsn(e.target.value)} value={ssn} placeholder="4324211" style={{ backgroundColor: '#F7FAFC', boxShadow: '0px 2px 4px #1717172E', height: 50 }} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control required onChange={e => setFname(e.target.value)} value={fname} type="text" placeholder="Peter" style={{ backgroundColor: '#F7FAFC', boxShadow: '0px 2px 4px #1717172E', height: 50 }} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Last name</Form.Label>
                        <Form.Control required onChange={e => setLname(e.target.value)} value={lname} type="text" placeholder="Parker" style={{ backgroundColor: '#F7FAFC', boxShadow: '0px 2px 4px #1717172E', height: 50 }} />
                    </Form.Group>
                    <DropdownButton bsPrefix='dropdown-120' title='Choose book' size="md" variant="secondary">
                        <Dropdown.Item eventKey='All bindings' value='value'>All books</Dropdown.Item>
                        <Dropdown.Divider />
                        {/* {bindings.map(x => { return <Dropdown.Item key={x.id} eventKey={x.id}>{x.name}</Dropdown.Item>; })} */}
                    </DropdownButton>
                    {/* <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control required onChange={e => setPassword(e.target.value)} value={password} type="password" placeholder="Password" style={{ backgroundColor: '#F7FAFC', boxShadow: '0px 2px 4px #1717172E', height: 50 }} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Role</Form.Label>
                        <Form.Control required onChange={e => { setRole(e.target.value) }} as="select" custom style={{ backgroundColor: '#F7FAFC', boxShadow: '0px 2px 4px #1717172E', height: 50 }} value={role}><Roles /></Form.Control>
                    </Form.Group> */}
                    {/* <Form.Group>
                        <Form.Label>Restaurant</Form.Label>
                        <CheckboxAutoComplete required={role === 'restaurant'} disabled={role !== 'restaurant'} value={placeId} setValue={setPlaceId} id='restaurants' placeholder='Restaurant' options={restaurantOptions.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))} />
                    </Form.Group> */}

                    {/* <Button type='submit' style={{ marginTop: 20, backgroundColor: '#F58A99', borderColor: '#F58A99' }} > Submit </Button> */}
                </Form> : null}
        </Container>
    )
}

const SwichBar = (props) => {
    return (
        <div style={{ width: "100%", display: "flex", direction: "flex-row", height: 50, marginBottom:20}}>
            <div className="hover-opacity" style={{ width: "50%", display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: props.active === 1 ? '#0e333e' : "#E6E6E6", color: props.active === 1 ? "white" : '#0e333e' }}
                onClick={() => { props.setActive(1) }}>Loan
            </div>
            <div className="hover-opacity" style={{ width: "50%", display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: props.active !== 1 ? '#0e333e' : "#E6E6E6", color: props.active !== 1 ? "white" : '#0e333e' }}
                onClick={() => { props.setActive(2) }}>Return
            </div>
        </div>
    )
}
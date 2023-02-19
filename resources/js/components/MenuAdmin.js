import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';
import {Link} from 'react-router-dom';

function MenuAdmin() {
  return (
    <>
      <div>
        <DropdownButton
          align={{ lg: 'start' }}
          title="Left-aligned but right aligned when large screen"
          id="dropdown-menu-align-responsive-1"
        >
          <Dropdown.Item eventKey="1"><Link to='create'>Thêm khu</Link></Dropdown.Item>
          <Dropdown.Item eventKey="2">Action 2</Dropdown.Item>
        </DropdownButton>
      </div>
      <div className="mt-2">
        <SplitButton
          align={{ lg: 'start' }}
          title="Right-aligned but left aligned when large screen"
          id="dropdown-menu-align-responsive-2"
        >
          <Dropdown.Item eventKey="1">Action 1</Dropdown.Item>
          <Dropdown.Item eventKey="2">Action 2</Dropdown.Item>
        </SplitButton>
      </div>
    </>
  );
}

export default MenuAdmin;
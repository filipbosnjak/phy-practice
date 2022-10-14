import { Dropdown } from "@nextui-org/react";
import Box from "../../components/navbar/Box";
import { useState, useEffect } from "react";

export default function Practice() {
  const [selected, setSelected] = useState(new Set(["Fizikalna veličina"]));

  useEffect(() => {
    console.log("changed");
  }, [selected]);

  return (
    <Box
      className='practice'
      css={{ px: "$12", mt: "$8", "@xsMax": { px: "$10" } }}>
      <Dropdown>
        <Dropdown.Button
          flat
          color='primary'
          css={{ width: "200px" }}
          className='drop-down'>
          {selected}
        </Dropdown.Button>
        <Dropdown.Menu
          aria-label='Single selection actions'
          color='primary'
          disallowEmptySelection
          selectionMode='single'
          selectedKeys={selected}
          onSelectionChange={setSelected}>
          <Dropdown.Item key='Duljina'>Duljina</Dropdown.Item>
          <Dropdown.Item key='Površina'>Površina</Dropdown.Item>
          <Dropdown.Item key='Volumen'>Volumen</Dropdown.Item>
          <Dropdown.Item key='Mix'>Mix</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Box>
  );
}

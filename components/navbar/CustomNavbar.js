import React from "react";
import {
  Navbar,
  Button,
  Link,
  Text,
  Dropdown,
  Avatar,
} from "@nextui-org/react";
import Layout from "./Layout.js";
import AcmeLogo from "./AcmeLogo.js";
import { VariantsSelectorWrapper } from "./VariantsSelectorWrapper.js";

export default function CustomNavbar() {
  const [variant, setVariant] = React.useState("sticky");

  const variants = ["static", "floating", "sticky"];

  const collapseItems = [
    "Features",
    "Customers",
    "Pricing",
    "Company",
    "Legal",
    "Team",
    "Help & Feedback",
    "Login",
    "Sign Up",
  ];

  return (
    <Layout>
      <Navbar shouldHideOnScroll isBordered={true} variant={variant}>
        <Navbar.Brand>
          {/* Toggle component */}
          <Navbar.Toggle aria-label='toggle navigation' />

          <AcmeLogo />
          <Text b color='inherit' hideIn='xs'>
            ACME
          </Text>
        </Navbar.Brand>

        {/* Collapse items */}
        <Navbar.Collapse className='navbar-collapse'>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem key={item}>
              <Link
                color='inherit'
                css={{
                  minWidth: "100%",
                  marginLeft: "10px",
                }}
                href='#'>
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>

        <Navbar.Content hideIn='xs'>
          <Navbar.Link href='/'>Home</Navbar.Link>
          <Navbar.Link href='/practice'>Vježbe</Navbar.Link>
          <Navbar.Link isActive href='#'>
            Customers
          </Navbar.Link>
          <Navbar.Link href='#'>O nama</Navbar.Link>
          <Navbar.Link href='#'>Company</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color='inherit' href='#'>
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href='#'>
              Sign Up
            </Button>
          </Navbar.Item>
          <Dropdown placement='bottom-right'>
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as='button'
                  color='primary'
                  size='md'
                  src='https://i.pravatar.cc/150?u=a042581f4e29026704d'
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label='User menu actions'
              color='primary'
              onAction={(actionKey) => console.log({ actionKey })}>
              <Dropdown.Item key='profile' css={{ height: "$18" }}>
                <Text b color='inherit' css={{ d: "flex" }}>
                  Signed in as
                </Text>
                <Text b color='inherit' css={{ d: "flex" }}>
                  zoey@example.com
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key='settings' withDivider>
                My Settings
              </Dropdown.Item>
              <Dropdown.Item key='team_settings'>Team Settings</Dropdown.Item>
              <Dropdown.Item key='analytics' withDivider>
                Analytics
              </Dropdown.Item>
              <Dropdown.Item key='system'>System</Dropdown.Item>
              <Dropdown.Item key='configurations'>Configurations</Dropdown.Item>
              <Dropdown.Item key='help_and_feedback' withDivider>
                Help & Feedback
              </Dropdown.Item>
              <Dropdown.Item key='logout' withDivider color='error'>
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Content>
      </Navbar>
      {/* <VariantsSelectorWrapper>
        <Card css={{ maxW: "50%" }}>
          <Card.Body css={{ pt: "$8", px: "$8" }}>
            <Radio.Group
              defaultValue='default'
              label='Select variant'
              orientation='horizontal'
              size='sm'
              value={variant}
              onChange={setVariant}>
              {variants.map((variant) => (
                <Radio key={variant} value={variant}>
                  {variant}
                </Radio>
              ))}
            </Radio.Group>
          </Card.Body>
        </Card>
      </VariantsSelectorWrapper> */}
    </Layout>
  );
}

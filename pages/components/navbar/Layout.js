import { Content } from "./Content.js";
import { Box } from "../navbar/Box";

const Layout = ({ children }) => (
  <Box
    css={{
      maxW: "100%",
    }}>
    {children}
    {/* <Content /> */}
  </Box>
);

export default Layout;
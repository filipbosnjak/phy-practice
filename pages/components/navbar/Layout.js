import { Content } from "./Content.js";
import { Box } from "../navbar/Box";

export const Layout = ({ children }) => (
  <Box
    css={{
      maxW: "100%",
    }}>
    {children}
    {/* <Content /> */}
  </Box>
);

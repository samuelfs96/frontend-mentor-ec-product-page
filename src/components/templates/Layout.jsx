import UINavbar from "../organisms/UINavbar";

export default function Layout({ children }) {
  return (
    <>
      <UINavbar />
      {children}
    </>
  );
}

import Header from "../Header";

interface DefaultLayoutProps {
  children?: string;
}

function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
        <Header />
        <h1>{children}</h1>
    </>
  );
}

export default DefaultLayout;

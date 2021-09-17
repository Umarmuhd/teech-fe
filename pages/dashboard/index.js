import Link from "next/link";

//page layout
import Dashboard from "@/layouts/Dashboard";

function Index() {
  return (
    <>
      <div className="pt-5 md:pt-24">
        <div className="nav py-2 px-2 w-full flex flex-wrap items-center justify-between">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <ul className="flex">
              <li className="mr-5">
                <Link href="">
                  <a>Dashboard</a>
                </Link>
              </li>
              <li className="mr-5">
                <Link href="">
                  <a>Dashboard</a>
                </Link>
              </li>
              <li className="mr-5">
                <Link href="">
                  <a>Dashboard</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;

Index.layout = Dashboard;

import { Outlet } from "react-router";

export default function MainTemplateLayout() {
  return (
    <main>
      <div className="main_wrapper">
        <Outlet />
      </div>
    </main>
  );
}

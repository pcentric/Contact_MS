import Home from "./Home/Home";
import Sidebar from "./components/SideBar";
import MapandCharts from "./Maps&Charts/Maps&Charts";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Routes, Route } from "react-router";

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <div className="flex ">
        <Sidebar />
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/map&charts" element={<MapandCharts />} />
          </Routes>
        </QueryClientProvider>
      </div>
    </>
  );
}

import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import TripsWithRouter  from "./components/Trip/Trips";
import {Create} from "./components/Trip/Create";
import {UpdateWithRouter} from "./components/Trip/Update";
import {DeleteWithRouter} from "./components/Trip/Delete";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  }
  ,
  {
    path: '/trips',
    element: <TripsWithRouter />
  }
  ,
  {
    path: '/Create',
    element: <Create />
  }
  ,
  {
    path: '/Update/:id',
    element: <UpdateWithRouter  />
  }
  ,
  {
    path: '/Delete/:id',
    element: <DeleteWithRouter  />
  }
];

export default AppRoutes;

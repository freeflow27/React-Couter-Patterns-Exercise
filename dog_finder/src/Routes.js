import React from 'react';
import {
  Route,
  Routes,
  Navigate
} from 'react-router-dom';
import DogList from './DogList';
import FilterDogDetails from './FilterDogDetails';

function DogRoutes({dogs}) {
  return (
    <Routes>
      <Route exact path="/dogs">
        <DogList dogs={dogs} />
      </Route>
      <Route path="/dogs/:name">
        <FilterDogDetails dogs={dogs} />
      </Route>
      <Navigate to="/dogs" />
      </Routes>
  );
}

export default DogRoutes;

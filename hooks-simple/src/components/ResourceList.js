import React, { useState, useEffect } from "react";
import axios from "axios";

const useResources = resource => {
  const [resources, setResources] = useState([]);

  const fetchResource = async resource => {
    const response = await axios.get(
      `http://jsonplaceholder.typicode.com/${resource}`
    );
    setResources(response.data);
  };

  useEffect(() => {
    fetchResource(resource);
    return () => {
      console.log("Unmounted");
    };
  }, [resource]);

  return resources;
};

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);
  console.log(resources);
  return (
    <ul>
      {resources.map(rec => (
        <li key={rec.id}>{rec.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;

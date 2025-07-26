import React, { useState } from "react";
import axios from axios


type ProductPros = {
  id: number;
  title: string;
  description: string;
  category: string;
  priority: string;
  status: string;
  image: string;
};
const useFetchList = () => {
  const [products, setProducts] = useState<ProductPros[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean | string>(false);

  const fetchData = async () => {
    try {


      const response = await axios.get("")






    } catch (err:unknown) {
      setError(err instanceof Error ? err.message:"Error in fetching Data");
    }
  };
};

export default useFetchList;

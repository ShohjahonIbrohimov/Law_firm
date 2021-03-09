import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { startCrudService } from "../../redux/ourServices/service.actions";

const FetchSiteData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      startCrudService({
        url: "api/services/getAll",
        method: "GET",
        data: "",
        afterSuccess: () => {},
      })
    );
  }, []);

  return <div></div>;
};

export default FetchSiteData;

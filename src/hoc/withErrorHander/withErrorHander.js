import React, { useState, useEffect } from "react";
import Modal from "../../components/UI/Modal/Modal";

const withErrorHander = (WrappedComponent, axios) => {
  return (props) => {
    const [error, setError] = useState(null);

    function hideModal() {
      setError(false);
    }
    const requestEnterceptor = axios.interceptors.request.use((request) => {
      setError(false);
      return request;
    });
    const responseEnterceptor = axios.interceptors.response.use(
      (response) => response,
      (error) => setError(error)
    );

    useEffect(() => {
      return () => {
        axios.interceptors.request.eject(requestEnterceptor);
        axios.interceptors.response.eject(responseEnterceptor);
      };
    }, []);

    return (
      <>
        <Modal show={error} hideCallback={hideModal}>
          {error ? error.message : "Unknown error"}
        </Modal>
        <WrappedComponent {...props} />;
      </>
    );
  };
};
export default withErrorHander;

import React, { useState, useEffect } from "react";
import Modal from "../../components/UI/Modal/Modal";

const withAxios = (WrappedComponent, axios) => {
  return (props) => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    function hideModal() {
      setError(false);
    }
    const requestEnterceptor = axios.interceptors.request.use((request) => {
      setError(false);
      setLoading(true);
      return request;
    });
    const responseEnterceptor = axios.interceptors.response.use(
      (response) => {
        setLoading(false);
        return response;
      },
      (error) => {
        setLoading(false);
        setError(error);
        return Promise.reject(error);
      }
    );

    useEffect(() => {
      return () => {
        axios.interceptors.request.eject(requestEnterceptor);
        axios.interceptors.response.eject(responseEnterceptor);
      };
    }, [requestEnterceptor, responseEnterceptor]);

    return (
      <>
        <Modal show={error} hideCallback={hideModal}>
          {error ? error.message : "Unknown error"}
        </Modal>
        <WrappedComponent loading={loading} {...props} />;
      </>
    );
  };
};
export default withAxios;

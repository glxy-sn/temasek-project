const Loading = () => {
    return (
      <div className='d-flex align-items-center justify-content-center' style={{height:"100vh"}}>
        <div className="d-flex align-items-center">
            <div className="spinner-border text-primary" role="status"></div>
            <p className="mb-0 ms-2">Loading...</p>
        </div>
      </div>
    );
  };

  export default Loading;
  
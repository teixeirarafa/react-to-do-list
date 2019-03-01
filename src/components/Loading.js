import React from 'react'

const Loading = () => {
    const divStyle={width:'3rem', height: '3rem'}
    return(
        <div className="container ml-0 mt-5">
          <div className="d-flex justify-content-center mt-5">
            <div className="spinner-grow text-info mt-5" style={divStyle} role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
    )
}

export default Loading
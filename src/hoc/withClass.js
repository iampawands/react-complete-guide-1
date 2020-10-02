import React from 'react'

const withClass = (WrapperComponent,className) => {
    return props => (
      <div className={className}>
            <WrapperComponent/>
      </div>
    );
}

export default withClass;
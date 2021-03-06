import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { fetchSunData } from '../store/actions/sunDataActions';

const SunDataDisplay = (props) => {
  console.log(props);

  useEffect(() => {
    props.fetchSunData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='data-container'>
      <div>SUN DaTA</div>
      <div className='sun-data'>
        {props.isFetching && (
          <Loader type='Circles' color='#00BFFF' height={100} width={100} />
        )}
        {props.data.sunrise && (
          <div className='container'>Sunrise: {props.data.sunrise}</div>
        )}
        {props.data.sunset && (
          <div className='container'>Sunset: {props.data.sunset}</div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    data: state.sun.data,
    isFetching: state.sun.isFetching,
    error: state.sun.error,
  };
};
export default connect(mapStateToProps, { fetchSunData })(SunDataDisplay);

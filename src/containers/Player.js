import React, { useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { getVideoSource } from '../actions';
import { Redirect } from 'react-router-dom';
import NotFound from '../containers/NotFound';
import '../assets/styles/components/Player.scss';

const Player = (props) => {
  //gracias a BrowserRoute está disponible la funcion
  //history.goback()
  //nos lo envia Router por la ruta player/:id
  //entonces estamos haciendo match con lo que estamos recibiendo
  const { id } = props.match.params;
  const hasPlaying = Object.keys(props.playing).length > 0;
  //el useEffect es de forma asíncrona,
  //quiere decir que mientras se va ejecutando, lo demás también va siguiendo
  //su propia secuencia
  //para este caso del video, se muestra el 404 porque espera que se encuentre el video
  // useEffect(() => {
  //   props.getVideoSource(id);
  // }, []);
  //es sincrona
  useLayoutEffect(() => {
    props.getVideoSource(id);
  }, []);
  return hasPlaying ? (
    <div className="Player">
      <video controls autoPlay>
        <source src={props.playing.source} type="video/mp4" />
      </video>
      <div className="Player-back">
        <button type="button" onClick={() => props.history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  ) : (
    <NotFound />
  );
};
const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};
const mapDispatchToProps = {
  getVideoSource,
};
export default connect(mapStateToProps, mapDispatchToProps)(Player);

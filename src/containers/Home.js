import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';
import Header from '../components/Header';

//const API = ' http://localhost:3000/initalState';

const Home = ({ myList, trends }) => {
  //const initialState = useInitialState(API);
  return (
    <>
      <Header />
      <Search />
      {myList.length > 0 && (
        <Categories title="MY LIST">
          <Carousel>
            {myList.map((item) => (
              <CarouselItem key={item.id} {...item} isList />
            ))}
          </Carousel>
        </Categories>
      )}
      <Categories title="THEY NEED YOUR HELP">
        <Carousel>
          {trends.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
  };
};

//si lo quiero pasar como falso isList= {false}
//export default connect(props, actions)(Home);
export default connect(mapStateToProps, null)(Home);

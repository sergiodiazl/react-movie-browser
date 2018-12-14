import React from 'react';
import './Navigation.css';
import Selection from './Selection';
import Slider from './Slider';
import Button from './Button';
class Navigation extends React.Component {
   

  onGenreChange = event => {
    this.setState({ genre: event.target.value });
  };

  onChange = data => {
    this.setState({
      [data.type]: {
        ...this.state[data.type], // previous value of this.state.year
        value: data.value         // overwrite the value property
      }
    });
  };
  componentDidMount() {
    fetch(this.props.url)
      .then(response => response.json())
      .then(data => this.props.setGenres( data.genres ))
      .catch(error => console.log(error));
  }
  render() {
    const { genre, genres, onGenreChange, onChange, year, rating, runtime } = this.props;
    return (
      <section className="navigation">
      <div className="navigation-options">
        <Selection
          genre={genre}
          genres={genres}
          onGenreChange={onGenreChange}
        />

        <Slider data={year} onChange={onChange} />
        <Slider data={rating} onChange={onChange} />
        <Slider data={runtime} onChange={onChange} />
        <Button onClick={this.props.onSearchButtonClick}>
        search</Button>
        </div>
      </section>
    )
  }
}

export default Navigation;

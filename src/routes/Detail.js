import React from 'react';
import './Detail.css';

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        console.log(this.props);
        if (location.state === undefined) {
            history.push('/');
        }
    }
    render() {
        const { location } = this.props;
        if (location.state) {
            return (
                <div className="detail">
                    <h1>{location.state.title}</h1>
                    <img src={location.state.poster} alt={location.state.id} />
                    <ul className="detail__genres">
                        {location.state.genres.map((genre, index) => (
                            <li key={index} className="genres__genre">
                                {genre}
                            </li>
                        ))}
                    </ul>
                    {/* <h2>{location.state.title}</h2> */}
                    <h4>{location.state.summary}</h4>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default Detail;

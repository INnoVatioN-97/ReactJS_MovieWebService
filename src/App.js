import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

class App extends React.Component {
    state = {
        isLoading: true,
        movies: [],
    };
    getMovies = async () => {
        const {
            data: {
                data: { movies },
            },
        } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
        this.setState({ movies, isLoading: false }); //7번 라인의 movies 배열에 위 주소에서 가져온 movies를 넣는다.
    };
    componentDidMount() {
        //이 컴포넌트가 마운트 됐을 때 자동으로 실행되는 메소드.
        this.getMovies();
    }
    render() {
        const { isLoading, movies } = this.state;
        return (
            <section className="container">
                {isLoading ? (
                    <div className="loader">
                        <span className="loader__text">Loading...</span>
                    </div>
                ) : (
                    //https://nomadcoders.co/react-fundamentals/lectures/1559
                    //#4.3 Adding Genres 3:00부터 보기
                    <div className="movies">
                        {movies.map((movie) => (
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                year={movie.year}
                                title={movie.title}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                                genres={movies.genres}
                            />
                        ))}
                    </div>
                )}
            </section>
        );
    }
}

export default App;

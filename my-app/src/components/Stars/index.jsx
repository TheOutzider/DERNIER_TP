import star from '../../assets/fullStar.svg'
import noStar from '../../assets/emptyStar.svg'

const Stars = ({ rating }) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(
            <img
                className='star'
                key={`Star-${i}`}
                src={i < rating ? star : noStar}
                alt={i < rating ? 'étoile pleine' : 'étoile vide'}
            />
        )
    };

    return (
        <div>{stars}</div>
    )
};

export default Stars
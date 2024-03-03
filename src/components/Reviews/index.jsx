import { useLocation } from 'react-router-dom';

const Reviews = () => {
  const location = useLocation();
  const reviews = location.state.infoReviews;
  return reviews.length ? (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <h3>{review.author}</h3>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <h3>We don't have any reviews for this movie.</h3>
  );
};

export default Reviews;

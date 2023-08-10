function FeedbackStats({ feedback }) {
  // Calculate ratings average
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  average = average.toFixed(1).replace(/[.,]0$/, "");

  return (
    <div className="feedback-stats">
      <h2 className="font-semibold">{feedback.length} Reviews</h2>
      <h2 className="font-semibold">
        Average Rating:
        {feedback.length === 0 ? 0 : average}
      </h2>
    </div>
  );
}
export default FeedbackStats;

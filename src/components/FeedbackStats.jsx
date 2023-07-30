function FeedbackStats({ feedback }) {
  // Calculate ratings average
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  average = average.toFixed(1).replace(/[.,]0$/, "");

  return (
    <div className="feedback-stats">
      <h4 className="font-semibold">{feedback.length} Reviews</h4>
      <h4 className="font-semibold">
        Average Rating:
        {feedback.length === 0 ? 0 : average}
      </h4>
    </div>
  );
}
export default FeedbackStats;

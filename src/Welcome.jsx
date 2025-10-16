import { useGame } from "./GameContext";

export default function Welcome() {
  const { start, highScores } = useGame();
  return (
    <>
      <section className="welcome">
        <p>Welcome to Whack a Mole!</p>
        <p>Whack the mole to rack points.</p>
        <p>How many Moles can you Whack?!</p>
        <button onClick={start}>PLAY</button>
      </section>
      <section className="highscores">
        <h2>High Scores</h2>
        <ul>
          {highScores.length > 0 ? (
            highScores.map((score, i) => <li key={i}>{score}</li>)
          ) : (
            <li>The Next Challanger Awaits!</li>
          )}
        </ul>
      </section>
    </>
  );
}

import { useState } from 'react';
import magicBallImg from '../assets/images/magic-ball.png';
import Loader from './loader';
import styles from './fortuneTeller.styles.module.scss';
import { answers } from '../data';


const fortuneTeller = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const generateAnswer = () => {
    if (!question.trim()) return; //reikia pavaliduoti inputa

    setLoading(true);
    setAnswer('');

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * answers.length);
      setAnswer(answers[randomIndex]);
      setLoading(false);
    }, 1000);
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Užduok savo klausimą</h1>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={magicBallImg} alt='magic ball' />
        <span className={styles.answer}>
          {loading ? <Loader /> : answer}
        </span>
      </div>
      <form
        className={styles.formWrapper}
        onSubmit={(e) => {
          e.preventDefault(); // kad puslapis nespustelėtų
          generateAnswer();
        }}
      >
        <input className={styles.input} type='text' value={question} onChange={(e) => setQuestion(e.target.value)} />
        <button className={styles.button} type='submit'>Klausti</button>
      </form>
    </div>
  )
}

export default fortuneTeller
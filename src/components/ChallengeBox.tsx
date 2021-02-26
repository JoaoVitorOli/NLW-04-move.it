import { useContext } from "react";
import styles from "../styles/components/ChallengeBox.module.css";

import { ChallengesContext } from "../contexts/ChallengeContext";
import { CountdownContext } from "../contexts/CountdownContext";
import { CompletedChallenge } from "./CompletedChallenges";

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <div className={styles.challengeBoxContainer}>
     { activeChallenge ? (
       <div className={styles.challengeActive}>
         <header>Ganhe {activeChallenge.amount} xp</header>
         
         <main>
           <img src={`icons/${activeChallenge.type}.svg`} />
           <strong>Novo desafio</strong>
           <p>{activeChallenge.description}</p>
         </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={handleChallengeFailed}
            >
             falhei
            </button>
            <button  
              type="button"
              className={styles.challengeSuccceededButton}
              onClick={handleChallengeSucceeded}
            >
             Completei
           </button>
          </footer>
       </div>
     ) : (
      <div className={styles.challengeNotActive}>
        <strong>
          Inicie um ciclo para receber desafios e serem completados
        </strong>
        <p>
          <img src="icons/level-up.svg" alt="Level Up"/>
          Avance de level completando desafios.
        </p>
      </div>
     ) }
    </div>
  );
}
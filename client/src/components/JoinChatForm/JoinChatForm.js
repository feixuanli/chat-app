import React from 'react';
import styles from './JoinChatForm.module.css';

const JoinChatForm = () => {
  return (
    <div className={styles.joinChatContainer}>
        <h1>Join a Room to Chat</h1>
        <form className={styles.form}>
            <input
                type="text"
                placeholder="enter your name"
                required
                className={styles.input}
            />
            <input
                type="text"
                placeholder="enter room name"
                required
                className={styles.input}
            />
            <button type="submit" className={styles.button}>
                    Join room now
            </button>
        </form>
    </div>
  )
}

export default JoinChatForm
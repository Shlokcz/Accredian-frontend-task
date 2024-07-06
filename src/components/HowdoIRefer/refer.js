import React from 'react'
import Styles from "./refer.module.css";

const Refer = () => {
  return (
    <section className={Styles.refer}>
        <div className={Styles.referText}>
            <p>How do I <span>refer</span></p>
        </div>
        <div className={Styles.referImg}>
            <div className={Styles.addfriendImg}>
                <img src="/images/addfriend.png" alt="addfriend" />
            </div>
            {/* <img src="/images/referimg.png" alt="referimg" /> */}
            <div className={Styles.listImg}>
                <img src="/images/list.png" alt="list" />
            </div>
            <div className={Styles.vaultImg}>
                <img src="/images/vault.png" alt="vault" />
            </div>
        </div>
        <div className={Styles.referBtn}>
            <button>Refer Now</button>
        </div>
    </section>
  )
}

export default Refer;
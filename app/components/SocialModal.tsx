"use client";
import styles from "../page.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLink, faEnvelope } from "@fortawesome/free-solid-svg-icons";
// interface SocialModalProps {
//   shareSelected: boolean;
//   setShareSelected: (value: boolean) => void;
// }

export default function SocialModal() {
 

  return (
    <div className={styles.socialModal}>
      

      <section className={styles.socialModal}>
        <ul>
          <li>
            <button>
              <FontAwesomeIcon icon={faSquareFacebook} />
                   Share on Facebook
            </button>
            
          </li>
          <li>
            <button>
            <FontAwesomeIcon icon={faSquareXTwitter} />
                Share on X
            </button>

          </li>
          <li>
            <button>
            <FontAwesomeIcon icon={faEnvelope} />
                 Share via Email
            </button>
          </li>
          <li>
            <button>
            <FontAwesomeIcon icon={faLink} />
                 Copy Link
            </button>
          </li>
        </ul>
      </section>
    </div>
  );
}
const RED_HEART = '❤️'
const WHITE_HEART = '🤍'

/** @type {import('@enhance/types').EnhanceElemFn} */
export default function LikeButton({ html, state: { store } }) {
  const { tally, liked } = store

  return html`
    <style>
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      button {
        text-shadow: 0 1px 2px #555;
        font-size: 3rem;
      }
    </style>

    <form method="POST" action="/">
      <button type="submit" name="like" value="like">
        ${liked ? RED_HEART : WHITE_HEART}
      </button>
    </form>

    <div>${tally || 0}</div>
  `
}

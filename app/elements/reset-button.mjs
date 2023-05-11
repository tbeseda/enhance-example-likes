/** @type {import('@enhance/types').EnhanceElemFn} */
export default function ResetButton({ html, state }) {
  const { attrs: { size } } = state

  return html`
    <style>
      form {
        display: inline-block;
      }
      button {
        color: crimson;
      }
      button.small {
        font-size: 0.7rem;
        text-transform: uppercase;
      }
    </style>

    <form method="POST" action="/">
      <button type="submit" name="reset-session" value="reset-session" class="${size}">
        Reset
      </button>
    </form>
  `
}

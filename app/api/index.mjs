import data from '@begin/data'

const TABLE_NAME = 'stats'

/** @type {import('@enhance/types').EnhanceApiFn} */
export async function get({ session }) {
  const { liked } = session

  // get the likes tally from the stats table
  let likes = await data.get({ table: TABLE_NAME, key: 'likes' })

  if (!likes) { // likes isn't in the stats table yet
    likes = await data.set({ table: TABLE_NAME, key: 'likes', tally: 0 })
  }

  return {
    json: { liked, tally: likes.tally },
  }
}

/** @type {import('@enhance/types').EnhanceApiFn} */
export async function post({ body, session }) {
  const { like, 'reset-session': reset } = body
  let liked = session.liked

  // update likes tally
  if (like) {
    if (liked) { // already liked, unlike
      await data.decr({ table: TABLE_NAME, key: 'likes', prop: 'tally' })
      liked = false
    } else { // like
      await data.incr({ table: TABLE_NAME, key: 'likes', prop: 'tally' })
      liked = true
    }
  }

  // reset the session if reset is present
  if (reset) liked = false

  return {
    session: { liked },
    location: '/',
    status: 302,
  }
}
